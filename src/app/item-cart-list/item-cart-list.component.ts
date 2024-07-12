import { Component, Input } from '@angular/core';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-item-cart-list',
  templateUrl: './item-cart-list.component.html',
  styleUrl: './item-cart-list.component.scss'
})
export class ItemCartListComponent {
  @Input() product! : Product;
}
