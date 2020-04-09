import * as types from '../actions/actionTypes';

const initState = {
    convidInfo: null,
    covidDataList: [],
  };

export default function(state = initState, action) {
    switch (action.type) {
      case types.COUNTRY_WIDE_DATA:
        return { ...state, convidInfo: action.payload };
      case types.COUNTRY_WIDE_DATA_LIST:
        return { ...state, covidDataList: action.payload };
      default:
        return state;
    }
  }