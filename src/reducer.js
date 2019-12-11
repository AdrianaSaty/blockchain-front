import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import blocks from "./service/api/FetchBlocks/reducer"
import matches from "./service/api/FetchFootbalMatches/reducer"


export default combineReducers({
  matches,
  blocks,
  toastr: toastrReducer,
});
