import { createStandardAction, action } from 'typesafe-actions';

export const SET_RATE = 'rates/SET';
export const GET_RATE = 'rates/GET';

export const setRate = createStandardAction(SET_RATE).map(
    (payload: { rates: Array<String> }) => ({
        payload: {
            rates: payload.rates
        }
    })
);
//https://api.coinbase.com/v2/exchange-rates
export const fetchRate = () => action(GET_RATE);