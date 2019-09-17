import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/product.model';
import { ShoppingService } from 'app/services/shopping.service';
import { ProductService } from 'app/services/product.service';
import { CartProduct } from 'app/models/cart-product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private addedProductIds: number[] = []
  public cartProducts: CartProduct[] = [];
  public grandTotal: number = 0;

  constructor(private shoppingService: ShoppingService, private productService: ProductService, private router: Router) {
      this.shoppingService.addToCartObservable.subscribe(
          (id) => this.addToCart(id)
      );
  }

  ngOnInit() {
  }

  private addToCart(product: Product) {
    if (this.addedProductIds.indexOf(product.id) === -1) {
      this.cartProducts.push(new CartProduct(product));
      this.addedProductIds.push(product.id);
    }
    else {
      this.cartProducts.forEach((cp) => {
          if (cp.product.id === product.id) 
            cp.addAnotherQuantity();
      });
    }
    this.calculateGrantTotal();
  }

  public onRemoveFromCart = (cp: CartProduct) => {
    if (cp.quantity > 1) {
      cp.reduceOneQuantity();
    }
    else {
      this.cartProducts.splice(this.cartProducts.indexOf(cp), 1);
      this.addedProductIds.splice(this.addedProductIds.indexOf(cp.product.id), 1);
    }
    this.calculateGrantTotal();
  }
  
  public calculateGrantTotal = () => {
    this.grandTotal = 0;
    this.cartProducts.forEach((cp) => {
      this.grandTotal += cp.total;
    });
  }

  public onCheckout(cp: CartProduct) {
    
  }

  

}
