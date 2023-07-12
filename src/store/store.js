import { combineReducers } from "redux";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import logger from "redux-logger";

function feeling(state = 0, action) {
    switch (action.type) {
      case "SET_FEELINGS":
        return action.payload;
      default:
        return state;
    }
  }

  function understanding(state = 0, action) {
    switch (action.type) {
      case "SET_UNDERSTANDING":
        return action.payload;
      default:
        return state;
    }
  }

  function support(state = 0, action) {
    switch (action.type) {
      case "SET_SUPPORT":
        return action.payload;
      default:
        return state;
    }
  }

  function comment(state = '', action) {
    switch (action.type) {
      case "SET_COMMENT":
        return action.payload;
      default:
        return state;
    }
  }

  
  const store = createStore(
    combineReducers({feeling, understanding, support, comment}),
    applyMiddleware(logger)
  );
  
  export default store;
  