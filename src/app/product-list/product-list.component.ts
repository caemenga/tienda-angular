import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit{
  products: Product[] =[];
  visibleProducts : Product[] = [];
  currentIndex = 0;
  itemsPerPage = 4;
  constructor (private productCartService: ProductCartService, private productDataService:ProductDataService){

  }
  ngOnInit(): void {
    this.productDataService.getAll().subscribe(products => this.products = products);
    this.updateVisibleProducts();
    console.log("activo ngOnInit en productListComponent")
  }

  public updateVisibleProducts(){
    this.visibleProducts = this.products.slice(this.currentIndex, this.currentIndex+this.itemsPerPage)
  }

  prev():void{
    if(this.currentIndex > 0){
      this.currentIndex -= this.itemsPerPage;
      this.updateVisibleProducts();
    }
  }

  next():void{
    if((this.currentIndex + this.itemsPerPage) < this.products.length){
      this.currentIndex+= this.itemsPerPage;
      this.updateVisibleProducts();
    }
  }
  

  
}
