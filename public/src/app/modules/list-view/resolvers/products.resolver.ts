import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { IProducts } from '../models/products.model';
import { ProductsService } from '../providers/products.service';
import { ProductsState } from 'src/app/store/mode/reducers/products.reducer';
import { Store } from '@ngrx/store';
import { LoadPrdoductsAction } from 'src/app/store/mode/actions/products.actions';
import { Actions, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';

export const productsResolver: ResolveFn<IProducts[] | any> = (route, state) => {
  return inject(ProductsService).resolve$();
};

