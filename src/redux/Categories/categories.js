import checkStatus from './actionTypes';

const cateReducer = function reducer(state = 'Categories', action) {
  switch (action.type) {
    case checkStatus:
      return 'Under construction';
    default:
      return state;
  }
};

export default cateReducer;
