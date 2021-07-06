import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/(^\w{1})|(\s{1}\w{1})/g, (match) =>
      match.toUpperCase()
    );
  }
}
