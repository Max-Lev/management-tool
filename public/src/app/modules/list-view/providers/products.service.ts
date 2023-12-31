import { Injectable } from '@angular/core';
import { ListViewModule } from '../list-view.module';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, catchError, combineLatest, combineLatestAll, debounce, debounceTime, exhaustMap, forkJoin, map, mergeAll, mergeMap, of, switchMap, tap, throwError } from 'rxjs';
import { IconsConfig } from 'src/app/shared/models/icons.model';
import { environment } from 'src/environments/environment';
import { IColumn, IProduct } from '../models/products.model';
import { createEffect, ofType } from '@ngrx/effects';
import { ColumnsActions } from 'src/app/store/mode/actions/columns.actions';
import { LoadPrdoductsAction, getProductsFailureAction, getProductsSuccessAction } from 'src/app/store/mode/actions/products.actions';
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

  getProducts$(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(environment.events);
  }

  getAllData$(): Observable<{ col: IColumn[], prods: IProduct[] }> {
    const columns$ = this.getColumns$();
    const products$ = this.getProducts$();

    return forkJoin([columns$, products$], (col: IColumn[], prods: IProduct[]) => {
      return {
        col, prods
      };
    });

  }

  resolve$(): Observable<{ products: IProduct[], columns: IColumn[] }> {
    return this.httpClient.get<{ products: IProduct[], columns: IColumn[] }>(environment.resolver)
      .pipe(
        // catchError(err => {
        //   debugger;
        //   this.store.dispatch(getProductsFailureAction({ payload: { type: 'Load Products Failure' } }));
        //   return of();
        // })
        // catchError((err) => {
        //   this.store.dispatch(getProductsFailureAction({ payload: { type: 'Load Products Failure' } }));
        //   return throwError(() => new Error(err))
        // })
        catchError((err) => {
          this.store.dispatch(getProductsFailureAction({ payload: { type: 'Load Products Failure' } }));
          return EMPTY;
        })

      )
      .pipe(
        exhaustMap((response: { products: IProduct[], columns: IColumn[] }) => {
          this.store.dispatch(getProductsSuccessAction({ payload: response.products }));
          this.store.dispatch(ColumnsActions.loadColumnsSuccess({ payload: response.columns }));
          return of(response);
        })
      )
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
