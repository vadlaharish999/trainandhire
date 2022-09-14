import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ages'
})
export class AgesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + 'yrs';
  }

}
