import {Observable} from 'rxjs/Observable';
import {combineEpics} from 'redux-observable';
import 'rxjs/operator/filter';
import 'rxjs/operator/map';
import {TPayloadAction} from '../store/types';
import {
  TFetchRacesAligmentCompletedAction,
  TRacesAndAlignments
} from '../store/rules/types';

const fetchRacesCompleted = (payload: TRacesAndAlignments):
  TFetchRacesAligmentCompletedAction => ({
  type: 'FETCH_RACES_ALIGNMENTS_COMPLETED',
  payload
});

function fetchRacesEpic(action$: Observable<TPayloadAction>):
  Observable<TFetchRacesAligmentCompletedAction> {

  return action$.filter(({ type }) => type === 'FETCH_RACES_ALIGNMENTS')
    .map(action =>
      fetchRacesCompleted({
        tiefling: [
          'Chaotic Neutral',
          'Neutral',
          'Chaotic Evil',
          'Neutral Evil'
        ],
        human: [
          'Lawful Good',
          'Neutral Good',
          'Chaotic Good',
          'Neutral',
          'Lawful Neutral',
          'Neutral Evil',
          'Lawful Evil'
        ],
        elf: [
          'Neutral',
          'Neutral Good',
          'Lawful Neutral',
          'Lawful Good'
        ],
      })
    );
}

export default combineEpics(
  fetchRacesEpic
);
