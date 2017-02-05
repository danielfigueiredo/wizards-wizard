import {
  IForm,
  TSaveAction,
  TRemoveFromArrayAction,
  TUpdateInArrayAction,
  TPushIntoArrayAction
} from './types';
import {
  lensPath,
  view,
  concat,
  assocPath,
  remove,
  update,
  merge
} from 'ramda';
import {TPayloadAction} from '../types';
import {initialState} from './initial-state';

export function formReducer(state = initialState, action: TPayloadAction) {
  switch (action.type) {
  case 'SAVE_FORM':
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
  default:
    return state;
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
