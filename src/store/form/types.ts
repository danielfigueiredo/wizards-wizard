type TSkills = string[];

export interface ICharacter {
  name?: string;
  bioSummary: {
    age: number;
    size: string;
    alignment: string;
    race: string;
  };
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

export type TRemoveFromArrayAction = {
  type: 'REMOVE_FROM_ARRAY',
  payload: TRemoveFromArray
};

export type TUpdateInArrayAction = {
  type: 'UPDATE_IN_ARRAY',
  payload: TUpdateInArray
};

export type TPushIntoArrayAction = {
  type: 'PUSH_INTO_ARRAY',
  payload: TPushIntoArray
};
