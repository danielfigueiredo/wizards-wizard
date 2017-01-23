import {combineEpics} from 'redux-observable';
import racesEpics from './character';

export const rootEpic = combineEpics(
  racesEpics
);
