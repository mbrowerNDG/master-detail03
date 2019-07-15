import { Component } from '@angular/core';
import { Product } from './data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'master-detail03';

  public selectedProduct: Product;
  childProductSelected(product: Product){
    this.selectedProduct = product;
    console.log('parent sees click', this.selectedProduct);
  }

}
