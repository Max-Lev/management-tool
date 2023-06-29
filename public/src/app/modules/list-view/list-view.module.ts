import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ListViewRoutingModule } from './list-view-routing.module';
import { ListViewContainerComponent } from './list-view-container/list-view-container.component';
import { CustomKeyValuePipe } from 'src/app/shared/pipes/custom-key-value.pipe';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { ConfigEffects } from 'src/app/store/effects/config.effects';
import { StoreModule } from '@ngrx/store';
import { ProductsReducer } from 'src/app/store/mode/reducers/products.reducer';
import { reducers } from 'src/app/store/reducers';


@NgModule({
  declarations: [
    ListViewContainerComponent,
    // CustomKeyValuePipe
  ],
  imports: [
    CommonModule,
    ListViewRoutingModule,
    TableModule,
    SharedModule,
    // StoreModule.forFeature('productsReducer', ProductsReducer),
    // StoreModule.forFeature({reducers}),
    // EffectsModule.forRoot([ConfigEffects]),
    EffectsModule.forFeature([ConfigEffects])
    // EffectsModule.forRoot([ConfigEffects]),
  ]
})
export class ListViewModule { }
