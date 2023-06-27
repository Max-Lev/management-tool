import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListViewRoutingModule } from './list-view-routing.module';
import { ListViewContainerComponent } from './components/list-view-container/list-view-container.component';


@NgModule({
  declarations: [
    ListViewContainerComponent
  ],
  imports: [
    CommonModule,
    ListViewRoutingModule
  ]
})
export class ListViewModule { }
