import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, of, Observable, EMPTY, mergeMap } from 'rxjs';
import { ConfigService } from 'src/app/core/providers/config.service';
import { ListViewModule } from 'src/app/modules/list-view/list-view.module';
import { IProducts } from 'src/app/modules/list-view/models/products.model';
import { getProductsSuccessAction, LoadPrdoductsAction } from '../mode/actions/products.actions';
import { ProductsLoadSuccess } from '../mode/reducers/products.reducer';



@Injectable()
export class ConfigEffects {


  constructor(private actions$: Actions,
    private configService: ConfigService) {

  }

  products$: Observable<{ type: string, payload: IProducts[] } | { type: string; }> =
    createEffect(() => this.actions$.pipe(
      ofType(LoadPrdoductsAction().type),
      exhaustMap(
        () => this.configService.getProducts$()
          .pipe(
            map(products => {
              return getProductsSuccessAction({ payload: products })
            }),
            catchError(() => EMPTY)
          ))
    ));
}
