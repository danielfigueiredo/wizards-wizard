import {
  IForm,
  TSaveAction,
  TResetAction,
  TRemoveFromArrayAction,
  TUpdateInArrayAction,
  TPushIntoArrayAction,
  TArchiveAction,
  TRemoveArchivedAction
} from '../types';
import {
  lensPath,
  view,
  concat,
  assocPath,
  remove,
  update,
  merge,
  isNil,
  path
} from 'ramda';
import {TPayloadAction} from '../types';
import {initialState} from './initial-state';

export function formReducer(state = initialState, action: TPayloadAction) {
  switch (action.type) {
  case 'SAVE_FORM':
  case 'RESET_FORM':
  case 'ARCHIVE_FORM':
  case 'REMOVE_ARCHIVED_FORM':
    return formStateReducer(state, action);
  case 'SAVE_INDEXED_FORM_VALUE':
  case 'REMOVE_INDEXED_FORM_VALUE':
  case 'UPDATE_INDEXED_FORM_VALUE':
    return arrayReducer(state, action);
  default:
    return state;
  }
}

function arrayReducer(state: IForm, action: TPayloadAction) {
  switch (action.type) {
  case 'SAVE_INDEXED_FORM_VALUE':
    return addIndexedFormValue(state, action);
  case 'REMOVE_INDEXED_FORM_VALUE':
    return removeIndexedFormValue(state, action);
  case 'UPDATE_INDEXED_FORM_VALUE':
    return updateIndexedFormValue(state, action);
  default:
    return state;
  }
}

function formStateReducer(state: IForm, action: TPayloadAction) {
  switch (action.type) {
  case 'SAVE_FORM':
    return saveForm(state, action);
  case 'RESET_FORM':
    return resetForm(state, action);
  case 'ARCHIVE_FORM':
    return archiveForm(state, action);
  case 'REMOVE_ARCHIVED_FORM':
    return removeArchivedForm(state, action);
  default:
    return state;
  }
}

function removeArchivedForm(state, {payload}: TRemoveArchivedAction) {
  const archivedFormsPath = ['archived', ...payload.path];
  return assocPath(
    archivedFormsPath,
    remove(
      payload.index,
      1,
      <any[]> path(archivedFormsPath, state)
    ),
    state
  );
}

function archiveForm(state: IForm, {payload}: TArchiveAction) {
  const archivedFormsPath = ['archived', ...payload.path];
  if (isNil(payload.index)) {
    return assocPath(
      archivedFormsPath,
      concat(
        <any[]> path(archivedFormsPath, state),
        [path(payload.path, state)]
      ),
      state
    );
  } else {
    return assocPath(
      archivedFormsPath,
      update(
        payload.index,
        <any[]> path(payload.path, state),
        <any[]> path(archivedFormsPath, state)
      ),
      state
    );
  }
}

function saveForm(state: IForm, action: TSaveAction) {
  const lensForProp = lensPath(action.payload.path);
  return assocPath(
    action.payload.path,
    merge(view(lensForProp, state), action.payload.value),
    state
  );
}


function resetForm(state: IForm, action: TResetAction) {
  const lensForProp = lensPath(action.payload.path);
  return assocPath(
    action.payload.path,
    merge(view(lensForProp, state), view(lensForProp, initialState)),
    state
  );
}

function addIndexedFormValue(state: IForm, action: TPushIntoArrayAction) {
  const lensForProp = lensPath(action.payload.path);
  const propValue = <any[]> view(lensForProp, state);
  return assocPath(
    ['character', 'skills'],
    concat(propValue, [action.payload.value]),
    state
  );
}

function removeIndexedFormValue(state: IForm, action: TRemoveFromArrayAction) {
  const lensForProp = lensPath(action.payload.path);
  const propValue = <any[]> view(lensForProp, state);
  return assocPath(
    action.payload.path,
    remove(
      action.payload.index,
      1,
      propValue
    ),
    state
  );
}

function updateIndexedFormValue(state: IForm, action: TUpdateInArrayAction) {
  const lensForProp = lensPath(action.payload.path);
  const propValue = <any[]> view(lensForProp, state);
  return assocPath(
    action.payload.path,
    update(
      action.payload.index,
      action.payload.value,
      propValue
    ),
    state
  );
}
