import { createReducer, on } from '@ngrx/store';
import { LoadPrdoductsAction, ProductsActions, fileterProducts, getProductsFailureAction, getProductsSuccessAction, sortProducts } from '../actions/products.actions';
import { IProduct } from 'src/app/modules/list-view/models/products.model';
import { SortEvent } from 'primeng/api';
export const productsFeatureKey = 'products';

export interface ProductsState {
  type: string;
  payload: IProduct[];
  sortEvent?: SortEvent;
  searchVal?: string;
  copyProducts?: IProduct[];
}

export const ProductsInitialState: ProductsState = {
  type: LoadPrdoductsAction().type,
  payload: []
}
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
    if (state.sortEvent !== undefined) {
      if (state.searchVal && state.searchVal !== '') {
        state = { ...state, ...{ copyProducts: action.payload } };
        let _payload = [...sortFn(state.sortEvent, action.payload)];
        _payload = search(state, { searchVal: state.searchVal }).payload;

        return {
          ...state, ...action, ...{
            type: 'Load Filter Products',
            payload: _payload//search(state, { searchVal: state.searchVal }).payload
          }
        }
      } else {
        const data = [...sortFn(state.sortEvent, action.payload)];
        const _state = { ...state, ...action, ...{ payload: [...data] } };
        return _state;
      }
    }
    else if (state.searchVal && state.searchVal !== '') {
      state = { ...state, ...{ copyProducts: action.payload } };
      return {
        ...state, ...action, ...{
          type: 'Load Filter Products',
          payload: search(state, { searchVal: state.searchVal }).payload
        }
      }
    }
    else {
      return { ...state, ...action, ...{ copyProducts: action.payload } }
    }

  }),
  on(fileterProducts, (state: ProductsState, action: { searchVal: string }) => {
    if (action.searchVal !== '') {
      return search(state, action);
    } else if (action.searchVal === '') {
      if (state.sortEvent !== undefined) {
        let _payload = [...sortFn(state.sortEvent, state.copyProducts)];
        return { ...state, ...action, ...{ payload: _payload, searchVal: '' } };
      } else {
        return { ...state, ...action, ...{ payload: state.copyProducts, searchVal: '' } };
      }
    }
    return { ...state, ...action, ...{ payload: state.copyProducts } }
  }),
  on(getProductsFailureAction, (state: ProductsState, action: any) => {
    return { ...state, ...action }
  }),
  on(sortProducts, (state: ProductsState, action: { payload: IProduct[], sortEvent: SortEvent }) => {
    const data = [...sortFn(action.sortEvent, action.payload)];
    const _state = { ...state, ...action, ...{ payload: [...data] } };
    return _state;
  })
);

const search = (state: ProductsState, action: { searchVal: string }): ProductsState => {
  const _p = state.copyProducts.filter((prod: IProduct) => {
    const vals: string[] = Object.values(prod);
    const searchProducts = vals.find((val: string) =>
      `${val}`.toLowerCase().match(action.searchVal.toLowerCase()));
    if (searchProducts) {
      return searchProducts;
    } else {
      return false;
    }
  });
  const _state = { ...state, ...action, ...{ payload: _p } };
  return _state;
}


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
