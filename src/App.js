import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import TweetContainer from "./container/tweetContainer";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <TweetContainer />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
