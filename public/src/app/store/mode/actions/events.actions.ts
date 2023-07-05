import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IEventsForm } from 'src/app/shared/models/events-form.model';

export const EventsActions = createActionGroup({
  source: 'Event',
  events: {
    'Events': emptyProps(),
    'Events Add': props<{ data: IEventsForm }>(),
    'Events Update': props<{ data: IEventsForm }>(),
    'Events Success': props<{ data: IEventsForm }>(),
    'Events Failure': props<{ error: unknown }>(),
  }
});
