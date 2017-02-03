import { combineReducers } from 'redux';
import { routerReducer } from 'ng2-redux-router';
import {
  IForm,
  formReducer
} from './form';
import {wizardReducer} from './wizard/reducer';
import {IWizard} from './wizard/types';

export interface IAppState {
  form?: IForm;
  wizard?: IWizard;
};

export const rootReducer = combineReducers<IAppState>({
  router: routerReducer,
  form: formReducer,
  wizard: wizardReducer,
});

export function deimmutify(store) {
  return {
    router: store.router,
    form: store.form,
    wizard: store.wizard,
  };
}

export function reimmutify(plain) {
  return {
    router: plain.router,
    form: plain.form,
    wizard: plain.wizard,
  };
}
