import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectors, actions } from "../../reducers";
import TweetCard from "../tweetCard";

class DetailsComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { serchKey, tweetResult } = this.props;
    return (
      <div className="tweet-search-container">
        <div className="search-row">
          <input
            id="serchKey"
            type="text"
            placeholder="serchKey"
            className="search-input"
            value={serchKey}
            onChange={(event) =>
              this.props.actions.doUpdateSearchKey(event.target.value)
            }
          />

          <button
            id="next"
            type="button"
            className="search-button"
            onClick={this.props.actions.getTweets}
          >
            Search
          </button>
        </div>

        <div className="tweet-result-container">
          {tweetResult.map((tweet, i) => (
            <TweetCard key={i} tweet={tweet} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = () =>
  createStructuredSelector({
    serchKey: selectors.getSerchKey,
    tweetResult: selectors.getTweetResult,
  });

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsComponent);
