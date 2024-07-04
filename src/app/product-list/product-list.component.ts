import { Component } from '@angular/core';
import { Product } from './Product';
import { ProductCartService } from '../product-cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  constructor (private productCartService: ProductCartService){

  }
  products: Product[] = [{
    id: 1,
    title: 'mochila',
    price: 123000,
    description: 'mochila para viajes',
    category: 'Bolsos y mochilas',
    image:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 240000,
    description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category: 'mens clothing',
    image:'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  }
  ];

  addToCart(product: Product){
    this.productCartService.addToCart(product);
  }
}
