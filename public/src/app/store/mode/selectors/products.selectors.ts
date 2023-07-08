import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ManagementState } from '../../reducers';
import { ProductsState } from '../reducers/products.reducer';

export const productsFeatureModuel = (state: ManagementState) => state.productsState;
export const productsStateSelector = createSelector(
    productsFeatureModuel,
    (productsFeatureModuel: ProductsState) => {
        return productsFeatureModuel.payload
    }
)