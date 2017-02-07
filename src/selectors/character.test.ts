import {clone} from 'ramda';
import {initialState} from '../store/form/initial-state';
import {
  characterFormSelector,
  bioSummarySelector,
  isRaceAlignmentValidSelector,
  isAgeValidSelector,
  isNameValidSelector,
  isSkillsValidSelector,
  isFormValidSelector
} from './character';

describe('Character selector tests', () => {
  let initialTestState;

  beforeEach(() => {
    initialTestState = clone({
      form: initialState,
      rules: {
        racesAndAlignments: {
          tiefling: [
            'Chaotic Neutral',
            'Neutral',
            'Chaotic Evil',
            'Neutral Evil'
          ],
          human: [
            'Lawful Good',
            'Neutral Good',
            'Chaotic Good',
            'Neutral',
            'Lawful Neutral',
            'Neutral Evil',
            'Lawful Evil'
          ],
          elf: [
            'Neutral',
            'Neutral Good',
            'Lawful Neutral',
            'Lawful Good'
          ],
        }
      }
    });
    initialTestState.form.character = {
      name: 'Elminster',
      bioSummary: {
        age: 240,
        size: 'Medium',
        alignment: 'Neutral Good',
        race: 'Human',
      },
      skills: [
        'Knowledge Arcana',
        'Investigation'
      ]
    };
  });

  it('should select the character form', () => {
    const characterForm = characterFormSelector(initialTestState);
    expect(characterForm).toEqual(initialTestState.form.character);
  });

  it('should select bio summary from character form', () => {
    const bioSummary = bioSummarySelector(initialTestState);
    expect(bioSummary).toEqual(initialTestState.form.character.bioSummary);
  });

  it('should have a valid alignment for human race', () => {
    const isRaceAlignmentValid = isRaceAlignmentValidSelector(initialTestState);
    expect(isRaceAlignmentValid).toBeTruthy();
  });

  it('should have an invalid age because Elminster is overpower', () => {
    const isAgeValid = isAgeValidSelector(initialTestState);
    expect(isAgeValid).toBeFalsy();
  });

  it('should have a valid name', () => {
    const isNameValid = isNameValidSelector(initialTestState);
    expect(isNameValid).toBeTruthy();
  });

  it('should have a valid skill set', () => {
    const isSkillsValid = isSkillsValidSelector(initialTestState);
    expect(isSkillsValid).toBeTruthy();
  });

  it('should have a valid form when human age is right', () => {
    let isFormValid = isFormValidSelector(initialTestState);
    expect(isFormValid).toBeFalsy();
    initialTestState = clone(initialTestState);
    initialTestState.form.character.bioSummary.age = 20;
    isFormValid = isFormValidSelector(initialTestState);
    expect(isFormValid).toBeTruthy();
  });
});
