import { Injectable } from '@angular/core';
import { Product } from './product-list/Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  
  private _cartList: Product[] = [];

  
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  constructor() { }
  
  
  addToCart(product: Product) {
    let item = this._cartList.find((v1) => v1.id == product.id)
    if(!item){
      this._cartList.push({...product}); 
    }

    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }
}


