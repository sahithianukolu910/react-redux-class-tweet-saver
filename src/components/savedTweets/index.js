import React, { Component } from "react";
import { connect } from "react-redux";

import TweetCard from "../tweetCard";
import { DropTarget } from "react-dnd";
class SavedTweetsComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { connectDropTarget, savedTweets } = this.props;
    return connectDropTarget(
      <div className="tweet-saved-container">
        <div className="search-row">
          <h1>Saved Tweets</h1>
        </div>

        <div className="tweet-result-container">
          {savedTweets.map((tweet, i) => (
            <TweetCard key={i} tweet={tweet} />
          ))}
        </div>
      </div>
    );
  }
}

const spec = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    console.log(monitor.getDropResult());
    props.onDrop(item);
    return item;
  },
};
const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    //   isOver: monitor.isOver(),
    //   isOverCurrent: monitor.isOver({ shallow: true }),
    //   canDrop: monitor.canDrop()
  };
};

export default DropTarget("form-elements", spec, collect)(SavedTweetsComponent);
