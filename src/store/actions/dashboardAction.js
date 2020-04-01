import * as types from './actionTypes';


export function getCounrtyWideCovidInfo(country){
    return async dispatch => {
        const payload = {
            confirmed: 1200,
            recovered: 20,
            deceased: 30
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