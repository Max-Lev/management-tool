import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IProduct } from 'src/app/modules/list-view/models/products.model';

export const FilterProductsActions = createActionGroup({
  source: 'FilterProducts',
  events: {
    'Filter FilterProductss': emptyProps(),
    'Filter FilterProductss Success': props<{
      payload: {
        query: string, products: IProduct[]
      }
    }>(),
    'Filter FilterProductss Failure': props<{ error: unknown }>(),
  }
});
