import { ProductsBySku, Product } from "./entities/product.entity";

export function compare(
    storeProductsBySku: ProductsBySku,
    catalogProductsBySku: ProductsBySku
) {
    const newProducts: string[] = [];
    const exitProducts: string[] = [];
    const priceChangeProducts: string[] = [];

    Object.keys(catalogProductsBySku).forEach(i => {
        if (storeProductsBySku[i] == undefined) newProducts.push(i);
        else if (storeProductsBySku[i].price < catalogProductsBySku[i].price) priceChangeProducts.push(i);
    });

    Object.keys(storeProductsBySku).forEach(i => {
        if (catalogProductsBySku[i] == undefined) exitProducts.push(i);
    });

    return { newProducts, exitProducts, priceChangeProducts };
}