"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readStoreProducts = void 0;
const fs = require("fs");
const csv = require("csv-parser");
function readStoreProducts(filePath) {
    return new Promise((resolve, reject) => {
        const productsBySku = {};
        fs.createReadStream(filePath)
            .pipe(csv({ headers: false, skipLines: 1 }))
            .on('data', (data) => {
            const line = data['0'].split(';');
            const sku = line[16];
            const price = Number(line[9]);
            const isVisible = line[18] == 'SIM';
            if (sku != '' && isVisible) {
                productsBySku[sku] = { sku, price };
            }
        })
            .on('end', () => resolve(productsBySku))
            .on('error', (error) => reject(error));
    });
}
exports.readStoreProducts = readStoreProducts;
