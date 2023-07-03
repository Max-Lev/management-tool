import { Component, Input, forwardRef } from '@angular/core';
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

  private onTouchedCallback: () => void = () => { };
  private onChangeCallback: (_: any) => void = (_:any) => {
    console.log(_);
  };

  onChange(val:any){
    this.onChangeCallback(val);
  }

  // ControlValueAccessor Interface
  writeValue(value: any) {
    
  }

  // ControlValueAccessor Interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // ControlValueAccessor Interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    
  }

}
