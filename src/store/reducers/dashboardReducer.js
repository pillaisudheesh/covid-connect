import * as types from '../actions/actionTypes';

const initState = {
    convidInfo: null,
  };

export default function(state = initState, action) {
    switch (action.type) {
      case types.COUNTRY_WIDE_DATA:
        return { ...state, convidInfo: action.payload };
      default:
        return state;
    }
  }