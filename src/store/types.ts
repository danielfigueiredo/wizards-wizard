import {
  TSaveAction,
  TRemoveFromArrayAction,
  TUpdateInArrayAction,
  TPushIntoArrayAction
} from './form/types';
import {
  TFetchRacesAligmentAction,
  TFetchRacesAligmenCompletedtAction
} from './wizard/types';

export type TPayloadAction =
    TPushIntoArrayAction
  | TUpdateInArrayAction
  | TRemoveFromArrayAction
  | TSaveAction
  | TFetchRacesAligmentAction
  | TFetchRacesAligmenCompletedtAction
  ;
