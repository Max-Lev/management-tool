import { createReducer, on } from '@ngrx/store';

import { IEventsForm } from 'src/app/shared/models/events-form.model';
import { EventsActions } from '../actions/events.actions';

export const eventsFeatureKey = 'events';

export interface EventsState {
  event: string;
  color: string;
  description: string;
  createdDate: string;
  updatedDate: string;
}

export const initialState: EventsState = {
  event: '',
  color: '',
  description: '',
  createdDate: '',
  updatedDate: ''
};

export const EventsReducer = createReducer(
  initialState,
  on(EventsActions.eventsAdd, (state: EventsState, action: { data: IEventsForm }) => {
    debugger;
    return {
      ...state, ...action.data, ...{
        createdDate: new Date().toLocaleDateString(),
        updatedDate: new Date().toLocaleDateString()
      }
    };
  }),
  on(EventsActions.eventsUpdate, (state: EventsState, action: { data: IEventsForm }) => {
    return {
      ...state, ...action, ...{
        updatedDate: new Date().toLocaleDateString()
      }
    };
  }),
  on(EventsActions.eventsSuccess, (state: EventsState, action: { data: IEventsForm }) => {
    debugger;
    return {...state, ...action,};
  })
);



