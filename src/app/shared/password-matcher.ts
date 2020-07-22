import { AbstractControl } from '@angular/forms';

export class PasswordMatcher {
  static match(control: AbstractControl): void | null {
    const passwordControl = control.get('password');
    const confirmPasswordControl = control.get('confirmPassword');

    if (passwordControl.pristine || confirmPasswordControl.pristine) {
      return null;
    }

    if (passwordControl.value === confirmPasswordControl.value) {
      return null;
    }

    confirmPasswordControl.setErrors({ match: true });
  }
}


