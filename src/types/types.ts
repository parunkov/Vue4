interface Price {
  currency: string;
  value: number;
}

interface ProductValue {
  label: string;
  value_index: number;
  value: string | number;
}

interface Options {
  attribute_code?: string;
  label?: string;
  values: ProductValue[];
}

interface Attributes {
  code: string;
  value_index: number;
}

interface VariantProduct {
  id: number;
  image: string;
  sku: string;
}

interface Variant {
  attributes: Attributes[];
  product: VariantProduct;
}

interface Product {
  id: number;
  title: string;
  image: string;
  regular_price: Price;
  brand: number;
  sku: string;
  type: string;
  brandName?: string;
  configurable_options?: Options[];
  variants?: Variant[];
}

interface Brand {
  id: number;
  title: string;
  sort: string;
  code: string;
  selected?: boolean;
}

interface CartItem {
  title: string;
  image: string;
  price: number;
  brandName?: string;
  quantity: number;
}

interface Property {
  label: string;
  value: string | number;
  index: number;
  avilablity: boolean;
  selected: boolean;
}

export { Price, Product, Brand, CartItem, Options, Variant, Property, Attributes };
