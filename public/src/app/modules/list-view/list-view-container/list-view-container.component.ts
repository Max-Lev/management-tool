import { Component, OnInit } from '@angular/core';
import { IColumn, IProducts } from '../models/products.model';
import { CustomKeyValuePipe } from 'src/app/shared/pipes/custom-key-value.pipe';
import { ConfigService } from 'src/app/core/providers/config.service';
import { Observable, map } from 'rxjs';
import { ConfigEffects } from 'src/app/store/effects/config.effects';
import { ManagementState } from 'src/app/store/reducers';
import { Store, select } from '@ngrx/store';
import { ProductsActions, LoadPrdoductsAction } from 'src/app/store/mode/actions/products.actions';
import { productsStateSelector } from 'src/app/store/mode/selectors/products.selectors';
import { ProductsState } from 'src/app/store/mode/reducers/products.reducer';


@Component({
  selector: 'app-list-view-container',
  templateUrl: './list-view-container.component.html',
  styleUrls: ['./list-view-container.component.scss'],
  providers: [],

})
export class ListViewContainerComponent implements OnInit {

  products: IProducts[];

  cols: Observable<IColumn[]>;

  constructor(private configService: ConfigService,
    private store: Store<ManagementState>,
    private configEffects: ConfigEffects) {

  }
  ngOnInit(): void {
    this.cols = this.configService.getColumns$();

    this.store.dispatch(LoadPrdoductsAction());
    
    this.store.pipe(select(productsStateSelector)).subscribe((productsState: IProducts[]) => {
      this.products = productsState;
    });

    this.store.subscribe(s => {
      console.log(s)
    })

  }
}
