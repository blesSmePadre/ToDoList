import * as types from '../constants/ActionTypes';

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  let filter = action.payload;
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:{
      return filter;
      break;
    }
    default:
      return state;
  }
}

export default visibilityFilter;
