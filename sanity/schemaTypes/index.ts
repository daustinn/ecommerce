import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { productType } from './productType'
import { orderType } from './orderType'
import { saleType } from './saleType'
import { collectionType } from './collectionType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    collectionType,
    productType,
    orderType,
    saleType
  ]
}
