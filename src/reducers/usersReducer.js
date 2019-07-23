import { FETCH_USER } from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USER: {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
