import { Component, OnInit } from '@angular/core';
import { IColumn, IProduct } from '../models/products.model';
import { Observable, map } from 'rxjs';
import { ProductsEffects } from 'src/app/store/effects/products.effects';
import { ManagementState } from 'src/app/store/reducers';
import { Action, Store, select } from '@ngrx/store';
import { productsStateSelector } from 'src/app/store/mode/selectors/products.selectors';
import { ProductsService } from '../providers/products.service';
import { columnsstateSelector } from 'src/app/store/mode/selectors/columns.selectors';
import { ADD_MODE_ACTION, CLOSE_MODE_ACTION, EDIT_MODE_ACTION, MODE_TYPE_ENUM } from 'src/app/store/mode/actions/mode.actions';
import { ModeState } from 'src/app/store/mode/reducers/mode.reducer';
import { selectModeState } from 'src/app/store/mode/selectors/mode.selectors';
import { IEventsForm } from 'src/app/shared/models/events-form.model';
import { EventsActions } from 'src/app/store/mode/actions/events.actions';
import { eventsStateSelector } from 'src/app/store/mode/selectors/events.selectors';


@Component({
  selector: 'app-list-view-container',
  templateUrl: './list-view-container.component.html',
  styleUrls: ['./list-view-container.component.scss'],
  providers: [],

})
export class ListViewContainerComponent implements OnInit {

  title = 'New event';

  products: IProduct[];

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

    // this.store.dispatch(ADD_MODE_ACTION({ payload: { modeType: MODE_TYPE_ENUM.ADD } }));

    this.store.subscribe((state: ManagementState) => {
      console.log('ManagementState ', state);
    });

  }


  closeSideBar() {
    this.store.dispatch(CLOSE_MODE_ACTION({ payload: { modeType: MODE_TYPE_ENUM.CLOSE } }))
  }

  private toggleSideBar() {
    this.modeState$.subscribe((modeState: ModeState) => {

      if (modeState.type === MODE_TYPE_ENUM.ADD || modeState.type === MODE_TYPE_ENUM.EDIT) {
        this.sidebarVisible = true;
      } else {
        this.sidebarVisible = false;
      }
    });
  }

  private setProducts$() {
    this.store.pipe(select(productsStateSelector)).subscribe((productsState: IProduct[]) => {
      this.products = [...productsState];
    });
    // this.store.pipe(select(eventsStateSelector)).subscribe((productsState) => {
    //   this.products = [...productsState];
    // });
  }

  private setColumns$() {
    this.cols = this.store.pipe(select(columnsstateSelector));
    // this.store.pipe(select(columnsstateSelector)).subscribe(c => this.cols = [...c]);
  }

  cancelEventHandler(action: boolean) {
    if (action === false) {
      this.closeSideBar();
    }
  }

  saveEventHandler(event: { payload: IEventsForm | IProduct, action: MODE_TYPE_ENUM }) {
    console.log(event);

    if (event.action === MODE_TYPE_ENUM.ADD) {
      this.store.dispatch(EventsActions.eventsAdd({ data: event.payload as IEventsForm }));
    }
    if (event.action === MODE_TYPE_ENUM.EDIT) {
      this.store.dispatch(EventsActions.eventsUpdate({ data: event.payload as IProduct }));
    }

    this.closeSideBar();
  }

  edit(product: IProduct) {
    this.title = 'Edit event';
    this.store.dispatch(EventsActions.eventsSelect({ data:product}));
    this.store.dispatch<Action>(EDIT_MODE_ACTION({ payload: product }));
    
  }

}
