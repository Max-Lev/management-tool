import { createReducer, on } from '@ngrx/store';
import { ProductsActions, getProductsFailureAction, getProductsSuccessAction, LoadPrdoductsAction } from '../actions/products.actions';
import { IProduct } from 'src/app/modules/list-view/models/products.model';
export const productsFeatureKey = 'products';

export interface ProductsState {
  type: string;
  payload: IProduct[];
}

export const ProductsInitialState: ProductsState = {
  type: '',
  payload: []
};
export const ProductsLoadSuccess: ProductsState = {
  type: ProductsActions.loadProducts().type,
  payload: []
};
export const ProductsLoadError: ProductsState = {
  type: ProductsActions.loadProducts().type,
  payload: []
};

export const ProductsReducer = createReducer(
  ProductsInitialState,
  on(getProductsSuccessAction, (state, action: { payload: IProduct[] }) => {
    return { ...state, ...action }
  }),
  on(getProductsFailureAction, (state: ProductsState, action: any) => {
    return { ...state, ...action }
  })
);

