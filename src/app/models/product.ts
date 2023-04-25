export class Product {
    idProduct? : number; // Optional parameter
    name: string;
    category: string;
    location: string;
    price: number;

    // Constructor to initialize the class properties
    constructor(name:string, category:string, location:string, price:number) {
        this.name = name;
        this.category = category;
        this.location = location;
        this.price = price;
    }
}