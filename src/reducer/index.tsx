import { combineReducers } from 'redux';
import * as actions from '../actions';

export type State = Readonly<{
    readonly rates: Object;
    readonly loading: boolean;
}>;

export const initialState: State = {
    rates: {},
    loading: false
};

export default combineReducers<State, actions.Action>({
    rates: (state = [], action: actions.Action) => {
        switch (action.type) {
            case actions.SET_RATE:
                return action.payload ? action.payload.rates : state;
            default:
                return state;
        }
    },
    loading: (state = false, action: actions.Action) => {
        switch (action.type) {
            case actions.SET_RATE:
                return false;
            case actions.GET_RATE:
                return true;
            default:
                return state;
        }
    }
});