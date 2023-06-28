import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { ModeReducer, ModeState } from '../mode/reducers/mode.reducer';

export interface ManagementState {
  modeState: ModeState
}

export const reducers: ActionReducerMap<ManagementState> = {
  modeState: ModeReducer
};


export const metaReducers: MetaReducer<ManagementState>[] = isDevMode() ? [] : [];
