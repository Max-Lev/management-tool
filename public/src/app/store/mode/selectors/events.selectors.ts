import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ManagementState } from '../../reducers';
import { EventsState } from '../reducers/events.reducer';

export const selectEventsState = (state: ManagementState) => state.eventsState;

export const eventsStateSelector = createSelector(selectEventsState,
    (state: EventsState) => {
        return state;
    });