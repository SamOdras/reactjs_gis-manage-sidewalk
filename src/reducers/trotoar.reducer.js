import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_DATA_TROTOAR,
  FETCH_DATA_TROTOARS,
  CREATE_DATA_TROTOAR,
  DELETE_DATA_TROTOAR,
  UPDATE_DATA_TROTOAR
} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA_TROTOARS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_DATA_TROTOAR:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_DATA_TROTOAR:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_DATA_TROTOAR:
      return { ...state, [action.payload.id]: action.paylaod };
    case DELETE_DATA_TROTOAR:
      return _.omit(state, action.payload)
    default:
      return state;
  }
};
