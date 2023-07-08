import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ManagementState } from '../../reducers';
import { ColumnsState } from '../reducers/columns.reducer';

export const columnsFeatureState = (state: ManagementState) => state.columnsState;

export const columnsstateSelector = createSelector(
    columnsFeatureState,
    (state: ColumnsState) => {
        return state.columns
    }
);