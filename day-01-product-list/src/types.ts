export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  category: string;
  imageUrl: string;
  rating: number;
  inStock: boolean;
  categoryId: string;
};

export type Products = Product[];

export type CartItemType = {
  imageUrl: string;
  name: string;
  price: number;
  productId: string | number;
};

export type SortType = 'default' | 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc'