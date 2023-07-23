import { Component, ElementRef, ViewChild } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { debounceTime, distinctUntilChanged, fromEvent, mergeMap, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @ViewChild('search') search: ElementRef;
  // @ViewChild('search', {static: true}) search: ElementRef;

  searchVal: string;
  constructor() {

  }


  keyUp(searchVal: string) {
    
    fromEvent(this.search.nativeElement, 'keyup')
      // of(searchVal)
      .pipe(debounceTime(1000)).pipe(
        distinctUntilChanged(),
        mergeMap((val) => {
          return of(val);
        })
      ).subscribe(data => {
        console.log(this.search.nativeElement.value)
        console.log(data)
      })

      // fromEvent(this.search.nativeElement,'keyup')
      // .pipe(
      //     // filter(Boolean),
      //     debounceTime(1500),
      //     distinctUntilChanged(),
      //     tap((event:KeyboardEvent) => {
      //       console.log(event)
      //       console.log(this.search.nativeElement.value)
      //     })
      // ).subscribe(d=>{
      //   console.log(d);
      // })

  }

}
