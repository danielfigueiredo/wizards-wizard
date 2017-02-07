import {
  TSaveAction,
  TResetAction,
  TRemoveFromArrayAction,
  TUpdateInArrayAction,
  TPushIntoArrayAction
} from './form';
import {
  TFetchRacesAligmentAction,
  TFetchRacesAligmentCompletedAction
} from './rules';

export * from './character';
export * from './equipment';
export * from './rules';
export * from './form';

export type TPayloadAction =
    TPushIntoArrayAction
  | TUpdateInArrayAction
  | TRemoveFromArrayAction
  | TSaveAction
  | TResetAction
  | TFetchRacesAligmentAction
  | TFetchRacesAligmentCompletedAction
  ;
