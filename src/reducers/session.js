import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISITERED_REQUEST,
  REGISITERED_SUCCESS,
  REGISITERED_FAIL
} from '../constants';

const initialState = {
  isFetching: false,
  auth: false,
  user: null,
  token: null,
  refresh_token: null,
};

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISITERED_REQUEST:
      return Object.assign({}, state, {isFetching: true});
    case LOGIN_SUCCESS:
    case REGISITERED_SUCCESS:
      return Object.assign({}, state, {isFetching: false, ...action.payload});
    case LOGIN_FAIL:
    case REGISITERED_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        auth: false,
        error: action.payload.response,
      });
    case LOGOUT:
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
}
