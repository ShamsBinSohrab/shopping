export class Product {
    public id: number;
    public name: string;
    public price: number;

    constructor(id:number, name:string, price: number) { 
      this.id = id;
      this.name = name;
      this.price = price;
    }

    public showPrice() : string {
        return "$ " + this.price;
      }
    
    public showName() : string {
      return this.name;
    }
}