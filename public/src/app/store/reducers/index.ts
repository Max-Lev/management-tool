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
import { SortReducer, SortState } from '../mode/reducers/sort.reducer';
import { FilterReducer, FilterState } from '../mode/reducers/filter.reducer';
import { NotificationReducer, NotificationState } from '../mode/reducers/notification.reducer';

export interface ManagementState {
  modeState: ModeState,
  productsState: ProductsState,
  columnsState: ColumnsState,
  eventsState: EventsState,
  sortState: SortState,
  filterState: FilterState,
  notificationState:NotificationState
}

export const reducers: ActionReducerMap<ManagementState> = {
  modeState: ModeReducer,
  productsState: ProductsReducer,
  columnsState: ColumnsReducer,
  eventsState: EventsReducer,
  sortState: SortReducer,
  filterState: FilterReducer,
  notificationState:NotificationReducer
};


export const metaReducers: MetaReducer<ManagementState>[] = isDevMode() ? [] : [];
