import { Component, OnInit } from '@angular/core';
import { IColumn, IProducts } from '../models/products.model';
import { Observable } from 'rxjs';
import { ProductsEffects } from 'src/app/store/effects/products.effects';
import { ManagementState } from 'src/app/store/reducers';
import { Store, select } from '@ngrx/store';
import { productsStateSelector } from 'src/app/store/mode/selectors/products.selectors';
import { ProductsService } from '../providers/products.service';
import { columnsstateSelector } from 'src/app/store/mode/selectors/columns.selectors';
import { ADD_MODE_ACTION, HIDE_MODE_ACTION, MODE_TYPE_ENUM } from 'src/app/store/mode/actions/mode.actions';
import { ModeState } from 'src/app/store/mode/reducers/mode.reducer';
import { selectModeState } from 'src/app/store/mode/selectors/mode.selectors';


@Component({
  selector: 'app-list-view-container',
  templateUrl: './list-view-container.component.html',
  styleUrls: ['./list-view-container.component.scss'],
  providers: [],

})
export class ListViewContainerComponent implements OnInit {

  products: IProducts[];

  cols: Observable<IColumn[]>;

  modeState$: Observable<ModeState>;

  sidebarVisible: boolean = false;

  constructor(private productsService: ProductsService,
    private store: Store<ManagementState>,
    private configEffects: ProductsEffects) {
    this.modeState$ = this.store.pipe(select(selectModeState));

  }
  ngOnInit(): void {
    this.setColumns$();
    this.setProducts$();
    this.toggleSideBar();
    this.store.dispatch(ADD_MODE_ACTION({ payload: { modeType: MODE_TYPE_ENUM.ADD } }))
    this.store.subscribe((state: ManagementState) => {
      console.log('ManagementState ', state);
    });

  }


  hide() {
    this.store.dispatch(HIDE_MODE_ACTION({ payload: { modeType: MODE_TYPE_ENUM.HIDE } }))
    console.log('hide')
  }


  private toggleSideBar() {
    this.modeState$.subscribe((modeState: ModeState) => {
      console.log('ModeState ', modeState);
      if (modeState.type === MODE_TYPE_ENUM.ADD) {
        this.sidebarVisible = true;
      } else {
        this.sidebarVisible = false;
      }
    });
  }

  private setProducts$() {
    this.store.pipe(select(productsStateSelector)).subscribe((productsState: IProducts[]) => {
      this.products = productsState;
    });
  }

  private setColumns$() {
    this.cols = this.store.pipe(select(columnsstateSelector));
  }

}
