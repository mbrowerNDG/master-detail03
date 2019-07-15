import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PRODUCTS, HEADERS, Product } from '../data';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  products = PRODUCTS;
  headers = HEADERS;
  @Output() productSelected = new EventEmitter<Product>();

  onClick(product: Product): void {
    this.productSelected.emit(product);
    console.log('from the list', product);
  }
  ngOnInit() {

  }

}
