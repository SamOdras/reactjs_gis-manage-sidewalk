import trotoar from '../api/trotoar';
import history from '../History';
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_DATA_TROTOAR,
  FETCH_DATA_TROTOARS,
  CREATE_DATA_TROTOAR,
  DELETE_DATA_TROTOAR,
  UPDATE_DATA_TROTOAR
} from "./types";

export const signIn = userData => {
  history.push('/');
  return {
    type: SIGN_IN,
    payload: userData
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createTrotoar = formValues => async dispatch => {
  const response = await trotoar.post("/trotoar", {...formValues});
  dispatch({
    type: CREATE_DATA_TROTOAR,
    payload: response.data
  })
  history.push('/sig/trotoar');
}

export const getTrotoars = () => async dispatch => {
  const response = await trotoar.get("/trotoar");
  dispatch({
    type: FETCH_DATA_TROTOARS,
    payload: response.data
  })
}
export const getTrotoar = id => async dispatch => {
  const response = await trotoar.get(`/trotoar/${id}`);
  dispatch({
    type: FETCH_DATA_TROTOAR,
    payload: response.data
  })
}

export const deleteTrotoar = (id) => async dispatch => {
  await trotoar.delete(`/trotoar/${id}`);
  dispatch({
    type: DELETE_DATA_TROTOAR,
    payload: id
  })
  history.push('/sig/trotoar')
}

export const updateTrotoar = (id, formValues) => async dispatch => {
  const response = await trotoar.patch(`/trotoar/${id}`, formValues);
  dispatch({
    type: UPDATE_DATA_TROTOAR,
    payload: response.data
  })
  history.push('/sig/trotoar');
}