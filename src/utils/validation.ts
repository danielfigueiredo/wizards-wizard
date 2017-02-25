import {
  isEmpty,
  pipe,
  filter,
  isNil,
  gt,
  lt,
  gte,
  lte,
  find
} from 'ramda';

export const isValid = (...validators): any =>
  (arg: any) => isNil(find(val => !val(arg), validators));

// Validator functions
export const maxNumberValidation = (max: number) =>
  (value: number) => lt(value, max);

export const minNumberValidation = (min: number) =>
  (value: number) => gt(value, min);

export const maxStringLengthValidation = (max: number) =>
  (value: string) => value
    ? maxNumberValidation(max)(value.length)
    : true;

export const minStringLengthValidation = (min: number) =>
  (value: string) => value
    ? minNumberValidation(min)(value.length)
    : true;

export const arrayNotEmptyValidation = (value: string[]) => {
  const hasValue = pipe(
    filter(isNil),
    isEmpty
  );
  return isEmpty(value) ? false : hasValue(value);
};

export const isBetweenNumber = (min, max) =>
  (value: number) => gte(value, min) && lte(value, max);
