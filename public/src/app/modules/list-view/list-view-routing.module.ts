import { Inject, InjectionToken, NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { ListViewContainerComponent } from './list-view-container/list-view-container.component';
import {  productsResolver } from './resolvers/products.resolver';

const routes: Routes = [
  {
    path: '', component: ListViewContainerComponent,
    resolve: {
      products: productsResolver
      // .cols$()
      // products: () => inject(Actions).pipe(
      //   tap(() => LoadPrdoductsAction().type)
      // )
      // products: () => LoadPrdoductsAction().type
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListViewRoutingModule { }
