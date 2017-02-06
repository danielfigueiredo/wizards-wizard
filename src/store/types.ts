import {
  TSaveAction,
  TResetAction,
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
  | TResetAction
  | TFetchRacesAligmentAction
  | TFetchRacesAligmentCompletedAction
  ;
