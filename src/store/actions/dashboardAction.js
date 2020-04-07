import * as types from './actionTypes';
import covidData from '../data/covidTimelineData';




function getCovidData(country, date, since) {
    debugger;
    const data = covidData;
    let dateSince = new Date(date);
    let payload = null;
    payload = data.countries[country].filter(data => {
        return data.date === date;
    });
    dateSince.setDate(dateSince.getDate() - since);
    const dd = String(dateSince.getDate()).padStart(2, '0');
    const mm = String(dateSince.getMonth() + 1).padStart(2, '0');
    const yyyy = dateSince.getFullYear();
    const dateDaysAgo = mm + '/' + dd + '/' + yyyy;
    let oldData = null;
    if (payload && payload.length > 0) {
        oldData = data.countries[country].filter(data => {
            return data.date === dateDaysAgo;
        });
    }
    else {
        dateSince = new Date(date);
        dateSince.setDate(dateSince.getDate() - 1);
        const dd = String(dateSince.getDate()).padStart(2, '0');
        const mm = String(dateSince.getMonth() + 1).padStart(2, '0');
        const yyyy = dateSince.getFullYear();
        const dateOneDayAgo = mm + '/' + dd + '/' + yyyy;
        payload = data.countries[country].filter(data => {
            return data.date === dateOneDayAgo;
        });
        oldData = data.countries[country].filter(data => {
            return data.date === dateDaysAgo;
        });
    }
    let covidInfo = payload[0];
    covidInfo.oldConfirmed = oldData[0].confirmed;
    covidInfo.oldDeceased = oldData[0].deceased;
    covidInfo.oldRecovered = oldData[0].recovered;
    return covidInfo;
}

export function countryWideCovidInfo(country,date, since){
    return async dispatch => {
        debugger;
        const covidInfo = getCovidData(country,date, since);
        dispatch(countryWideDataSuccess(covidInfo));
    }
    
}

export function countryWideDataSuccess(payload){
    return {
        type: types.COUNTRY_WIDE_DATA,
        payload: payload,
    };
}