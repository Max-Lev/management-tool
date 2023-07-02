import { Component, OnInit } from '@angular/core';
import { IColumn, IProducts } from '../models/products.model';
import { CustomKeyValuePipe } from 'src/app/shared/pipes/custom-key-value.pipe';
import { Observable, map } from 'rxjs';
import { ConfigEffects } from 'src/app/store/effects/config.effects';
import { ManagementState } from 'src/app/store/reducers';
import { Store, select } from '@ngrx/store';
import { ProductsActions, LoadPrdoductsAction } from 'src/app/store/mode/actions/products.actions';
import { productsStateSelector } from 'src/app/store/mode/selectors/products.selectors';
import { ProductsState } from 'src/app/store/mode/reducers/products.reducer';
import { ProductsService } from '../providers/products.service';
import { ColumnsActions } from 'src/app/store/mode/actions/columns.actions';
import { columnsstateSelector } from 'src/app/store/mode/selectors/columns.selectors';


@Component({
  selector: 'app-list-view-container',
  templateUrl: './list-view-container.component.html',
  styleUrls: ['./list-view-container.component.scss'],
  providers: [],

})
export class ListViewContainerComponent implements OnInit {

  products: IProducts[];

  cols: Observable<IColumn[]>;

  constructor(private productsService: ProductsService,
    private store: Store<ManagementState>,
    private configEffects: ConfigEffects) {

  }
  ngOnInit(): void {
    // this.cols = this.productsService.getColumns$();

    // this.store.dispatch(LoadPrdoductsAction());
    // this.store.dispatch(ColumnsActions.loadColumns());


    this.store.pipe(select(productsStateSelector)).subscribe((productsState: IProducts[]) => {
      debugger;
      this.products = productsState;
    });
    this.cols = this.store.pipe(select(columnsstateSelector));
    // .subscribe((columns: IColumn[]) => {
    //   this.cols = columns;
    // });

    this.store.subscribe((state: ManagementState) => {
      console.log('ManagementState ', state);
    })

  }
}
