import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, Observable, EMPTY, mergeMap } from 'rxjs';

import { ListViewModule } from 'src/app/modules/list-view/list-view.module';
import { IProducts } from 'src/app/modules/list-view/models/products.model';
import { getProductsSuccessAction, LoadPrdoductsAction } from '../mode/actions/products.actions';
import { ProductsLoadSuccess } from '../mode/reducers/products.reducer';
import { ProductsService } from 'src/app/modules/list-view/providers/products.service';
import { ColumnsActions } from '../mode/actions/columns.actions';



@Injectable()
export class ProductsEffects {


  constructor(private actions$: Actions,
    private productsService: ProductsService) {

  }

  products$: Observable<{ type: string, payload: IProducts[] } | { type: string; }> =
    createEffect(() => this.actions$.pipe(
      ofType(LoadPrdoductsAction().type),
      exhaustMap(
        () => this.productsService.getProducts$().pipe(
          map(products => {
            debugger;
            return getProductsSuccessAction({ payload: products, })
          }),
          catchError(() => EMPTY)
        ))
    ));

  columns$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ColumnsActions.loadColumns),
      exhaustMap(() => {
        
        return this.productsService.getColumns$()
          .pipe(
            map((columns) => {
              debugger;
              return ColumnsActions.loadColumnsSuccess({ payload: columns })
            }),
            catchError(() => EMPTY)
          )
      })
    )
  });

}
