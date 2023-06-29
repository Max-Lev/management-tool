import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { TitleComponent } from './components/title/title.component';
import { CustomKeyValuePipe } from './pipes/custom-key-value.pipe';

@NgModule({
  declarations: [
    SvgIconComponent,
    TitleComponent,
    CustomKeyValuePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SvgIconComponent,
    TitleComponent,
    CustomKeyValuePipe
  ]
})
export class SharedModule { }
