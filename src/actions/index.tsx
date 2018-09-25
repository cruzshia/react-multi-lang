import { action } from 'typesafe-actions';

export interface Payload {
    rates: Object
}

export interface Action {
    type: string;
    payload?: Payload;
    params?: {};
}

export const SET_RATE = 'rates/SET';
export const GET_RATE = 'rates/GET'; 

export const fetchRate = () => action(GET_RATE);

export const fetchRateFulfilled = (payload: Object) => ({ type: SET_RATE, payload });