import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NameInputComponent),
      multi: true,
    }
  ],
})
export class NameInputComponent implements ControlValueAccessor {

  name: string = '';

  constructor() {

  }

  private onChangeCallback: (_: any) => void = (_: any) => { };

  onChange(val: any) { this.onChangeCallback(val); }

  // ControlValueAccessor Interface
  writeValue(value: any) { console.log('writeValue ', value); }

  // ControlValueAccessor Interface
  registerOnChange(fn: any) { this.onChangeCallback = fn; }

  // ControlValueAccessor Interface
  registerOnTouched(fn: any) { }

  setDisabledState?(isDisabled: boolean): void { }

}
