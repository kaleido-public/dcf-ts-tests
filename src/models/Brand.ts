import { Model, RelatedCollectionManager } from "django-client-framework-typescript";
import { Product } from "./Product";

export class Brand extends Model {
    id: number = 0;
    name: string = "";
    get products() {
        return new RelatedCollectionManager(Product, this, "products");
    }
}