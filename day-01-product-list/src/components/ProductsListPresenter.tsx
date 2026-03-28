import type { ChangeEvent } from "react";
import type { CartItemType, Products } from "../types";
import CartSummary from "./cart/CartSummary";
import SortFilterControls from "./controls/SortFilterControls";
import ProductsList from "./products/ProductsList";

type Props = {
  products: Products;
  filteredProducts: Products;
  cartItems: CartItemType[];
  error: string;
  isLoading: boolean;
  filterBy: string[];
  onFilter: (id: string) => void;
  onAddProduct: (item: CartItemType) => void;
  onRemoveProduct: (id: number | string) => void;
  onSort: (e: ChangeEvent<HTMLSelectElement>) => void,
  sortBy?: string
};

function ProductsListPresenter({
  products,
  filteredProducts,
  error,
  isLoading,
  onFilter,
  filterBy,
  sortBy,
  cartItems,
  onAddProduct,
  onRemoveProduct,
  onSort
}: Props) {
  return (
    <main className="container mx-auto px-4">
      {error && (
        <div className="alert alert-error my-4">
          <span>{error}</span>
        </div>
      )}
      <SortFilterControls
        data={products}
        onFilter={onFilter}
        filterBy={filterBy}
        isLoading={isLoading}
        onSort={onSort}
        sortBy={sortBy}
      />
      <section className="py-10 flex flex-col md:flex-row gap-8">
        <ProductsList
          products={filteredProducts}
          isLoading={isLoading}
          onAddProduct={onAddProduct}
        />
        <aside className="w-full md:w-80 shrink-0">
          <CartSummary cartItems={cartItems} onRemoveProduct={onRemoveProduct} />
        </aside>
      </section>
    </main>
  );
}

export default ProductsListPresenter;
