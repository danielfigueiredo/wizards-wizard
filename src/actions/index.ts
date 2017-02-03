import {
  TValuePayload,
  TUpdateInArray,
  TIndexPayload,
  TSaveForm
} from '../store/form/types';
import {TPayloadAction} from '../store/types';
import {TFetchRacesAligmentAction} from '../store/wizard/types';

export const saveForm = ({path, value}: TSaveForm): TPayloadAction => ({
  type: 'SAVE_FORM',
  payload: {
    path,
    value
  }
});

export const addIntoArray = ({path , value}: TValuePayload):
  TPayloadAction => ({
  type: 'PUSH_INTO_ARRAY',
  payload: {
    path,
    value
  }
});

export const putInArray = ({value, index, path}: TUpdateInArray):
  TPayloadAction => ({
  type: 'UPDATE_IN_ARRAY',
  payload: {
    path,
    value,
    index
  }
});

export const removeFromArray = ({index, path}: TIndexPayload):
  TPayloadAction => ({
  type: 'REMOVE_FROM_ARRAY',
  payload: {
    index,
    path
  }
});

export const fetchRacesAndAlignments = (): TFetchRacesAligmentAction => ({
  type: 'FETCH_RACES_ALIGNMENTS'
});
