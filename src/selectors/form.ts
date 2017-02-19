import {IAppState, IForm} from '../store/types';
import {createSelector} from 'reselect';
import { path } from 'ramda';

export const formStateSelector = (state: IAppState) => state.form;

export const createFormFieldSelector = <T>(fieldPath: string[]) => createSelector(
  formStateSelector,
  (form: IForm) => <T> path(fieldPath, form)
);

export const archivedCharactersSelector = createSelector(
  formStateSelector,
  (form: IForm) => form.archived.character
);
