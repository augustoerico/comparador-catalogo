export interface Product {
    sku: string;
    price: number;
}

export interface ProductsBySku {
    [sku: string]: Product;
}