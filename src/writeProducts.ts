import * as fs from 'fs';

interface ResultProducts {
    newProducts: string[];
    exitProducts: string[];
    priceChangeProducts: string[];
}

const newProductsFilePath = './novos.csv';
const exitProductsFilePath = './saem.csv';
const priceChangeProductsFilePath = './preco.csv';

export function writeProducts(resultProducts: ResultProducts) {
    const { newProducts, exitProducts, priceChangeProducts } = resultProducts;
    
    fs.writeFileSync(newProductsFilePath, newProducts.join('\n'));
    fs.writeFileSync(exitProductsFilePath, exitProducts.join('\n'));
    fs.writeFileSync(priceChangeProductsFilePath, priceChangeProducts.join('\n'));
}