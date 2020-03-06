import { Component, OnInit } from '@angular/core';
import { jeans } from '../stradivarius_products'

@Component({
  selector: 'app-jeans-item',
  templateUrl: './jeans-item.component.html',
  styleUrls: ['./jeans-item.component.css']
})
export class JeansItemComponent implements OnInit {

  stradivarius_product = jeans;

  constructor() { }

  ngOnInit(): void {
  }

}
