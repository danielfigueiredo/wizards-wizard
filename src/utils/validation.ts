// import { forEach } from 'ramda';
// return forEach((val) => !val(arg) ? false : true, validators);

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
}
// Validator functions
export const maxNumberValidation = (max: number) => (value: number) => value < max;
export const maxStringLengthValidation = (max: number) => (value: string) => value.length < max;
export const minStringLengthValidation = (min: number) => (value: string) => value.length > min;
