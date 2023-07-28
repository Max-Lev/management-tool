import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ManagementState } from '../../reducers';
import { NotificationState } from '../reducers/notification.reducer';

export const NotificationFeatureState = (state:ManagementState) => state.notificationState;

export const NotificationSelector = createSelector(
    NotificationFeatureState,
    (state:NotificationState)=>{
        return state;
    }
)