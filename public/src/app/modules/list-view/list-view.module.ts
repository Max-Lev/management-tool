import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ListViewRoutingModule } from './list-view-routing.module';
import { ListViewContainerComponent } from './list-view-container/list-view-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';

import { ProductsService } from './providers/products.service';
import { InputTextModule } from 'primeng/inputtext';
import { EventsEffects } from './providers/events.effects';
@NgModule({
  declarations: [
    ListViewContainerComponent,
  ],
  imports: [
    CommonModule,
    ListViewRoutingModule,
    TableModule,
    SharedModule,
    // StoreModule.forFeature('productsReducer', { ProductsReducer }),
    EffectsModule.forFeature([
      ProductsService,
      EventsEffects
    ]),
    InputTextModule
  ],
  providers: [
  ]
})
export class ListViewModule { }
