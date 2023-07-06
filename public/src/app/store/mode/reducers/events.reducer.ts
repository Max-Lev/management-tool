import { createReducer, on } from '@ngrx/store';

import { IEventsForm } from 'src/app/shared/models/events-form.model';
import { EVENT_UPDATE_ACTION, EventsActions } from '../actions/events.actions';
import { IProduct } from 'src/app/modules/list-view/models/products.model';

export const eventsFeatureKey = 'events';

export interface EventsState {
  type: string;
  payload: IProduct;
};

export const initialState: EventsState = {
  type: EventsActions.events().type,
  payload: {
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
    console.log(add);
    return add;
  }),
  on(EventsActions.eventsUpdate, (state: EventsState, action: { data: IProduct }) => {
    const update = {
      ...state, ...action.data, ...{
        updatedDate: new Date().toLocaleDateString()
      }
    };
    console.log(update);
    return update;
  }),
  on(EventsActions.eventsSuccess, (state: EventsState, action: { data: IEventsForm }) => {
    return { ...state, ...action.data, };
  }),
  on(EVENT_UPDATE_ACTION, (state: EventsState, action: { payload: IProduct }) => {
    const update = { ...state, ...action, };
    console.log(update)
    return update;
  })
);



