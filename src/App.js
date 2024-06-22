import twitter_icon from "./Assets/Twitter-X.png";

import React, { useState } from "react";
import "./App.css";

const App = () => {
  let quotes = [];
  async function loadQuotes() {
    const response = await fetch("https://type.fit/api/quotes");
    quotes = await response.json();
  }

  const random = () => {
    const select = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(select);
    const newColor = getRandomColor;
    setColor(newColor);
  };
  const [quote, setQuote] = useState({
    text: "Difficulties increase nearer we get to the goal.",
    author: "Johann Wolfgang von Goethe",
  });

  const [color, setColor] = useState("black");

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`
    );
  };
  loadQuotes();

  return (
    <div id="Application" style={{ backgroundColor: color }}>
      <div id="quote-box" style={{ background: "#fff" }}>
        <div id="text" style={{ color: color }}>
          {quote.text}
        </div>
        <div>
          <div className="line" style={{ background: color }}></div>
          <div className="bottom">
            <div id="author" style={{ color: color }}>
              - {quote.author.split(",")[0]}
            </div>
            <div id="icons">
              <button
                id="new-quote"
                style={{
                  backgroundColor: color,
                }}
                onClick={() => {
                  random();
                }}
              >
                New quote
              </button>
              <img
                id="tweet-quote"
                style={{ backgroundColor: color }}
                src={twitter_icon}
                alt="tweet quote button"
                onClick={() => {
                  twitter();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
