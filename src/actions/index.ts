import {
  TValuePayload,
  TUpdateInArray,
  TIndexPayload,
  TSaveForm
} from '../store/form/types';
import {TPayloadAction} from '../store/types';
import {TFetchRacesAligmentAction} from '../store/rules/types';

export const saveForm = ({path, value}: TSaveForm): TPayloadAction => ({
  type: 'SAVE_FORM',
  payload: {
    path,
    value
  }
});

export const addIntoArray = ({path , value}: TValuePayload):
  TPayloadAction => ({
  type: 'SAVE_INDEXED_FORM_VALUE',
  payload: {
    path,
    value
  }
});

export const putInArray = ({value, index, path}: TUpdateInArray):
  TPayloadAction => ({
  type: 'UPDATE_INDEXED_FORM_VALUE',
  payload: {
    path,
    value,
    index
  }
});

export const removeFromArray = ({index, path}: TIndexPayload):
  TPayloadAction => ({
  type: 'REMOVE_INDEXED_FORM_VALUE',
  payload: {
    index,
    path
  }
});

export const fetchRacesAndAlignments = (): TFetchRacesAligmentAction => ({
  type: 'FETCH_RACES_ALIGNMENTS'
});
