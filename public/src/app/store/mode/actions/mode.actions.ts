import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';

export enum MODE_TYPE_ENUM {
  LIST = '[MODE] LIST',
  TILES = '[MODE] TILES',
  ADD = '[MODE] ADD',
  INITIAL = '[MODE] INITIAL',
}
// export const increment = createAction('[Counter Component] Increment');
// export const decrement = createAction('[Counter Component] Decrement');
// export const reset = createAction('[Counter Component] Reset');

export const INITIAL_MODE_ACTION = createAction(MODE_TYPE_ENUM.LIST);
export const List_MODE_ACTION = createAction(MODE_TYPE_ENUM.LIST);
export const Tiles_MODE_ACTION = createAction(MODE_TYPE_ENUM.TILES);
export const ADD_MODE_ACTION = createAction(MODE_TYPE_ENUM.ADD, props<{ payload: unknown }>());

export const ModeActions = createActionGroup({
  source: 'Mode',
  events: {
    'Load Mode': emptyProps(),
    'List Mode ': props<{ data: unknown }>(),
    'Tiles Mode ': props<{ data: unknown }>(),
    'Add Mode ': props<{ data: unknown }>(),
  }
});
