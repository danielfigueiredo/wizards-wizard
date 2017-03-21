import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';
import { formReducer } from './form';
import { rulesReducer } from './rules/reducer';
import { IForm, IRules } from './types';

export interface IAppState {
  form?: IForm;
  rules?: IRules;
};

export const rootReducer = combineReducers<IAppState>({
  router: routerReducer,
  form: formReducer,
  rules: rulesReducer,
});

export function deimmutify(store) {
  return {
    router: store.router,
    form: store.form,
    rules: store.rules,
  };
}

export function reimmutify(plain) {
  return {
    router: plain.router,
    form: plain.form,
    rules: plain.rules,
  };
}
