import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { TitleComponent } from './components/title/title.component';
import { CustomKeyValuePipe } from './pipes/custom-key-value.pipe';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { SidebarModule } from 'primeng/sidebar';
import { NameInputComponent } from './components/name-input/name-input.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { DescriptionInputComponent } from './components/description-input/description-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [
    SvgIconComponent,
    TitleComponent,
    CustomKeyValuePipe,
    // SidePanelComponent,
    // NameInputComponent,
    // ColorPickerComponent,
    // DescriptionInputComponent,

  ],
  imports: [
    CommonModule,
    SidebarModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule
  ],
  exports: [
    SvgIconComponent,
    TitleComponent,
    CustomKeyValuePipe,
    // SidePanelComponent,
    // SidebarModule,
    // InputTextModule,
    // NameInputComponent,
    // ColorPickerComponent,
    // DescriptionInputComponent,
    // FormsModule,
    // ReactiveFormsModule
  ]
})
export class SharedModule { }
