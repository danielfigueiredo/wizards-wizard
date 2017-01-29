import {createSelector} from 'reselect';
import {formStateSelector} from './form';
import {IForm} from '../store/form/types';

const characterFormSelector = createSelector(
  formStateSelector,
  (form: IForm) => form.character
);

export const isFormValid = createSelector(
  characterFormSelector,
  character => character.name
    && character.bioSummary.size
    && character.bioSummary.age !== undefined
    && character.skills.length > 0
);
