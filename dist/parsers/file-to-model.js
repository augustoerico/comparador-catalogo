"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const product_entity_1 = require("../entities/product.entity");
const parse = (product) => {
    return new product_entity_1.Product(product['Identificador URL']);
};
exports.parse = parse;
