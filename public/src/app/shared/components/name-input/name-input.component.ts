import { Component, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NameInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NameInputComponent),
      multi: true
    }
  ],
})
export class NameInputComponent implements ControlValueAccessor,Validator {

  event: string = '';

  constructor() {

  }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if(control.valid){
      return null;
    }
    return control.errors;
  }
  
  registerOnValidatorChange?(fn: () => void): void {
    
  }

  private onChangeCallback: (_: any) => void = () => { };

  onChange(val: any) { 
    // this.writeValue(val);
    this.onChangeCallback(val); 
  }

  // ControlValueAccessor Interface
  writeValue(value: any) {
    this.event = value;
  }

  // ControlValueAccessor Interface
  registerOnChange(fn: any) { this.onChange = fn; }

  // ControlValueAccessor Interface
  registerOnTouched(fn: any) {
    this.onChangeCallback = fn;
  }

  // setDisabledState?(isDisabled: boolean): void { }

}
