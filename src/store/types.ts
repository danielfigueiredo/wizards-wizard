import {
  TSaveAction,
  TRemoveFromArrayAction,
  TUpdateInArrayAction,
  TPushIntoArrayAction
} from './form/types';
import {
  TFetchRacesAligmentAction,
  TFetchRacesAligmentCompletedAction
} from './rules/types';

export type TPayloadAction =
    TPushIntoArrayAction
  | TUpdateInArrayAction
  | TRemoveFromArrayAction
  | TSaveAction
  | TFetchRacesAligmentAction
  | TFetchRacesAligmentCompletedAction
  ;
