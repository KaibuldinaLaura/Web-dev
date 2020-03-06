import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategories(){
    return [
      {id: 1, name: 'Coat', path: 'coat'},
      {id: 2, name: 'Dress', path: 'dress'},
      {id: 3, name: 'Jeans', path: 'jeans'},
      {id: 4, name: 'Skirt', path: 'skirt'}
    ]
  }
}
