import {
  ICharacter,
  IEquipment
} from '../types';

export interface IForm {
  archived: {
    character: ICharacter[];
    equipment: IEquipment[];
  };
  character: ICharacter;
  equipment: IEquipment;
}

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


// Action Types
export type TSaveAction = { type: 'SAVE_FORM', payload: TValuePayload };
export type TResetAction = { type: 'RESET_FORM', payload: TPathActionPayload };

export type TArchiveAction = {
  type: 'ARCHIVE_FORM',
  payload: TIndexPayload
};

export type TRemoveArchivedAction = {
  type: 'REMOVE_ARCHIVED_FORM',
  payload: TIndexPayload
};

export type TPushIntoArrayAction = {
  type: 'SAVE_INDEXED_FORM_VALUE',
  payload: TValuePayload
};

export type TRemoveFromArrayAction = {
  type: 'REMOVE_INDEXED_FORM_VALUE',
  payload: TIndexPayload
};

export type TUpdateInArrayAction = {
  type: 'UPDATE_INDEXED_FORM_VALUE',
  payload: TValuePayload & TIndexPayload
};


