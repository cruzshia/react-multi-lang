import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from '../actions';

export type RateAction = ActionType<typeof actions>;

export type LangState = Readonly<{
    readonly rates: Array<String>;
}>;

export type State = {
    readonly rates: Array<String>;
};

export const initialState: State = {
    rates: [],
};

export default combineReducers<LangState, RateAction>({
    rates: (state = [], action) => {
        switch (action.type) {
            case getType(actions.setRate):
                return action.payload.rates || state;
            default:
                return state;
        }
    }
});