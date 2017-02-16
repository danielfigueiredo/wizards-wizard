import {createSelector} from 'reselect';
import {formStateSelector, createFormFieldSelector} from './form';
import {rulesSelector} from './rules';
import {
  IForm,
  ICharacter,
  IBioSummary,
  IRules,
  IAppState
} from '../store/types';
import {
  isEmpty,
  gte,
  lte,
  pipe,
  filter,
  isNil,
  path
} from 'ramda';
import {
  isValid,
  maxStringLengthValidation,
  minStringLengthValidation,
  maxNumberValidation,
} from '../utils/validation';

export const characterFormSelector = createSelector(
  formStateSelector,
  (form: IForm) => form.character
);

const raceAlignmentSelector = createSelector(
  rulesSelector,
  (rules: IRules) => rules.racesAndAlignments
);

export const bioSummarySelector = createSelector(
  characterFormSelector,
  (character: ICharacter) => character.bioSummary
);

export const isRaceAlignmentValidSelector = createSelector(
  raceAlignmentSelector,
  bioSummarySelector,
  (racesAndAlignments, bioSummary) => {
    if (!bioSummary.race || !bioSummary.alignment) {
      return false;
    }
    const raceLowerCase = bioSummary.race.toLowerCase();
    const valid = racesAndAlignments[raceLowerCase].find(val =>
      val === bioSummary.alignment
    );
    return valid !== undefined;
  }
);

export const isAgeValidSelector = createSelector(
  bioSummarySelector,
  (bioSummary: IBioSummary) => {
    if (!bioSummary.race) {
      return false;
    }
    switch (bioSummary.race) {
    case 'Human':
      return gte(bioSummary.age, 14) && lte(bioSummary.age, 40);
    case 'Elf':
      return gte(bioSummary.age, 80) && lte(bioSummary.age, 800);
    case 'Tiefling':
      return gte(bioSummary.age, 35) && lte(bioSummary.age, 53);
    }
  }
);

// Let's do an abstracted example and a non abstracted example
export const isNameValidSelector = createSelector(
  createFormFieldSelector(['character','name']),
  isValid(
    maxStringLengthValidation(50),
    minStringLengthValidation(3),
  ),
);

export const isSkillsValidSelector = createSelector(
  characterFormSelector,
  (character: ICharacter)  => {
    if (isEmpty(character.skills)) {
      return false;
    }
    const hasValue = pipe(
      filter(isNil),
      isEmpty
    );
    return hasValue(character.skills);
  }
);

export const isFormValidSelector = createSelector(
  isAgeValidSelector,
  isRaceAlignmentValidSelector,
  isNameValidSelector,
  isSkillsValidSelector,
  characterFormSelector,
  (
    isAgeValid,
    isRaceAlignmentValid,
    isNameValid,
    isSkillsValid,
    character
  ) => isAgeValid
    && isRaceAlignmentValid
    && isNameValid
    && isSkillsValid
    && character.bioSummary.size
);
