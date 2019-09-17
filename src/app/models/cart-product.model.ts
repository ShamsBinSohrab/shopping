import { Product } from "./product.model";

export class CartProduct {
    public product: Product;
    public quantity: number;
    public total: number;

    constructor(product: Product) {
        this.product = product;
        this.quantity = 1;
        this.total = product.price;
    }

    public addAnotherQuantity() : void {
        this.quantity += 1;
        this.calculateTotal();
    }

    private calculateTotal() : void {
        this.total = this.quantity * this.product.price;
    }

    public showTotal() : string {
        return "$ " + this.total;
    }
}