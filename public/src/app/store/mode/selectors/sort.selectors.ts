import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ManagementState } from '../../reducers';
import { SortState } from '../reducers/sort.reducer';

export const selectSortState = (state: ManagementState) => state.sortState;

export const sortStateSelector = createSelector(
    selectSortState,
    (state: SortState) => {
        return state;
    }
)