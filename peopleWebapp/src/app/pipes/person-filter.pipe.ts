import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../interfaces/person';

@Pipe({
  name: 'personFilter',
})
export class PersonFilterPipe implements PipeTransform {
  transform(value: any, target: any): any {
    //   if (!value || !value) {
    //     return value;
    // }
    console.log(value);
    console.log(target);
    console.log();
    return value.filter((value: any) => value.firstName?.toLowerCase() === target?.toLowerCase());
  }
}
