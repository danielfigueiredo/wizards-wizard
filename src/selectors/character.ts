import {createSelector} from 'reselect';
import {formStateSelector} from './form';
import {IForm} from '../store/form/types';
import {IAppState} from '../store/store';
import {IWizard} from '../store/wizard/types';

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

const wizardSelector = (state: IAppState) => {
  return state.wizard;
};

const raceAlignmentSelector = createSelector(
  wizardSelector,
  (wizard: IWizard) => wizard.racesAndAlignments
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
