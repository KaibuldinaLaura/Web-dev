import { Component, OnInit } from '@angular/core';
import { skirt } from '../stradivarius_products';

@Component({
  selector: 'app-skirt-item',
  templateUrl: './skirt-item.component.html',
  styleUrls: ['./skirt-item.component.css']
})
export class SkirtItemComponent implements OnInit {

  stradivarius_product = skirt;

  constructor() { }

  ngOnInit(): void {
  }

}
