import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../services/heroes.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Heroe[], arg: string): Heroe[] {
    console.log(arg);
   const result =[];
    for(const heroe of value){
      if(heroe.nombre.toLocaleLowerCase().indexOf(arg.toLocaleLowerCase())>-1){
          result.push(heroe);
      }
    }
    if (result.length==0)
      return value;
    return result ;
  }

}
