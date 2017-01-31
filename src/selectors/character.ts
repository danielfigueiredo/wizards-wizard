import {createSelector} from 'reselect';
import {formStateSelector} from './form';
import {IForm} from '../store/form/types';

const validRaceAlignments = {
  tiefling: ['Chaotic Neutral', 'Neutral', 'Chaotic Evil', 'Neutral Evil'],
  human: ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Neutral', 'Lawful Neutral', 'Neutral Evil', 'Lawful Evil'],
  elf: ['Neutral', 'Neutral Good', 'Lawful Neutral', 'Lawful Good'],
};

const characterFormSelector = createSelector(
  formStateSelector,
  (form: IForm) => form.character
);

const isRaceAlignmentValid = (character) => {
  const race = character.bioSummary.race.toLowerCase();
  const valid = validRaceAlignments[race].find(val => val === character.bioSummary.alignment);
  return valid !== undefined;
};

export const isFormValid = createSelector(
  characterFormSelector,
  character => character.name
    && character.bioSummary.size
    && character.bioSummary.age !== undefined
    && character.skills.length > 0
    && isRaceAlignmentValid(character)
);
