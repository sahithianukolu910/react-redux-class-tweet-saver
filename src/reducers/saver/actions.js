import { SAVER_ACTIONS } from "../../constants/saver.constants";

import { get } from "../../utils/httpClient";
import { createActions } from "redux-actions";
const rulesURL = "/api/search";
const simpleActions = createActions({
  [SAVER_ACTIONS.SAVE_TWEET]: undefined,
  [SAVER_ACTIONS.SAVE_SEARCH_KEY]: undefined,
  [SAVER_ACTIONS.SET_GET_TWEET_ERROR]: undefined,
  [SAVER_ACTIONS.SET_GET_TWEET_RESULT]: undefined,
  [SAVER_ACTIONS.INIT_APP]: undefined,
});

export function updateSavedTweet(payload) {
  return (dispatch, getState) => {
    const { saverReducer } = getState();
    if (saverReducer?.savedTweets?.length) {
      if (
        !saverReducer?.savedTweets?.find(
          (tweet) => tweet.id === payload.tweet.id
        )
      ) {
        return dispatch(simpleActions.saveTweet(payload));
      }
    } else {
      dispatch(simpleActions.saveTweet(payload));
    }
  };
}

export function doUpdateSearchKey(payload) {
  return (dispatch) => {
    dispatch(simpleActions.saveSearchKey(payload));
  };
}

export function doInitApp() {
  return (dispatch) => {
    dispatch(simpleActions.initApp());
  };
}

export function getTweets() {
  return (dispatch, getState) => {
    const { saverReducer } = getState();
    return get(rulesURL + `?q=${saverReducer.serchKey}&count=10`)
      .catch((error) => {
        dispatch(simpleActions.setGetTweetError());
      })
      .then(({ data }) => {
        if (data?.data?.statuses?.length) {
          dispatch(simpleActions.setGetTweetResult(data?.data?.statuses));
        } else {
          dispatch(simpleActions.setGetTweetError());
        }
      });
  };
}

const thunks = {
  updateSavedTweet: updateSavedTweet,
  getTweets: getTweets,
  doUpdateSearchKey: doUpdateSearchKey,
  doInitApp: doInitApp,
};

export const actions = { ...simpleActions, ...thunks };
