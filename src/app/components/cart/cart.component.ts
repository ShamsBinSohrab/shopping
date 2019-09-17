import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/product.model';
import { ShoppingService } from 'app/services/shopping.service';
import { ProductService } from 'app/services/product.service';
import { CartProduct } from 'app/models/cart-product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private addedProductIds: number[] = []
  public cartProducts: CartProduct[] = [];

  constructor(private shoppingService: ShoppingService, private productService: ProductService) {
      this.shoppingService.addToCartObservable.subscribe(
          (id) => this.addToCart(id)
      );
  }

  ngOnInit() {
  }

  private addToCart(id: number) {
    if (this.addedProductIds.indexOf(id) === -1) {
      let product: Product = this.productService.getProductById(id); 
      this.cartProducts.push(new CartProduct(product));
      this.addedProductIds.push(id);
    }
    else {
      this.cartProducts.forEach((cp) => {
          if (cp.product.id === id) 
            cp.addAnotherQuantity();
      });
    }
  
  }

  

}
