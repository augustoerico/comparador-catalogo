import * as fs from 'fs';
import * as csv from 'csv-parser';

import { Product, ProductsBySku } from './entities/product.entity';


export function readStoreProducts(filePath: string): Promise<ProductsBySku> {
    return new Promise((resolve, reject) => {
      const productsBySku: { [k: string]: object } = {};

      fs.createReadStream(filePath)
        .pipe(csv({ headers: false, skipLines: 1 }))
        .on('data', (data: any) => {
          const line = (data['0'] as string).split(';');
          const sku = line[16];
          const price = Number(line[9]);
          if (sku != '') {
            productsBySku[sku] = { sku, price } as Product;
          }
        })
        .on('end', () => resolve(productsBySku as ProductsBySku))
        .on('error', (error: Error) => reject(error));
    });
  }