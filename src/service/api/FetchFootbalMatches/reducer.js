import {
  SEND_ACTIVE_USERS_FAILURE,
  SEND_ACTIVE_USERS_REQUEST,
  SEND_ACTIVE_USERS_SUCCESS,
} from './fetchFootbalMatches';

const initialState = {
  loading: false,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_ACTIVE_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEND_ACTIVE_USERS_SUCCESS:
      return {
        data: action.data, // nunca esquecer de mudar
        loading: false,
      };
    case SEND_ACTIVE_USERS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
