import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'app/models/product.model';
import { ShoppingService } from 'app/services/shopping.service';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];

  constructor(private shoppingService: ShoppingService, private productService: ProductService) { 
    this.products = this.productService.getAllProducts();
  }

  ngOnInit() {
  }

  public onClickAddToCart(id: number) {
    this.shoppingService.addToCart(id);
  }

}
