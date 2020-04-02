import * as types from './actionTypes';


export function countryWideCovidInfo(country){
    return async dispatch => {
        const payload = {
            confirmed: 1764,
            recovered: 150,
            deceased: 50
        }
        dispatch(countryWideDataSuccess(payload));
    }
}

export function countryWideDataSuccess(payload){
    return {
        type: types.COUNTRY_WIDE_DATA,
        payload: payload,
    };
}