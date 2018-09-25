import { GET_RATE, fetchRateFulfilled, Action } from '../actions';
import { ofType, ActionsObservable } from "redux-observable";
import { mergeMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

interface responseObj {
    data: object   
}

const fetchEpic = (action$: ActionsObservable<Action>) => action$.pipe(
    ofType(GET_RATE),
    mergeMap(action =>
        ajax.getJSON(`https://api.coinbase.com/v2/exchange-rates`).pipe(
            map((response: responseObj) => fetchRateFulfilled(response.data))
        )
    )
);

export default fetchEpic;
