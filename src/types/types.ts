interface Price {
  currency: string;
  value: number;
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
  brandName: string;
  value: number;
}

// interface State {
//   cart: CartItem[];
// }

export { Price, Product, Brand, CartItem };
