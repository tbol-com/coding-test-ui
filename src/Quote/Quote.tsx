import React from "react";
import "./Quote.css";

/*
 * This is a GET endpoint, that returns a random quote
 * Format: {"content":"This is a random quote"}
 * (There is other data in the response, but you can ignore it)
 */
const QUOTE_API_URL = "https://api.quotable.io/random";

const fetchRandomQuote = async () => {}; // Implement this function

/*
 * Implement a simple app, that displays a random quote on the click of a button.
 * Use the QUOTE_API_URL above to request data via GET.
 * Use Hooks for your implementation.
 */
const Quote: React.FC = () => {
  return <h1 className="quoteTitle">Quote Component</h1>;
};

export default Quote;
