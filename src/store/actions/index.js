import { ADD_ORDER } from "./actionTypes";

export function addOrder(payload){
    return { type: ADD_ORDER, payload };
};