import { combineReducers } from 'redux';
import * as actions from '../actions';

export type State = Readonly<{
    readonly rates: Object;
}>;

export const initialState: State = {
    rates: {}
};

export default combineReducers<State, actions.Action>({
    rates: (state = [], action: actions.Action) => {
        switch (action.type) {
            case actions.SET_RATE:
                return action.payload ? action.payload.rates : state;
            default:
                return state;
        }
    }
});