/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch'
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: 'sanity.imagePalette'
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions'
  height?: number
  width?: number
  aspectRatio?: number
}

export type SanityFileAsset = {
  _id: string
  _type: 'sanity.fileAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type Geopoint = {
  _type: 'geopoint'
  lat?: number
  lng?: number
  alt?: number
}

export type Sale = {
  _id: string
  _type: 'sale'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  description?: string
  discountAmount?: number
  couponCode?: string
  validFrom?: string
  validUtil?: string
  isActive?: boolean
}

export type Order = {
  _id: string
  _type: 'order'
  _createdAt: string
  _updatedAt: string
  _rev: string
  orderNumber?: string
  stripeCheckoutSessionId?: string
  stripeCustomerId?: string
  clerkUserId?: string
  customerName?: string
  customerEmail?: string
  stripePaymentIntentId?: string
  products?: Array<{
    product?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'product'
    }
    quantity?: number
    _key: string
  }>
  totalPrice?: number
  currency?: string
  ammountDiscount?: number
  status?: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled'
  orderDate?: string
}

export type Product = {
  _id: string
  _type: 'product'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  images?: Array<{
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
    _key: string
  }>
  description?: Array<
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: 'span'
          _key: string
        }>
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
        listItem?: 'bullet'
        markDefs?: Array<{
          href?: string
          _type: 'link'
          _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
      }
    | {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        alt?: string
        _type: 'image'
        _key: string
      }
  >
  price?: number
  categories?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'category'
  }>
  collections?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'collection'
  }>
  stock?: number
}

export type Collection = {
  _id: string
  _type: 'collection'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  backgroundColour?: SimplerColor
  description?: Array<
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: 'span'
          _key: string
        }>
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
        listItem?: 'bullet'
        markDefs?: Array<{
          href?: string
          _type: 'link'
          _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
      }
    | {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        alt?: string
        _type: 'image'
        _key: string
      }
  >
  coverPhoto?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
}

export type Category = {
  _id: string
  _type: 'category'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  description?: string
}

export type Slug = {
  _type: 'slug'
  current?: string
  source?: string
}

export type BlockContent = Array<
  | {
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }>
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
      listItem?: 'bullet'
      markDefs?: Array<{
        href?: string
        _type: 'link'
        _key: string
      }>
      level?: number
      _type: 'block'
      _key: string
    }
  | {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      alt?: string
      _type: 'image'
      _key: string
    }
>

export type SanityImageCrop = {
  _type: 'sanity.imageCrop'
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot'
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: 'sanity.imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData'
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata'
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type HighlightColor = {
  _type: 'highlightColor'
  label?: string
  value?: string
}

export type TextColor = {
  _type: 'textColor'
  label?: string
  value?: string
}

export type SimplerColor = {
  _type: 'simplerColor'
  label?: string
  value?: string
}

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Sale
  | Order
  | Product
  | Collection
  | Category
  | Slug
  | BlockContent
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | HighlightColor
  | TextColor
  | SimplerColor
export declare const internalGroqTypeReferenceTo: unique symbol
// Source: ./sanity/lib/categories/getAllCategories.ts
// Variable: ALL_CATEGORIES_QUERY
// Query: *[_type == "category"] | order(name asc)
export type ALL_CATEGORIES_QUERYResult = Array<{
  _id: string
  _type: 'category'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  description?: string
}>

// Source: ./sanity/lib/collections/getAllCollections.ts
// Variable: ALL_COLLECTIONS_QUERY
// Query: *[_type == "collection"] | order(_createdAt desc)
export type ALL_COLLECTIONS_QUERYResult = Array<{
  _id: string
  _type: 'collection'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  backgroundColour?: SimplerColor
  description?: Array<
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: 'span'
          _key: string
        }>
        style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'normal'
        listItem?: 'bullet'
        markDefs?: Array<{
          href?: string
          _type: 'link'
          _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
      }
    | {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        alt?: string
        _type: 'image'
        _key: string
      }
  >
  coverPhoto?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
}>

