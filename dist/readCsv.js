"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readCsv = void 0;
const fs = require("fs");
const csv = require("csv-parser");
function readCsv(filePath) {
    return new Promise((resolve, reject) => {
        const productsBySku = {};
        fs.createReadStream(filePath)
            .pipe(csv({ headers: false, skipLines: 1 }))
            .on('data', (data) => {
            const line = data['0'].split(';');
            const sku = line[16];
            const price = Number(line[9]);
            const url = line[0];
            if (sku != '') {
                productsBySku[sku] = { sku, price, url };
            }
        })
            .on('end', () => resolve(productsBySku))
            .on('error', (error) => reject(error));
    });
}
exports.readCsv = readCsv;
