import {TPayloadAction} from '../types';
import {IRules} from './types';
import {merge} from 'ramda';

const initialState: IRules = {
  racesAndAlignments: {
    tiefling: [],
    human: [],
    elf: []
  }
};

export function rulesReducer(state = initialState, action: TPayloadAction) {
  switch (action.type) {
  case 'FETCH_RACES_ALIGNMENTS_COMPLETED':
    return merge(
      state,
      {racesAndAlignments: action.payload}
    );
  default:
    return state;
  }
}
