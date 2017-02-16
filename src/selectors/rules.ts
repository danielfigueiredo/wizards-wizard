import { IAppState } from '../store/types';

// TODO: Move this to its own file
export const rulesSelector = (state: IAppState) => {
  return state.rules;
};
