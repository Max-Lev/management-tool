import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { ModeReducer, ModeState } from '../mode/reducers/mode.reducer';
import { ProductsReducer, ProductsState } from '../mode/reducers/products.reducer';

export interface ManagementState {
  modeState: ModeState,
  productsState: ProductsState
}

export const reducers: ActionReducerMap<ManagementState> = {
  modeState: ModeReducer,
  productsState: ProductsReducer
};


export const metaReducers: MetaReducer<ManagementState>[] = isDevMode() ? [] : [];
