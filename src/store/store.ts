import { combineReducers } from 'redux';
import { routerReducer } from 'ng2-redux-router';
import {
  ICharacter,
  characterReducer
} from './character';

export interface IAppState {
  characterForm?: ICharacter;
};

export const rootReducer = combineReducers<IAppState>({
  router: routerReducer,
  characterForm: characterReducer,
});

export function deimmutify(store) {
  return {
    router: store.router,
    characterForm: store.characterForm,
  };
}

export function reimmutify(plain) {
  return {
    router: plain.router,
    characterForm: plain.characterForm,
  };
}
