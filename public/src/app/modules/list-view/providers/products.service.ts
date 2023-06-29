import { Injectable } from '@angular/core';
import { ListViewModule } from '../list-view.module';

@Injectable({
  providedIn: ListViewModule
})
export class ProductsService {

  constructor() { }
}
