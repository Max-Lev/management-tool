import { Component, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { retryWhen } from 'rxjs';

@Component({
  selector: 'app-description-input',
  templateUrl: './description-input.component.html',
  styleUrls: ['./description-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DescriptionInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DescriptionInputComponent),
      multi: true
    }
  ]
})
export class DescriptionInputComponent implements ControlValueAccessor, Validator {

  value: string = '';

  private onChangeCallback: (_: any) => void = (_: any) => { };

  constructor() {

  }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (control.valid) {
      return null;
    }
    return control.errors;
  }
  registerOnValidatorChange?(fn: () => void): void { }

  change(value: string) {
    this.onChangeCallback(value);
  }

  writeValue(obj: any): void { 
    this.value = obj;
    this.onChangeCallback(obj); 
  }

  registerOnChange(fn: any): void { this.change = fn; }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { }
}
