"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readCatalogProducts = void 0;
const fs = require("fs");
const csv = require("csv-parser");
function readCatalogProducts(filePath) {
    return new Promise((resolve, reject) => {
        const productsBySku = {};
        fs.createReadStream(filePath)
            .pipe(csv({ headers: false }))
            .on('data', (data) => {
            const sku = data['1'];
            const price = Number(data['2']);
            if (sku != '') {
                productsBySku[sku] = { sku, price };
            }
        })
            .on('end', () => resolve(productsBySku))
            .on('error', (error) => reject(error));
    });
}
exports.readCatalogProducts = readCatalogProducts;
