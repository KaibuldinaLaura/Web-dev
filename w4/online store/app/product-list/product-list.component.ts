import { Component } from '@angular/core';

import { ProductItemComponent } from '../product-item/product-item.component';
ProductItemComponent
import { products } from '../products'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  
  share() {
    window.alert('Please, enter "ok" if you want to share this :)');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}