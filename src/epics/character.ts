import {Observable} from 'rxjs/Observable';
import {combineEpics} from 'redux-observable';
import 'rxjs/operator/filter';
import 'rxjs/operator/map';
import {IPayloadAction} from '../actions/index';

const fetchRacesCompleted = payload => ({
  type: 'FETCH_RACES_COMPLETED',
  payload
});

function fetchRacesEpic(action$: Observable<IPayloadAction>) {
  return action$.filter(({ type }) => type === 'FETCH_RACES')
    .map(action =>
      fetchRacesCompleted([])
    );
}

export default combineEpics(
  fetchRacesEpic
);
