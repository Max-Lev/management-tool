import { ofType } from '@ngrx/effects';
import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { IProduct } from 'src/app/modules/list-view/models/products.model';

export enum MODE_TYPE_ENUM {
  LIST = '[MODE] LIST',
  TILES = '[MODE] TILES',
  ADD = '[MODE] ADD',
  CLOSE = '[MODE] CLOSE',
  INITIAL = '[MODE] INITIAL',
  SAVE = '[MODE] SAVE',
  EDIT = '[MODE] EDIT',
}

export const INITIAL_MODE_ACTION = createAction(MODE_TYPE_ENUM.INITIAL);

export const LIST_MODE_ACTION = createAction(MODE_TYPE_ENUM.LIST,
  props<{ payload: { modeType: MODE_TYPE_ENUM.LIST } }>());

export const TILES_MODE_ACTION = createAction(MODE_TYPE_ENUM.TILES,
  props<{ payload: { modeType: MODE_TYPE_ENUM.TILES } }>());

export const ADD_MODE_ACTION = createAction(MODE_TYPE_ENUM.ADD,
  props<{ payload: { modeType: MODE_TYPE_ENUM.ADD } }>());

export const EDIT_MODE_ACTION = createAction(MODE_TYPE_ENUM.EDIT,
  props<{ payload: IProduct }>());

export const CLOSE_MODE_ACTION = createAction(MODE_TYPE_ENUM.CLOSE,
  props<{ payload: { modeType: MODE_TYPE_ENUM.CLOSE } }>());

export const SAVE_MODE_ACTION = createAction(MODE_TYPE_ENUM.CLOSE,
  props<{ payload: {} }>());




export const ModeActions = createActionGroup({
  source: 'Mode',
  events: {
    'Load Mode': emptyProps(),
    'List Mode ': props<{ data: unknown }>(),
    'Tiles Mode ': props<{ data: unknown }>(),
    'Add Mode ': props<{ data: unknown }>(),
  }
});
