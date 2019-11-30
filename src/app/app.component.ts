import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app-state';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  products$ = this.store.select('products');
  newProduct: string;
  id = 1;
  selectedProduct;

  constructor(private store: Store<AppState>) {}

  select(product) {
    this.selectedProduct = { ...product };
  }

  save() {
    this.store.dispatch({
      type: 'ADD',
      payload: {
        name: this.newProduct,
        id: this.id++
      }
    });
  }

  delete(product: Product) {
    this.store.dispatch({
      type: 'REMOVE',
      payload: product
    });
  }

  update() {
    this.store.dispatch({
      type: 'UPDATE',
      payload: this.selectedProduct
    });
    this.selectedProduct = null;
  }
}
