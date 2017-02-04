import {createSelector} from 'reselect';
import {formStateSelector} from './form';
import {IForm} from '../store/form/types';
import {IAppState} from '../store/store';
import {IRules} from '../store/rules/types';

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

// TODO: Move this to its own file
const rulesSelector = (state: IAppState) => {
  return state.rules;
};

const raceAlignmentSelector = createSelector(
  rulesSelector,
  (rules: IRules) => rules.racesAndAlignments
);

export const isRaceAlignmentValid = createSelector(
  raceAlignmentSelector,
  characterFormSelector,
  (racesAndAlignments, character) => {
    const race = character.bioSummary.race.toLowerCase();
    const valid = racesAndAlignments[race].find(val =>
      val === character.bioSummary.alignment
    );
    return valid !== undefined;
  }
);
