import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select, Action } from '@ngrx/store';
import { SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { IEventsForm } from 'src/app/shared/models/events-form.model';
import { EventsActions } from 'src/app/store/mode/actions/events.actions';
import { MODE_TYPE_ENUM, CLOSE_MODE_ACTION, EDIT_MODE_ACTION } from 'src/app/store/mode/actions/mode.actions';
import { ModeState } from 'src/app/store/mode/reducers/mode.reducer';
import { ProductsState } from 'src/app/store/mode/reducers/products.reducer';
import { SortState } from 'src/app/store/mode/reducers/sort.reducer';
import { columnsstateSelector } from 'src/app/store/mode/selectors/columns.selectors';
import { selectModeState } from 'src/app/store/mode/selectors/mode.selectors';
import { productsStateSelector } from 'src/app/store/mode/selectors/products.selectors';
import { sortStateSelector } from 'src/app/store/mode/selectors/sort.selectors';
import { ManagementState } from 'src/app/store/reducers';
import { IProduct, IColumn } from '../models/products.model';
import { ProductsService } from '../providers/products.service';
import { sortProducts } from 'src/app/store/mode/actions/products.actions';



@Component({
  selector: 'app-list-view-container',
  templateUrl: './list-view-container.component.html',
  styleUrls: ['./list-view-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ListViewContainerComponent implements OnInit, AfterViewInit {

  title = 'New event';

  products: IProduct[] = [];

  cols: Observable<IColumn[]>;

  modeState$: Observable<ModeState>;

  sidebarVisible: boolean = false;

  listView: boolean = true;

  MODE_TYPE_ENUM = MODE_TYPE_ENUM;

  @ViewChild(Table) table: Table;

  productsState$: Observable<ProductsState>;

  sortState$: Observable<SortState>;

  tableSort = { field: '', order: 0 };


  constructor(private productsService: ProductsService,
    private changeDetector: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private store: Store<ManagementState>) {
    this.modeState$ = this.store.pipe(select(selectModeState));
    this.productsState$ = this.store.pipe(select(productsStateSelector));
    this.sortState$ = this.store.pipe(select(sortStateSelector));

  }

  ngOnInit(): void {

    this.setColumns$();
    this.setProducts$();
    this.toggleSideBar();

    this.store.subscribe((state: ManagementState) => {
      // console.log('App State ', state);
    });

  }

  ngAfterViewInit(): void {
    this.setModeState$();
  }

  setModeState$(): void {
    this.modeState$.subscribe((modeState: ModeState) => {
      if (modeState.type === MODE_TYPE_ENUM.LIST) {
        this.listView = true;
        this.setTableSortIcon();
      }
      else if (modeState.type === MODE_TYPE_ENUM.TILES) {
        this.listView = false;
      }
      this.changeDetector.detectChanges();
    });
  }

  setTableSortIcon() {
    /** 
     * timeout required for rendering
    */
    setTimeout(() => {
      if (this.listView) {
        if (this.tableSort.field !== '') {
          this.table.sortField = this.tableSort.field;
          this.table.sortOrder = this.tableSort.order;
          this.table.sortSingle();
          this.table.cd.detectChanges();
          this.changeDetector.detectChanges();
        }
      }
    }, 250);
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

    this.productsState$.subscribe({
      next: (productsState: ProductsState) => {
        this.products = [...productsState?.payload || []];
        this.changeDetector.detectChanges();
      },
      error: (err) => {
        console.log('err ', err)
      }
    });
  }

  private setColumns$() {
    this.cols = this.store.pipe(select(columnsstateSelector));
  }

  cancelEventHandler(action: boolean) {
    if (action === false) {
      this.closeSideBar();
    }
  }

  saveEventHandler(event: { payload: IEventsForm | IProduct, action: MODE_TYPE_ENUM }) {

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
    this.store.dispatch<Action>(EDIT_MODE_ACTION({ payload: product }));
  }

  editEmitterHandler(product: IProduct) {
    this.edit(product);
  }

  sort(event: SortEvent) {
    this.tableSort = { field: event.field, order: event.order }
    this.store.dispatch(sortProducts({ payload: this.products as IProduct[], sortEvent: event }));
    this.changeDetector.detectChanges();
  }

}
