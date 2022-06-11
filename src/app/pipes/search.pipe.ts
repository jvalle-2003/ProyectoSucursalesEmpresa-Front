import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: any, search:any) {
    if(search === undefined){ 
      return products;
    }else{
      return products.filter((products:any)=>{
        return products.name.toLowerCase().includes(search.toLowerCase())
      })
    }
  }

}
