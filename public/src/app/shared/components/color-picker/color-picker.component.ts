import { AfterViewInit, Component, ViewChild, forwardRef } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { ColorPickerChangeEvent } from 'primeng/colorpicker';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPickerComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ColorPickerComponent),
      multi: true
    }
  ]
})
export class ColorPickerComponent implements ControlValueAccessor, Validator,
  AfterViewInit {

  color: string = '#ffffff';

  private onChangeCallback: (_: any) => void = () => { };

  // onTouchedCallback: () => void = () => {};
  onTouched = () => {};

  @ViewChild(ColorPickerComponent) colorPicker: ColorPickerComponent;

  constructor() {

  }

  ngAfterViewInit(): void {
    console.log(this.colorPicker)
  }

  onChange(value: string): void { this.onChangeCallback(value); }

  writeValue(obj: any): void { }

  registerOnChange(fn: any): void { this.onChange = fn; }

  registerOnTouched(fn: any): void { 
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    this.onTouched();
    if (control.valid && control.touched) {
      return null;
    }
    return control.errors;
  }

  registerOnValidatorChange?(fn: () => void): void { }


}
