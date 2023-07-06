import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { IProduct } from 'src/app/modules/list-view/models/products.model';
import { IEventsForm } from 'src/app/shared/models/events-form.model';

export const EventsActions = createActionGroup({
  source: 'Event',
  events: {
    'Events': emptyProps(),
    'Events Add': props<{ data: IEventsForm }>(),
    'Events Update': props<{ data: IProduct }>(),
    'Events Success': props<{ data: IEventsForm }>(),
    'Events Failure': props<{ error: unknown }>(),
  }
});
export const EVENT_UPDATE_ACTION = createAction('Events Update',
  props<{ payload: IProduct }>());
