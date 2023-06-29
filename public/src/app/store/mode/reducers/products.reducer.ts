import { createReducer, on } from '@ngrx/store';
import { ProductsActions, getPostsFailureAction, getProductsSuccessAction, LoadPrdoductsAction } from '../actions/products.actions';
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
  on(getProductsSuccessAction, (state, action) => {
    return { ...state, ...action }
  }),
  on(getPostsFailureAction, (state: ProductsState, action: any) => {
    console.log(state, action);
    return { ...state, ...action }
  })
);

