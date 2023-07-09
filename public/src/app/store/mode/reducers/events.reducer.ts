import { createReducer, on } from '@ngrx/store';

import { IEventsForm } from 'src/app/shared/models/events-form.model';
import { EventsActions } from '../actions/events.actions';
import { IProduct } from 'src/app/modules/list-view/models/products.model';

export const eventsFeatureKey = 'events';

export interface EventsState {
  type: string;
  data: IProduct;
};

export const initialState: EventsState = {
  type: EventsActions.events().type,
  data: {
    name: '',
    color: '',
    description: '',
    create_date: '',
    last_update: '',
    create_by: ''
  }
};

export const EventsReducer = createReducer(
  initialState,
  on(EventsActions.eventsAdd, (state: EventsState, action: { data: IEventsForm }) => {
    const add = {
      ...state, ...action.data, ...{
        createdDate: new Date().toLocaleDateString(),
        updatedDate: new Date().toLocaleDateString()
      }
    };
    return add;
  }),
  on(EventsActions.eventsUpdate, (state: EventsState, action: { data: IProduct }) => {
    const update = {
      ...state, ...action, 
    };
    return update;
  }),
  on(EventsActions.eventsSuccess, (state: EventsState, action: { data: IProduct[] }) => {
    return { ...state, ...action.data, };
  }),
  on(EventsActions.eventsSelect, (state: EventsState, action: { data: IProduct }) => {
    return { ...state, ...action, };
  })
);



