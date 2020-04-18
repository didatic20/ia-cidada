import { FormGroup, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  constructor() { }

  static isChecked(control: FormGroup): { [key: string]: any } {
    if (control.value === false) {
      return { isChecked: false };
    }
    return null;
  }

  static equalValueValidator(targetKey: string, toMatchKey: string): ValidatorFn {
    return (group: FormGroup): {[key: string]: any} => {
      const target = group.controls[targetKey];
      const toMatch = group.controls[toMatchKey];
      if (target.touched && toMatch.touched) {
        const isMatch = target.value === toMatch.value;
        // set equal value error on dirty controls
        if (!isMatch && target.valid && toMatch.valid) {
          toMatch.setErrors({equalValue: targetKey});
          const message = targetKey + ' != ' + toMatchKey;
          return { equalValue : message };
        }
        if (isMatch && toMatch.hasError('equalValue')) {
          toMatch.setErrors(null);
        }
      }

      return null;
    };
  }
}
