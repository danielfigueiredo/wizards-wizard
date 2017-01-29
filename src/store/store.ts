import { combineReducers } from 'redux';
import { routerReducer } from 'ng2-redux-router';
import {
  IForm,
  formReducer
} from './form';

export interface IAppState {
  form?: IForm;
};

export const rootReducer = combineReducers<IAppState>({
  router: routerReducer,
  form: formReducer,
});

export function deimmutify(store) {
  return {
    router: store.router,
    form: store.form,
  };
}

export function reimmutify(plain) {
  return {
    router: plain.router,
    form: plain.form,
  };
}
