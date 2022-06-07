import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "./Models/product";

@Pipe({
  name: 'arraySplice'
})
export class ArraySplicePipe implements PipeTransform {

  transform(products: Product[], filter:string): Product[] {
    if( filter=='')
      return products;
    else
    {let filtered= products.filter(product => product.name.includes(filter));

    return filtered;}
  }

}
