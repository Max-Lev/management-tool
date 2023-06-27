import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { TitleComponent } from './components/title/title.component';



@NgModule({
  declarations: [
    SvgIconComponent,
    TitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SvgIconComponent,
    TitleComponent
  ]
})
export class SharedModule { }
