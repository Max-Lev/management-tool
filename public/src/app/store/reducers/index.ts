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
import { ColumnsReducer, ColumnsState } from '../mode/reducers/columns.reducer';
import { EventsReducer, EventsState } from '../mode/reducers/events.reducer';

export interface ManagementState {
  modeState: ModeState,
  productsState: ProductsState,
  columnsState: ColumnsState,
  eventsState: EventsState,
}

export const reducers: ActionReducerMap<ManagementState> = {
  modeState: ModeReducer,
  productsState: ProductsReducer,
  columnsState: ColumnsReducer,
  eventsState: EventsReducer
};


export const metaReducers: MetaReducer<ManagementState>[] = isDevMode() ? [] : [];
