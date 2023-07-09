import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/modules/list-view/models/products.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {

  @Input() product: IProduct;

  @Output() editEmitter:EventEmitter<IProduct> = new EventEmitter();

  constructor() {

  }

  edit(product: IProduct) {
    this.editEmitter.emit(product)
  }

}
