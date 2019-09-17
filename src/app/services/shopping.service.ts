import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ShoppingService {
    private addToCartSource = new Subject<any>();
    public addToCartObservable = this.addToCartSource.asObservable();

    public addToCart(id: number) {
        this.addToCartSource.next(id);
    }
}