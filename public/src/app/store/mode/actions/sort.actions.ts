import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IProduct } from 'src/app/modules/list-view/models/products.model';

export const SortActions = createActionGroup({
  source: 'Sort',
  events: {
    'Sort Initial': emptyProps(),
    'Sort': props<{
      payload:
      {
        field: string,
        order: number,
        // products: IProduct[]
      }
    }>()
  }
});
