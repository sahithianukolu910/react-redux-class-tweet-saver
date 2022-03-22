import React, { Component } from "react";
import TweetList from "../../components/tweetList";
import SavedTweetList from "../../components/savedTweets";
import { bindActionCreators, compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectors, actions } from "../../reducers";
import { connect } from "react-redux";
class TweetContainerComponent extends Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
    this.props.actions.doInitApp();
  }
  onDrop(component) {
    this.props.actions.updateSavedTweet(component);
  }

  render() {
    const { savedTweets } = this.props;
    return (
      <div className="tweet-container">
        <TweetList />
        <SavedTweetList onDrop={this.onDrop} savedTweets={savedTweets} />
      </div>
    );
  }
}

const mapStateToProps = () =>
  createStructuredSelector({
    savedTweets: selectors.getSavedTweets,
  });

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetContainerComponent);
