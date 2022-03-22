import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectors, actions } from "../../reducers";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import { DragSource } from "react-dnd";

class TweetCardComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { key, tweet, connectDragSource } = this.props;
    return connectDragSource(
      <div>
        <div className="tweet-li-container">
          <div className="tweet-li-left-container">
            <img
              src={tweet.user.profile_image_url_https}
              alt="Girl in a jacket"
            />
          </div>
          <div className="tweet-li-right-container">
            <div className="tweet-li-up-row">
              <div className="tweet-li-name">{tweet.user.name} </div>
              <div className="tweet-li-date">{tweet.created_at}</div>
            </div>
            <div className="tweet-li-down-row">
              {ReactHtmlParser(tweet.text)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const spec = {
  beginDrag(props, monitor, component) {
    const item = { ...props };
    console.log("beginDrag", item);
    return item;
  },
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
};

export default DragSource("form-elements", spec, collect)(TweetCardComponent);
