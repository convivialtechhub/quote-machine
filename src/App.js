/* eslint-disable no-undef */

import "./App.css";
import Text from "./components/Text.js";
import Author from "./components/Author.js";
import React from "react";
let pack = [
  {
    id: 1,
    text:
      "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough. ",
    name: "Oprah Winfrey",
  },
  {
    id: 2,
    text: "Do what you can, where you are, with what you have.",
    name: " Teddy Roosevelt",
  },
  {
    id: 3,
    text: "Everything has beauty, but not everyone can see.",
    name: "  Confucius",
  },
  {
    id: 4,
    text:
      "You may be disappointed if you fail, but you are doomed if you don’t try.",
    name: "Beverly Sills",
  },
  {
    id: 5,
    text:
      "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
    name: " John Lennon",
  },
  {
    id: 6,
    text:
      "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.",
    name: " Erma Bombeck",
  },
  {
    id: 7,
    text: "The best revenge is massive success.",
    name: "  Frank Sinatra",
  },
  {
    id: 8,
    text: "Life shrinks or expands in proportion to one’s courage.",
    name: "  Anais Nin",
  },
  {
    id: 9,
    text: "We must balance conspicuous consumption with conscious capitalism.",
    name: " Kevin Kruse",
  },
  {
    id: 10,
    text: "You become what you believe.",
    name: " Oprah Winfrey",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.getRandomColor = this.getRandomColor.bind(this);
  }
  //function for generating random colors
  getRandomColor() {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    $("body").css("background-color", color);

    $(".text").css("color", color);
    $(".author").css("color", color);
    $(".new-quote").css("background", color);
    $(".twitter").css("background", color);
  }

  componentDidMount() {
    var randomNo = Math.floor(Math.random() * 10 + 1);
    //picking the array component whose id matches with randomNo
    var arr = pack.filter((item) => item.id === randomNo);

    this.setState({
      quote: arr[0].text,
      author: arr[0].name,
    });
    this.getRandomColor();
  }

  handleClick() {
    var randomNo = Math.floor(Math.random() * 10 + 1);
    //picking the array component whose id matches with randomNo
    var arr = pack.filter((item) => item.id === randomNo);

    this.setState({
      quote: arr[0].text,
      author: arr[0].name,
    });
    this.getRandomColor();
  }

  render() {
    return (
      <div className="quote-box">
        <Text text={this.state.quote} />
        <Author name={this.state.author} />
        <button className="twitter">
          <a href="https://twitter.com/intent/tweet" className="tweet-quote">
            {" "}
            <i class="fab fa-twitter footer-icon"></i>
          </a>
        </button>

        <button className="new-quote" onClick={this.handleClick}>
          New Quote
        </button>
      </div>
    );
  }
}
export default App;
