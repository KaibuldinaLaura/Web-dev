import { Component, OnInit } from '@angular/core';
import { coat } from '../stradivarius_products';

@Component({
  selector: 'app-coat-item',
  templateUrl: './coat-item.component.html',
  styleUrls: ['./coat-item.component.css']
})
export class CoatItemComponent implements OnInit {

  stradivarius_product = coat;

  constructor() { }

  ngOnInit(): void {
  }

}
