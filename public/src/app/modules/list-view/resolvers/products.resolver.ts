import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { IProduct } from '../models/products.model';
import { ProductsService } from '../providers/products.service';

export const productsResolver: ResolveFn<IProduct[] | any> = (route, state) => {
  return inject(ProductsService).resolve$();
};

