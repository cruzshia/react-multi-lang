import { combineEpics } from 'redux-observable';
import fetchEpic from './fetchEpic';

export default combineEpics(
    fetchEpic
);