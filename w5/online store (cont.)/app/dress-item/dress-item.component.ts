import { Component, OnInit } from '@angular/core';
import { dress } from '../stradivarius_products'

@Component({
  selector: 'app-dress-item',
  templateUrl: './dress-item.component.html',
  styleUrls: ['./dress-item.component.css']
})
export class DressItemComponent implements OnInit {

  stradivarius_product = dress;

  constructor() { }

  ngOnInit(): void {
  }

}
