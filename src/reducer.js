import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import blocks from "./service/api/FetchBlocks/reducer"


export default combineReducers({
  blocks,
  toastr: toastrReducer,
});
