import {
  ICharacter,
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

const characterInitialState: ICharacter = {
  name: 'Elminster',
  bioSummary: {
    age: 230,
    size: '',
    alignment: '',
    race: '',
  },
  skills: ['Knowledge Arcana']
};

const initialState: IForm = {
  character: characterInitialState
};

function addIntoArray(state: IForm, action: TPushIntoArrayAction) {
  const lensForProp = lensPath(action.payload.path);
  const propValue = <any[]> view(lensForProp, state);
  return assocPath(
    ['character', 'skills'],
    concat(propValue, [action.payload.value]),
    state
  );
}

function removeFromArray(state: IForm, action: TRemoveFromArrayAction) {
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

function putIntoArray(state: IForm, action: TUpdateInArrayAction) {
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

function arrayReducer(state: IForm, action: TPayloadAction) {
  switch (action.type) {
  case 'PUSH_INTO_ARRAY':
    return addIntoArray(state, action);
  case 'REMOVE_FROM_ARRAY':
    return removeFromArray(state, action);
  case 'UPDATE_IN_ARRAY':
    return putIntoArray(state, action);
  default:
    return state;
  }
}

function performSave(state: IForm, action: TSaveAction) {
  const lensForProp = lensPath(action.payload.path);
  return assocPath(
    action.payload.path,
    merge(view(lensForProp, state), action.payload.value),
    state
  );
}

function formStateReducer(state: IForm, action: TPayloadAction) {
  switch (action.type) {
  case 'SAVE_FORM':
    return performSave(state, action);
  default:
    return state;
  }
}

export function formReducer(state = initialState, action: TPayloadAction) {
  switch (action.type) {
  case 'SAVE_FORM':
    return formStateReducer(state, action);
  case 'PUSH_INTO_ARRAY':
  case 'REMOVE_FROM_ARRAY':
  case 'UPDATE_IN_ARRAY':
    return arrayReducer(state, action);
  default:
    return state;
  }
}
