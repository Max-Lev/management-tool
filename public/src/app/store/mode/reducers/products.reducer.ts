import { createReducer, on } from '@ngrx/store';
import { ProductsActions, getProductsFailureAction, getProductsSuccessAction, LoadPrdoductsAction } from '../actions/products.actions';
import { IProducts } from 'src/app/modules/list-view/models/products.model';
export const productsFeatureKey = 'products';

export interface ProductsState {
  type: string;
  payload: IProducts[];
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
  on(getProductsSuccessAction, (state, action: { payload: IProducts[] }) => {
    return { ...state, ...action }
  }),
  on(getProductsFailureAction, (state: ProductsState, action: any) => {
    console.log(state, action);
    return { ...state, ...action }
  })
);

