import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { IColumn, IProduct } from 'src/app/modules/list-view/models/products.model';

export const ProductsActions = createActionGroup({
  source: 'Products',
  events: {
    'Load Products': emptyProps(),
    'Load Products Success': props<{ data: { payload: { products: IProduct[] } } }>(),
    'Load Products Failure': props<{ error: { payload: { products: false } } }>()
  }
});
export const LoadPrdoductsAction = createAction('Load Products');

export const getProductsSuccessAction = createAction(
  'Load Products Success',
  props<{ payload: IProduct[] }>()
);

export const getProductsFailureAction = createAction(
  'Load Products Failure',
  props<{ payload: { error: string } }>()
);

