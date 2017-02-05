type TSkills = string[];

export interface IBioSummary {
  age: number;
  size: string;
  alignment: string;
  race: string;
}

export interface ICharacter {
  name?: string;
  bioSummary: IBioSummary;
  skills: TSkills;
}

export interface IForm {
  character: ICharacter;
}

export type TPathActionPayload = {
  path: string[];
};

export type TValuePayload = TPathActionPayload & {
  value: any;
};

export type TIndexPayload = TPathActionPayload & {
  index: number;
};

export type TRemoveFromArray = TPathActionPayload & TIndexPayload;

export type TPushIntoArray = TPathActionPayload & TValuePayload;

export type TUpdateInArray = TPushIntoArray & TIndexPayload;

export type TSaveForm = TPathActionPayload & TValuePayload;

export type TSaveAction = { type: 'SAVE_FORM', payload: TSaveForm };

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


