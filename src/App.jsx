import "./App.css";
import React from "react";

const setOfQuotes = [
  {
    quote: "The hardest choices require the strongest wills",
    author: "Thanos",
  },
  {
    quote: "You know, I keep telling everybody they should move on and grow",
    author: "Steve Rogers",
  },
  {
    quote: "I can do this all day.",
    author: "Steve Rogers",
  },
  {
    quote: "Love you 3000.",
    author: "Tony stark",
  },
  {
    quote: "It's not about how much we lost. It's about how much we have left.",
    author: "Tony Stark",
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.quotes = setOfQuotes;

    this.state = this._randomQuote();
    this.shuffle = this.shuffle.bind(this);
  }

  _randomQuote() {
    return this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }

  shuffle() {
    this.setState(this._randomQuote);
  }

  render() {
    return (
      <div class="main">
        <div id="quote-box">
        <h2 className="quote" id="text">{this.state.quote}</h2>
        <p className="author" id="author">~ {this.state.author}</p>
        <div className="action">
        <button
        id="new-quote"
          className="button"
          onClick={this.shuffle}
        >
          New Quote
        </button>
          <a
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            target={"_blanks"}
          >
            Tweet
          </a>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
