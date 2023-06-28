import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewContainerComponent } from './list-view-container/list-view-container.component';

const routes: Routes = [
  {
    path: '', component: ListViewContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListViewRoutingModule { }
