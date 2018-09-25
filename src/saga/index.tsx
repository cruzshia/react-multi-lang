import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { setRate, GET_RATE } from '../actions';

function* handleFetch() {
    try {
        const fetchData = () => fetch('https://api.coinbase.com/v2/exchange-rates')
            .then(response => Promise.resolve(response))
            .then(response => response.json());;
        const res = yield call(fetchData);

        if (res.error) {
        } else {
            yield put(setRate({
                rates: res.data.rates
            }));
        }
    } catch (err) {
        console.log(err);
    }
}

function* watchFetchRequest() {
    yield takeEvery(GET_RATE, handleFetch)
}

function* heroesSaga() {
    yield all([fork(watchFetchRequest)])
}

export default heroesSaga;