import { SAVER_ACTIONS } from "../../constants/saver.constants";
import * as saverSelectors from "./selector";
import * as saverActions from "./actions";
import { handleActions } from "redux-actions";

const initialState = {
  savedTweets: [],
  tweetResult: [],
  hasErrorWhileLoading: false,
};

const saverReducer = handleActions(
  {
    [SAVER_ACTIONS.INIT_APP]: (state, payload) => {
      const savedTweets = localStorage.getItem("savedTweets");

      return {
        ...state,
        ...{
          savedTweets: savedTweets ? JSON.parse(savedTweets) : [],
          hasErrorWhileLoading: false,
        },
      };
    },
    [SAVER_ACTIONS.SAVE_TWEET]: (state, payload) => {
      const updatedTweets = [...state.savedTweets, payload.payload.tweet];
      localStorage.setItem("savedTweets", JSON.stringify(updatedTweets));
      return {
        ...state,
        ...{
          savedTweets: updatedTweets,
          hasErrorWhileLoading: false,
        },
      };
    },
    [SAVER_ACTIONS.SET_GET_TWEET_ERROR]: (state, payload) => ({
      ...state,
      ...{
        tweetResult: [],
        hasErrorWhileLoading: true,
      },
    }),
    [SAVER_ACTIONS.SET_GET_TWEET_RESULT]: (state, payload) => ({
      ...state,
      ...{
        tweetResult: [...payload.payload],
        hasErrorWhileLoading: false,
      },
    }),
    [SAVER_ACTIONS.SAVE_SEARCH_KEY]: (state, payload) => ({
      ...state,
      ...{
        serchKey: payload.payload,
      },
    }),
  },

  initialState
);
export default saverReducer;

export const selectors = { ...saverSelectors };
export const actions = { ...saverActions };
