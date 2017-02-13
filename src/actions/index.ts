import {
  TValuePayload,
  TIndexPayload,
  TPayloadAction,
  TFetchRacesAligmentAction,
  TArchiveAction,
  TPathActionPayload,
  TRemoveArchivedAction
} from '../store/types';

export const saveForm = (payload: TValuePayload): TPayloadAction => ({
  type: 'SAVE_FORM',
  payload
});

export const resetForm = (payload: TPathActionPayload): TPayloadAction => ({
  type: 'RESET_FORM',
  payload
});

export const addIntoArray = (payload: TValuePayload):
  TPayloadAction => ({
  type: 'SAVE_INDEXED_FORM_VALUE',
  payload
});

export const putInArray = (payload: TValuePayload & TIndexPayload):
  TPayloadAction => ({
  type: 'UPDATE_INDEXED_FORM_VALUE',
  payload
});

export const removeFromArray = (payload: TIndexPayload):
  TPayloadAction => ({
  type: 'REMOVE_INDEXED_FORM_VALUE',
  payload
});

export const fetchRacesAndAlignments = (): TFetchRacesAligmentAction => ({
  type: 'FETCH_RACES_ALIGNMENTS'
});

export const archiveForm = (payload: TIndexPayload): TArchiveAction => ({
  type: 'ARCHIVE_FORM',
  payload
});

export const removeArchivedForm = (payload: TIndexPayload): TRemoveArchivedAction => ({
  type: 'REMOVE_ARCHIVED_FORM',
  payload
});
