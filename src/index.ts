import { compare } from "./comparator";
import { readCatalogProducts } from "./readCatalogProducts";
import { readStoreProducts } from "./readStoreProducts";
import { writeProducts } from "./writeProducts";

const filePath = 'store-11_06_2023.csv';
const inputFile = 'catalog-11_23.csv';

async function main() {
  try {
    console.log('Comparador de catálogo');
    const storeProducts = await readStoreProducts(filePath);
    const catalogProducts = await readCatalogProducts(inputFile);
    // console.log(storeProducts);
    const message = `Total in store: ${Object.keys(storeProducts).length}`;
    console.log(message);
    // console.log(catalogProducts);
    const message2 = `Total in catalog ${Object.keys(catalogProducts).length}`;
    console.log(message2);
    const result = compare(storeProducts, catalogProducts);
    console.log(result);
    writeProducts(result);
  } catch(error) {
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