// Source: ./sanity/lib/collections/getFourCollections.ts
// Variable: FOUR_COLLECTIONS_QUERY
// Query: *[_type == "collection"] | order(_editedAt asc)[0..3]
export type FOUR_COLLECTIONS_QUERYResult = Array<{
  _id: string
  _type: 'collection'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  backgroundColour?: SimplerColor
  description?: Array<
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: 'span'
          _key: string
        }>
        style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'normal'
        listItem?: 'bullet'
        markDefs?: Array<{
          href?: string
          _type: 'link'
          _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
      }
    | {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        alt?: string
        _type: 'image'
        _key: string
      }
  >
  coverPhoto?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
}>

// Source: ./sanity/lib/products/getAllProducts.ts
// Variable: ALL_PRODUCTS_QUERY
// Query: *[_type == "product"] | order(name asc)
export type ALL_PRODUCTS_QUERYResult = Array<{
  _id: string
  _type: 'product'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  images?: Array<{
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
    _key: string
  }>
  description?: Array<
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: 'span'
          _key: string
        }>
        style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'normal'
        listItem?: 'bullet'
        markDefs?: Array<{
          href?: string
          _type: 'link'
          _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
      }
    | {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        alt?: string
        _type: 'image'
        _key: string
      }
  >
  price?: number
  categories?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'category'
  }>
  collections?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'collection'
  }>
  stock?: number
}>

// Source: ./sanity/lib/products/getAllProductsByColletion.ts
// Variable: ALL_PRODUCTS_BY_COLLECTION_SLUG
// Query: *[_type == "product" && references(*[_type == "collection" && slug.current == $collectionSlug]._id)]{      _id,      name,      slug,      images,      price,      description,      categories[]->{        slug,        title,      }    } | order(name asc)
export type ALL_PRODUCTS_BY_COLLECTION_SLUGResult = Array<{
  _id: string
  name: string | null
  slug: Slug | null
  images: Array<{
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
    _key: string
  }> | null
  price: number | null
  description: Array<
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: 'span'
          _key: string
        }>
        style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'normal'
        listItem?: 'bullet'
        markDefs?: Array<{
          href?: string
          _type: 'link'
          _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
      }
    | {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        alt?: string
        _type: 'image'
        _key: string
      }
  > | null
  categories: Array<{
    slug: Slug | null
    title: string | null
  }> | null
}>

// Source: ./sanity/lib/products/getTenProducts.ts
// Variable: TEN_PRODUCTS_QUERY
// Query: *[_type == "product"] | order(_createdAt desc)[0..9]
export type TEN_PRODUCTS_QUERYResult = Array<{
  _id: string
  _type: 'product'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  images?: Array<{
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
    _key: string
  }>
  description?: Array<
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: 'span'
          _key: string
        }>
        style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'normal'
        listItem?: 'bullet'
        markDefs?: Array<{
          href?: string
          _type: 'link'
          _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
      }
    | {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        alt?: string
        _type: 'image'
        _key: string
      }
  >
  price?: number
  categories?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'category'
  }>
  collections?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'collection'
  }>
  stock?: number
}>

// Query TypeMap
import '@sanity/client'
declare module '@sanity/client' {
  interface SanityQueries {
    '\n            *[_type == "category"] | order(name asc)\n        ': ALL_CATEGORIES_QUERYResult
    '\n            *[_type == "collection"] | order(_createdAt desc)\n        ': ALL_COLLECTIONS_QUERYResult
    '\n              *[_type == "collection"] | order(_editedAt asc)[0..3]\n          ': FOUR_COLLECTIONS_QUERYResult
    '\n            *[_type == "product"] | order(name asc)\n        ': ALL_PRODUCTS_QUERYResult
    '\n    *[_type == "product" && references(*[_type == "collection" && slug.current == $collectionSlug]._id)]{\n      _id,\n      name,\n      slug,\n      images,\n      price,\n      description,\n      categories[]->{\n        slug,\n        title,\n      }\n    } | order(name asc)': ALL_PRODUCTS_BY_COLLECTION_SLUGResult
    '\n              *[_type == "product"] | order(_createdAt desc)[0..9]\n          ': TEN_PRODUCTS_QUERYResult
  }
}
