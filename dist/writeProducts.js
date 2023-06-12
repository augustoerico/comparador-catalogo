"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeProducts = void 0;
const fs = require("fs");
const newProductsFilePath = './novos.csv';
const exitProductsFilePath = './saem.csv';
const priceChangeProductsFilePath = './preco.csv';
function writeProducts(resultProducts) {
    const { newProducts, exitProducts, priceChangeProducts } = resultProducts;
    fs.writeFileSync(newProductsFilePath, newProducts.join('\n'));
    fs.writeFileSync(exitProductsFilePath, exitProducts.join('\n'));
    fs.writeFileSync(priceChangeProductsFilePath, priceChangeProducts.join('\n'));
}
exports.writeProducts = writeProducts;
