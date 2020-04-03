import * as types from './actionTypes';
import covidData from '../data/covidTimelineData';



export function countryWideCovidInfo(country,date, since){
    return async dispatch => {
        debugger;
        const data = covidData;
        const currentDateValue = new Date(date);
        currentDateValue.setDate(currentDateValue.getDate() - since);
        const dd = String(currentDateValue.getDate()).padStart(2, '0');
        const mm = String(currentDateValue.getMonth() + 1).padStart(2, '0'); 
        const yyyy = currentDateValue.getFullYear();

        const dateTwoDaysAgo = mm + '/' + dd + '/' + yyyy;

        const payload = data.countries[country].filter(data => {
            return data.date === date;
        });

        const oldData = data.countries[country].filter(data => {
            return data.date === dateTwoDaysAgo;
        });
        let covidInfo = payload[0];
        covidInfo.oldConfirmed = oldData[0].confirmed;
        covidInfo.oldDeceased = oldData[0].deceased;
        covidInfo.oldRecovered = oldData[0].recovered;
        dispatch(countryWideDataSuccess(covidInfo));
    }
}

export function countryWideDataSuccess(payload){
    return {
        type: types.COUNTRY_WIDE_DATA,
        payload: payload,
    };
}