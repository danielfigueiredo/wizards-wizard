import {Action} from 'redux';

export interface IPayloadAction extends Action {
  payload?: any;
}

export const saveForm = (form) => ({
  type: 'SAVE_FORM',
  payload: form
});

export const addSkill = () => ({ type: 'ADD_SKILL' });

export const selectSkill = (skill, index) => ({
  type: 'SELECT_SKILL',
  payload: {
    skill,
    index
  }
});

export const removeSkill = index => ({
  type: 'REMOVE_SKILL',
  payload: index
});
