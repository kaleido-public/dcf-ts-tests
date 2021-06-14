import { Model, RelatedCollectionManager, RelatedObjectManager } from "django-client-framework-typescript";
import { Brand } from './Brand';

export class Product extends Model {
    id: number = 0;
    barcode: string | null = null;
    brand_id: number | null = null;
    get brand() {
        return new RelatedObjectManager(Brand, this, "brand");
    }
}