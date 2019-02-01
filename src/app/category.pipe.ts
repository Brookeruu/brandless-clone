import {Pipe, PipeTransform} from '@angular/core';
import {Item} from './item.model';

@Pipe({

})

export class CategoryPipe implements PipeTransform {
  transform(input: Item[], args) {
    return input;
  }
}
