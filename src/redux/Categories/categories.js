import { checkStatus } from './actionTypes';

export function reducer(state = [], action) {
  switch (action.type) {
    case checkStatus:
      return 'Under construction';
    default:
      return state;
  }
}
