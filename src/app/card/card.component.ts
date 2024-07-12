import { Component, Input } from '@angular/core';
import { Product } from '../product-list/Product';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input()
  product!: Product;

  constructor(private productCartService:ProductCartService){

  }
  addToCart(product: Product){
    this.productCartService.addToCart(product);
  }
}
