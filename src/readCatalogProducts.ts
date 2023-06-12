import * as fs from 'fs';
import * as csv from 'csv-parser';
import { Product, ProductsBySku } from './entities/product.entity';


export function readCatalogProducts(filePath: string): Promise<ProductsBySku> {
    return new Promise((resolve, reject) => {
      const productsBySku: { [k: string]: object } = {};

      fs.createReadStream(filePath)
        .pipe(csv({ headers: false }))
        .on('data', (data: any) => {
          const sku = data['1'];
          const price = Number(data['2']);
          if (sku != '') {
            productsBySku[sku] = { sku, price } as Product;
          }
        })
        .on('end', () => resolve(productsBySku as ProductsBySku))
        .on('error', (error: Error) => reject(error));
    });
  }