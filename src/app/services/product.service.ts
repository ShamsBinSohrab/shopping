import { Injectable } from "@angular/core";
import { Product } from "app/models/product.model";

@Injectable()
export class ProductService {
    private init: boolean = false;
    private products: Product[] = [];

    constructor() {
        if (!this.init) {
            this.init = true;
            this.products.push(new Product(1, "iPhone", 999));
            this.products.push(new Product(2, "Macbook", 1999));
            this.products.push(new Product(3, "Galaxy S10", 700));
            this.products.push(new Product(4, "One Plus 7 Pro", 600));
            this.products.push(new Product(5, "One Plus 7", 500));
        }
    }

    public getAllProducts() {
        return this.products;
    }

    public getProductById(id: number) : Product {
        let product = null;
        this.products.forEach((item) => {
            if (item.id === id) {
                product = item;
            }
        });
        return product;
    }


}