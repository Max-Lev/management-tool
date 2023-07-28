import { createReducer, on } from '@ngrx/store';
import { NotificationActions } from '../actions/notification.actions';

export const notificationFeatureKey = 'notification';

export interface NotificationState {
  type: string;
  success: boolean;
  msg: string;
}

export const initialState: NotificationState = {
  type: '',
  success: true,
  msg: ''
};

export const NotificationReducer = createReducer(
  initialState,
  on(NotificationActions.success, (state, action: { success: boolean, msg: any }) => {
    const _state = { ...state, ...action };
    return _state;
  }),
  on(NotificationActions.failure, (state, action: { success: boolean, msg: any }) => {
    const _state = { ...state, ...action };
    return _state;
  })
);

