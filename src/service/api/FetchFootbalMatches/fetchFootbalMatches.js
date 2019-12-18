import { fetch } from './fetch';

export const SEND_ACTIVE_USERS_REQUEST = 'SEND_ACTIVE_USERS_REQUEST';
export const SEND_ACTIVE_USERS_FAILURE = 'SEND_ACTIVE_USERS_FAILURE';
export const SEND_ACTIVE_USERS_SUCCESS = 'SEND_ACTIVE_USERS_SUCCESS';

const sendRequest = () => ({
  type: SEND_ACTIVE_USERS_REQUEST,
});

const sendSuccess = (data, params) => ({
  data,
  params,
  type: SEND_ACTIVE_USERS_SUCCESS,
});

const sendFailure = (error) => ({
  error,
  type: SEND_ACTIVE_USERS_FAILURE,
});

export const fetchFootbalMatches = (params) => (dispatch) => {
  dispatch(sendRequest());
  return fetch(params)
    .then((data) => {dispatch(sendSuccess(data, params))})
    .catch((error) => dispatch(sendFailure(error)));
};
