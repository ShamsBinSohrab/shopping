import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Product } from "app/models/product.model";

@Injectable()
export class ShoppingService {
    private addToCartSource = new Subject<any>();
    public addToCartObservable = this.addToCartSource.asObservable();

    public addToCart(product: Product) {
        this.addToCartSource.next(product);
    }
}