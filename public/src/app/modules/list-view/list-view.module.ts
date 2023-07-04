import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ListViewRoutingModule } from './list-view-routing.module';
import { ListViewContainerComponent } from './list-view-container/list-view-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from 'src/app/store/effects/products.effects';
import { ProductsService } from './providers/products.service';
import { StoreModule } from '@ngrx/store';
import { ProductsReducer } from 'src/app/store/mode/reducers/products.reducer';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { InputTextModule } from 'primeng/inputtext';
// import { SidebarModule } from 'primeng/sidebar';
// import { ColorPickerComponent } from 'src/app/shared/components/color-picker/color-picker.component';
// import { DescriptionInputComponent } from 'src/app/shared/components/description-input/description-input.component';
// import { NameInputComponent } from 'src/app/shared/components/name-input/name-input.component';
// import { SidePanelComponent } from 'src/app/shared/components/side-panel/side-panel.component';
// import { ColorPickerModule } from 'primeng/colorpicker';

@NgModule({
  declarations: [
    ListViewContainerComponent,

    // SidePanelComponent,
    // NameInputComponent,
    // ColorPickerComponent,
    // DescriptionInputComponent,
  ],
  imports: [
    CommonModule,
    ListViewRoutingModule,
    TableModule,
    SharedModule,
    StoreModule.forFeature('productsReducer', { ProductsReducer }),
    EffectsModule.forFeature([
      // ProductsEffects
      ProductsService,
    ]),
    // ColorPickerModule,
    // ReactiveFormsModule,
    // FormsModule,
    // SidebarModule,
    // InputTextModule,
  ],
  providers: [
    // ProductsService,
    ProductsEffects
  ]
})
export class ListViewModule { }
