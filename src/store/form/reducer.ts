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
  path,
  concat,
  assocPath,
  remove,
  update,
  merge,
  isNil,
  last,
} from 'ramda';
import {TPayloadAction} from '../types';
import {
  initialState,
  characterInitialState,
  equipmentInitialState,
} from './initial-state';

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
      path<any[]>(archivedFormsPath, state)
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
        path<any[]>(archivedFormsPath, state),
        [path(payload.path, state)]
      ),
      state
    );
  } else {
    return assocPath(
      archivedFormsPath,
      update(
        payload.index,
        path<any[]>(payload.path, state),
        path<any[]>(archivedFormsPath, state)
      ),
      state
    );
  }
}

function saveForm(state: IForm, action: TSaveAction) {
  const propPath = action.payload.path;
  return assocPath(
    propPath,
    merge(
      path<string[]>(propPath, state),
      action.payload.value
    ),
    state
  );
}


function resetForm(state: IForm, action: TResetAction) {
  const path = action.payload.path;
  switch (last(path)) {
  case 'character':
    return assocPath(
      path,
      characterInitialState,
      state
    );
  case 'equipment':
    return assocPath(
      path,
      equipmentInitialState,
      state
    );
  }
  return initialState;
}

function addIndexedFormValue(state: IForm, action: TPushIntoArrayAction) {
  return assocPath(
    ['character', 'skills'],
    concat(
      path<string[]>(action.payload.path, state),
      [action.payload.value]
    ),
    state
  );
}

function removeIndexedFormValue(state: IForm, action: TRemoveFromArrayAction) {
  const propPath = action.payload.path;
  return assocPath(
    propPath,
    remove(
      action.payload.index,
      1,
      path<string[]>(propPath, state)
    ),
    state
  );
}

function updateIndexedFormValue(state: IForm, action: TUpdateInArrayAction) {
  const propPath = action.payload.path;
  return assocPath(
    propPath,
    update(
      action.payload.index,
      action.payload.value,
      path<string[]>(propPath, state)
    ),
    state
  );
}
