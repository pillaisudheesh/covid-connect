import * as types from "../actions/actionTypes"


const initialState = {
    orders:[]
};

function rootReducer(state = initialState, action){
    switch(action.type){
        case types.ADD_ORDER:
            return Object.assign({}, state, {
                orders: state.orders.concat(action.payload)
            });
        default:
            return state;
    } 
}

export default rootReducer;