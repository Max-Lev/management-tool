import { Injectable } from '@angular/core';
import { ListViewModule } from '../list-view.module';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, catchError, combineLatest, combineLatestAll, debounce, debounceTime, exhaustMap, forkJoin, map, mergeAll, mergeMap, of, switchMap, tap } from 'rxjs';
import { IconsConfig } from 'src/app/shared/models/icons.model';
import { environment } from 'src/environments/environment';
import { IColumn, IProducts } from '../models/products.model';
import { createEffect, ofType } from '@ngrx/effects';
import { ColumnsActions } from 'src/app/store/mode/actions/columns.actions';
import { LoadPrdoductsAction, getProductsSuccessAction } from 'src/app/store/mode/actions/products.actions';
import { Actions } from '@ngrx/effects';
import { ProductsState } from 'src/app/store/mode/reducers/products.reducer';
import { Store } from '@ngrx/store';
import { ManagementState } from 'src/app/store/reducers';
@Injectable()
export class ProductsService {

  constructor(private httpClient: HttpClient,
    private store: Store<ManagementState>,
    private actions$: Actions) { };

  getColumns$(): Observable<IColumn[]> {
    return this.httpClient.get<IColumn[]>(environment.columns)
  }

  getProducts$(): Observable<IProducts[]> {
    return this.httpClient.get<IProducts[]>(environment.products);
  }

  getAllData$(): Observable<{ col: IColumn[], prods: IProducts[] }> {
    const columns$ = this.getColumns$();
    const products$ = this.getProducts$();

    return forkJoin([columns$, products$], (col: IColumn[], prods: IProducts[]) => {
      return {
        col, prods
      };
    });

  }

  resolve$() {

    this.store.dispatch(LoadPrdoductsAction());
    this.store.dispatch(ColumnsActions.loadColumns());

  }

  prods$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadPrdoductsAction().type),
      exhaustMap(() =>
        this.getProducts$().pipe(
          map((products) => {
            return getProductsSuccessAction({ payload: products })
          }),
          catchError(error => EMPTY)
        )
      )
    )
  );

  cols$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ColumnsActions.loadColumns),
      exhaustMap(() => {

        return this.getColumns$().pipe(
          map((columns) => {
            return ColumnsActions.loadColumnsSuccess({ payload: columns })
          })
        )
      }),
      catchError(error => EMPTY))
  );


}
