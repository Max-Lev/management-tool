import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const NotificationActions = createActionGroup({
  source: 'Http',
  events: {
    'Load Notifications': emptyProps(),
    'Success': props<{ success: boolean, msg: string }>(),
    'Failure': props<{ success: boolean, msg: string }>(),
  }
});
