import { createSelector } from "reselect";

export const getSavedTweets = (state) => state.saverReducer.savedTweets;
export const getSerchKey = (state) => state.saverReducer.serchKey;
export const getTweetResult = (state) => state.saverReducer.tweetResult;

// export const getSavedTweets = (state) =>
//   createSelector(getTweetResult, (tweets) => tweets);
