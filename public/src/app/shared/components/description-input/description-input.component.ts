import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-description-input',
  templateUrl: './description-input.component.html',
  styleUrls: ['./description-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DescriptionInputComponent),
      multi: true
    }
  ]
})
export class DescriptionInputComponent implements ControlValueAccessor {

  value: string = '';

  private onChangeCallback: (_: any) => void = (_: any) => { };

  constructor() {

  }

  change(value: string) {
    this.onChangeCallback(this.value);
  }

  writeValue(obj: any): void { this.onChangeCallback(obj); }

  registerOnChange(fn: any): void { this.onChangeCallback = fn; }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { }
}
