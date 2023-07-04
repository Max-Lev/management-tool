import { AfterViewInit, Component, ViewChild, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
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
    }
  ]
})
export class ColorPickerComponent implements ControlValueAccessor,
  AfterViewInit {

  color: any;

  private onChangeCallback: (_: any) => void = () => { };

  @ViewChild(ColorPickerComponent) colorPicker: ColorPickerComponent;

  constructor() {

  }
  ngAfterViewInit(): void {
    console.log(this.colorPicker)
  }

  onChange(value: ColorPickerChangeEvent): void {
    this.onChangeCallback(this.color);
  }

  writeValue(obj: any): void {

  }
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {

  }

}
