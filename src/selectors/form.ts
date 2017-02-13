import {IAppState} from '../store/types';
import {createSelector} from 'reselect';
import {IForm} from '../store/types/form';

export const formStateSelector = (state: IAppState) => state.form;

export const archivedCharactersSelector = createSelector(
  formStateSelector,
  (form: IForm) => form.archived.character
);
