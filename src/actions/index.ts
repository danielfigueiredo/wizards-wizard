import {
  TValuePayload,
  TUpdateInArray,
  TIndexPayload,
  TSaveForm,
  TResetForm,
  TPayloadAction,
  TFetchRacesAligmentAction
} from '../store/types';

export const saveForm = ({path, value}: TSaveForm): TPayloadAction => ({
  type: 'SAVE_FORM',
  payload: {
    path,
    value
  }
});

export const resetForm = ({path}: TResetForm): TPayloadAction => ({
  type: 'RESET_FORM',
  payload: {
    path
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
