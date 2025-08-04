import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(values: string[], searchtext: string): string[] {
    if (!searchtext) return values;
    
    return values.filter((item) => 
      item.toLowerCase().includes(searchtext.toLowerCase())
    );
  }

}
