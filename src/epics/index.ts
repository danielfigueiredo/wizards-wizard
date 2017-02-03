import {combineEpics} from 'redux-observable';
import racesEpics from './rules';

export const rootEpic = combineEpics(
  racesEpics
);
