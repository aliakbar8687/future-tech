import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertINR'
})
export class ConvertINRPipe implements PipeTransform {

  transform(value: number): number {
    return value*80;
  }

}
