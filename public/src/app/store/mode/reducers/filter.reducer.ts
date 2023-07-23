import { createReducer, on } from '@ngrx/store';
import { IProduct } from 'src/app/modules/list-view/models/products.model';
import { FilterProductsActions } from '../actions/filter-products.actions';

export const filterFeatureKey = 'filter';

export interface FilterState {
  type: string;
  query: string;
  products: IProduct[];
}

export const initialState: FilterState = {
  type: null,
  query: null,
  products: []
};

export const FilterReducer = createReducer(
  initialState,
  on(FilterProductsActions.filterFilterProductssSuccess,
    (state: FilterState, action: { payload: { query: string; products: IProduct[] } }) => {
      const _state = { ...state, ...action };
      console.log('_state ', _state);
      return _state;
    }
  ))

