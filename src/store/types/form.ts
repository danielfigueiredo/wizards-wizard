import {
  ICharacter,
  IEquipment
} from '../types';

export type IForm = {
  character: ICharacter,
  equipment: IEquipment
};

// Payload component types
export type TPathActionPayload = {
  path: string[];
};

export type TValuePayload = TPathActionPayload & {
  value: any;
};

export type TIndexPayload = TPathActionPayload & {
  index: number;
};

// Payload Types
export type TRemoveFromArray = TPathActionPayload & TIndexPayload;
export type TPushIntoArray = TPathActionPayload & TValuePayload;
export type TUpdateInArray = TPushIntoArray & TIndexPayload;
export type TSaveForm = TPathActionPayload & TValuePayload;
export type TResetForm = TPathActionPayload;

// Action Types
export type TSaveAction = { type: 'SAVE_FORM', payload: TSaveForm };
export type TResetAction = { type: 'RESET_FORM', payload: TResetForm };

export type TPushIntoArrayAction = {
  type: 'SAVE_INDEXED_FORM_VALUE',
  payload: TPushIntoArray
};

export type TRemoveFromArrayAction = {
  type: 'REMOVE_INDEXED_FORM_VALUE',
  payload: TRemoveFromArray
};

export type TUpdateInArrayAction = {
  type: 'UPDATE_INDEXED_FORM_VALUE',
  payload: TUpdateInArray
};


