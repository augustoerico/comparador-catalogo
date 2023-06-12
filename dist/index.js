"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comparator_1 = require("./comparator");
const readCatalogProducts_1 = require("./readCatalogProducts");
const readStoreProducts_1 = require("./readStoreProducts");
const writeProducts_1 = require("./writeProducts");
const filePath = 'store-11_06_2023.csv';
const inputFile = 'catalog-11_23.csv';
async function main() {
    try {
        console.log('Comparador de catálogo');
        const storeProducts = await (0, readStoreProducts_1.readStoreProducts)(filePath);
        const catalogProducts = await (0, readCatalogProducts_1.readCatalogProducts)(inputFile);
        // console.log(storeProducts);
        const message = `Total in store: ${Object.keys(storeProducts).length}`;
        console.log(message);
        // console.log(catalogProducts);
        const message2 = `Total in catalog ${Object.keys(catalogProducts).length}`;
        console.log(message2);
        const result = (0, comparator_1.compare)(storeProducts, catalogProducts);
        console.log(result);
        (0, writeProducts_1.writeProducts)(result);
    }
    catch (error) {
        console.error('Error reading CSV file:', error);
    }
}
main();
// readCsv(filePath)
//   .then((data: ProductsBySku) => {
//     console.log(data);
//     const message = `Total products: ${Object.keys(data).length}`;
//     console.log(message);
//     // Process the data as needed
//   })
//   .catch((error: Error) => {
//   });
