import { IAppState } from '../store/types';

export const rulesSelector = (state: IAppState) => {
  return state.rules;
};
