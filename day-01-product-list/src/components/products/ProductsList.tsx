import type { CartItemType, Products } from "../../types";
import ProductCard from "./ProductCard";

type Props = {
  products: Products;
  isLoading: boolean;
  onAddProduct: (item: CartItemType) => void;
};

function ProductsList({ products, isLoading,onAddProduct }: Props) {
  return (
    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddProduct={onAddProduct} />
          ))}
        </>
      )}
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <article
          key={index}
          className="card bg-base-100 shadow-sm border border-base-200 overflow-hidden"
        >
          <div className="aspect-square skeleton rounded-none" />
          <div className="card-body p-4 gap-3">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <div className="skeleton h-4 w-3/4" />
                <div className="skeleton h-4 w-10" />
              </div>
              <div className="skeleton h-3 w-1/2" />
            </div>
            <div className="flex items-center justify-between mt-auto pt-2">
              <div className="skeleton h-6 w-20" />
              <div className="skeleton h-8 w-24" />
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

export default ProductsList;
