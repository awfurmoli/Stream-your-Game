import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      // changes array to object with key of id from array
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_STREAM:
      // add a key value of id and value of payload to the new object
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      // add a key value of id and value of payload to the new object
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      // add a key value of id and value of payload to the new object
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      // omit makes a new object of state, and deletes the key provied
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
