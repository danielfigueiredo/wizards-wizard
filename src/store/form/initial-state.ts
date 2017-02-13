import {
  ICharacter,
  IEquipment,
  IForm
} from '../types';

export const characterInitialState: ICharacter = {
  name: undefined,
  bioSummary: {
    age: undefined,
    size: undefined,
    alignment: undefined,
    race: undefined,
  },
  skills: []
};

export const equipmentInitialState: IEquipment = {
  weaponName: '',
  weaponType: '',
  armorType: '',
};

export const initialState: IForm = {
  archived: {
    character: [],
    equipment: [],
  },
  character: characterInitialState,
  equipment: equipmentInitialState,
};
