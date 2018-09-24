import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import * as actions from '../actions';

export type LangAction = ActionType<typeof actions>;

export type LangState = Readonly<{
    readonly lang: string;
}>;

export type State = {
    readonly lang: string;
};

export const initialState: State = {
    lang: 'zh-TW',
};

export default combineReducers<LangState, LangAction>({
    lang: (state = 'zh-TW', action) => {
        switch (action.type) {
            case getType(actions.setLang):
                return action.payload.lang || state;
            default:
                return state;
        }
    }
});