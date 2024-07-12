import { Component, Input } from '@angular/core';
import { Product } from '../product-list/Product';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-item-cart-list',
  templateUrl: './item-cart-list.component.html',
  styleUrl: './item-cart-list.component.scss'
})
export class ItemCartListComponent {
  @Input() product! : Product;

    constructor(private productCartService: ProductCartService){

    }

  deleteItem(id: number){
      this.productCartService.delete(id);
  }
}
