import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from 'src/app/modules/list-view/models/products.model';

interface Item {
  [key: string]: string,
  value: string
};

@Pipe({
  name: 'customKeyValue'
})
export class CustomKeyValuePipe implements PipeTransform {

  transform(value: IProducts): any {
    const keys: string[] = Object.keys(value);
    const values: string[] = Object.values(value);

    const data: Item[] = [];
    keys.reduce((prev: any, current: any, index: number) => {
      const item: Item = { key: current, value: prev[index] };
      data.push(item);
      return prev;
    }, values);
    return data;
  }

}
