import { isEmpty, pipe, filter, isNil } from 'ramda';

export const isValid = (...validators): any => {
  return (arg: any) => {
    // TODO: Find appropriate function for this...
    for (const val of validators) {
      if (!val(arg)) {
        return false;
      }
    }
    return true;
  };
};

// Validator functions
export const maxNumberValidation = (max: number) =>
  (value: number) => value < max;
export const maxStringLengthValidation = (max: number) =>
  (value: string) => value.length < max;
export const minStringLengthValidation = (min: number) =>
  (value: string) => value.length > min;
export const arrayNotEmptyValidation = () =>
  (value: string[]) => {
    const hasValue = pipe(
      filter(isNil),
      isEmpty
    );
    return isEmpty(value) ? false : hasValue(value);
  };
