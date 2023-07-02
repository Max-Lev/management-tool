import { ofType } from '@ngrx/effects';
import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';

export enum MODE_TYPE_ENUM {
  LIST = '[MODE] LIST',
  TILES = '[MODE] TILES',
  ADD = '[MODE] ADD',
  INITIAL = '[MODE] INITIAL',
}

export const INITIAL_MODE_ACTION = createAction(MODE_TYPE_ENUM.INITIAL);

export const LIST_MODE_ACTION = createAction(MODE_TYPE_ENUM.LIST,
  props<{ payload: { modeType: MODE_TYPE_ENUM.LIST } }>());

export const TILES_MODE_ACTION = createAction(MODE_TYPE_ENUM.TILES,
  props<{ payload: { modeType: MODE_TYPE_ENUM.TILES } }>());

export const ADD_MODE_ACTION = createAction(MODE_TYPE_ENUM.ADD,
  props<{ payload: { modeType: MODE_TYPE_ENUM.ADD } }>());



  
export const ModeActions = createActionGroup({
  source: 'Mode',
  events: {
    'Load Mode': emptyProps(),
    'List Mode ': props<{ data: unknown }>(),
    'Tiles Mode ': props<{ data: unknown }>(),
    'Add Mode ': props<{ data: unknown }>(),
  }
});
