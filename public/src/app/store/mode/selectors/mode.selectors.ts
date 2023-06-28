import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ManagementState } from '../../reducers';
import { ModeState } from '../reducers/mode.reducer';

export const selectModeState = (state: ManagementState) => state.modeState;

export const modeStateSelector = createSelector(
    selectModeState,
    (state: ModeState) => {
        return state.type;
    }
);