import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ListViewRoutingModule } from './list-view-routing.module';
import { ListViewContainerComponent } from './list-view-container/list-view-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';

import { ProductsService } from './providers/products.service';
import { StoreModule } from '@ngrx/store';
import { ProductsReducer } from 'src/app/store/mode/reducers/products.reducer';
import { EventsEffects } from './providers/events.effects';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [
    ListViewContainerComponent,
  ],
  imports: [
    CommonModule,
    ListViewRoutingModule,
    TableModule,
    SharedModule,
    StoreModule.forFeature('productsReducer', { ProductsReducer }),
    EffectsModule.forFeature([
      // ProductsEffects,
      ProductsService,
      EventsEffects
    ]),
    InputTextModule
  ],
  providers: [
  ]
})
export class ListViewModule { }
