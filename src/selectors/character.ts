import {createSelector} from 'reselect';
import {formStateSelector} from './form';
import {
  IForm,
  ICharacter,
  IBioSummary,
  IRules
} from '../store/types';
import {IAppState} from '../store/store';
import {
  isEmpty,
  gte,
  lte,
  pipe,
  filter,
  isNil
} from 'ramda';

export const characterFormSelector = createSelector(
  formStateSelector,
  (form: IForm) => form.character
);

// TODO: Move this to its own file
const rulesSelector = (state: IAppState) => {
  return state.rules;
};

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

export const isNameValidSelector = createSelector(
  characterFormSelector,
  (character: ICharacter)  => character.name &&
  gte(character.name.length, 3) && lte(character.name.length, 50)
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
