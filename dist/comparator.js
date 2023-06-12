"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = void 0;
function compare(storeProductsBySku, catalogProductsBySku) {
    const newProducts = [];
    const exitProducts = [];
    const priceChangeProducts = [];
    Object.keys(catalogProductsBySku).forEach(i => {
        if (storeProductsBySku[i] == undefined)
            newProducts.push(i);
        else if (storeProductsBySku[i].price < catalogProductsBySku[i].price)
            priceChangeProducts.push(i);
    });
    Object.keys(storeProductsBySku).forEach(i => {
        if (catalogProductsBySku[i] == undefined)
            exitProducts.push(i);
    });
    return { newProducts, exitProducts, priceChangeProducts };
}
exports.compare = compare;
