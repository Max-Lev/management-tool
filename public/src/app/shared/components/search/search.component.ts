import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { InputText } from 'primeng/inputtext';
import { Observable, debounceTime, distinctUntilChanged, fromEvent, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { LoadPrdoductsAction, fileterProducts } from 'src/app/store/mode/actions/products.actions';
import { ProductsState } from 'src/app/store/mode/reducers/products.reducer';
import { productsStateSelector } from 'src/app/store/mode/selectors/products.selectors';
import { ManagementState } from 'src/app/store/reducers';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit, OnInit {

  @ViewChild('search') search: ElementRef;

  searchVal: string;

  productsState$: Observable<ProductsState>;

  constructor(private store: Store<ManagementState>) {
    this.productsState$ = this.store.pipe(select(productsStateSelector));
  }

  ngOnInit(): void {
    this.productsState$.subscribe((state:ProductsState)=>{
      this.searchVal = state.searchVal;
    })
  }

  ngAfterViewInit(): void {

    fromEvent(this.search.nativeElement, 'keyup')
      .pipe(debounceTime(1250))
      .pipe(map(() => this.search.nativeElement.value))
      .subscribe((data: string) => {
        
        // if (data === '') {
        //   this.store.dispatch(LoadPrdoductsAction());
        // } else {
          this.store.dispatch(fileterProducts({ searchVal: data }));
        // }
      });
  }


  keyUp(searchVal: string) {

  }

}
