import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'toDate',
})
export class ToDatePipe implements PipeTransform {
  transform(value: string, ...args: string[]): unknown {
    let now = new Date(value);
    return moment(now).format(args[0]);
  }
}
