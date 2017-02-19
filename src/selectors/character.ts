import {createSelector} from 'reselect';
import {
  formStateSelector,
  createFormFieldSelector
} from './form';
import {rulesSelector} from './rules';
import {
  IForm,
  IBioSummary,
  IRules
} from '../store/types';
import {
  isValid,
  maxStringLengthValidation,
  minStringLengthValidation,
  arrayNotEmptyValidation,
  isBetweenNumber
} from '../utils/validation';

export const characterFormSelector = createSelector(
  formStateSelector,
  (form: IForm) => form.character
);

const raceAlignmentSelector = createSelector(
  rulesSelector,
  (rules: IRules) => rules.racesAndAlignments
);

export const bioSummarySelector = createFormFieldSelector<IBioSummary>(['character', 'bioSummary']);

const nameSelector = createFormFieldSelector<string>(['character', 'name']);

const isNameValid = isValid(
  maxStringLengthValidation(50),
  minStringLengthValidation(3),
);

export const isNameValidSelector = createSelector(
  nameSelector,
  isNameValid
);

const skillsSelector = createFormFieldSelector<string[]>(['character', 'skills']);

export const isSkillsValidSelector = createSelector(
  skillsSelector,
  arrayNotEmptyValidation,
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

const humanAgeValid = isBetweenNumber(14, 40);
const elfAgeValid = isBetweenNumber(80, 800);
const tieflingAgeValid = isBetweenNumber(35, 53);

const ageValidationSelector = createSelector(
  bioSummarySelector,
  (bioSummary: IBioSummary) => {
    if (!bioSummary.race) {
      return () => true;
    }
    switch (bioSummary.race) {
      case 'Human':
        return humanAgeValid;
      case 'Elf':
        return elfAgeValid;
      case 'Tiefling':
        return tieflingAgeValid;
    }
  }
);

export const isAgeValidSelector = createSelector(
  bioSummarySelector,
  ageValidationSelector,
  ({age}, isAgeValid) => isAgeValid(age)
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
