import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input('stradivarius_product') stradivarius_product : any;

  constructor() { }

  ngOnInit(): void {
  }

  redirect(path) {
    window.location.href = path;
  }

}
