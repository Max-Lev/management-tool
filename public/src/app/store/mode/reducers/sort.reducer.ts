import { createReducer, on } from '@ngrx/store';
import { SortActions } from '../actions/sort.actions';
import { IProduct } from 'src/app/modules/list-view/models/products.model';

export const sortFeatureKey = 'sort';

export interface SortState {
  type: string;
  field: string;
  order: number;
  // products: IProduct[];
}

export const initialState: SortState = {
  type: SortActions.sortInitial().type,
  field: '',
  order: 0,
  // products: []
};

export const SortReducer = createReducer(
  initialState,
  on(SortActions.sort, (state, action) => {
    // console.log(SortActions.sort, { ...state });
    const _state = {
      ...state,
      ...action.payload,
      type: action.type,
      // products: [...action.payload.products]
    }
    console.log('sort ', { ..._state });
    return _state;
  })
);

