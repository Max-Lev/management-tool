import { createReducer, on } from '@ngrx/store';
import { ProductsActions, getProductsFailureAction, getProductsSuccessAction, LoadPrdoductsAction, sortProducts } from '../actions/products.actions';
import { IProduct } from 'src/app/modules/list-view/models/products.model';
import { SortEvent } from 'primeng/api';
export const productsFeatureKey = 'products';

export interface ProductsState {
  type: string;
  payload: IProduct[];
  sortEvent?: SortEvent;
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
  }),
  on(sortProducts, (state: ProductsState, action: { payload: IProduct[], sortEvent: SortEvent }) => {

    const data = [...sortFn(action.sortEvent, action.payload)];

    const _state = {
      ...state, ...action, ...{
        payload: [...data]
      }
    };
    console.log(_state);
    return _state;
  })
);


const sortFn = (event: SortEvent, payload: IProduct[]): IProduct[] => {
  const _payload = [...payload]

  _payload.sort((data1: any, data2: any) => {
    let value1 = data1[event.field];
    let value2 = data2[event.field];
    let result = null;

    if (value1 == null && value2 != null) result = -1;
    else if (value1 != null && value2 == null) result = 1;
    else if (value1 == null && value2 == null) result = 0;
    else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
    else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

    const _result = event.order * result;
    
    return _result;
  });
  return _payload;

}
