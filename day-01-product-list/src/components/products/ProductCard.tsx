import type { CartItemType, Product } from "../../types";
import { formatCurrency } from "../../utils";

type Props = {
  product: Product;
  onAddProduct: (item: CartItemType) => void;
};

function ProductCard({ product, onAddProduct }: Props) {
  const {
    category,
    id,
    imageUrl,
    inStock,
    name,
    originalPrice,
    price,
    rating,
  } = product;

  const handleAddItemToCart = () =>
    onAddProduct({
      imageUrl: imageUrl,
      name: name,
      price: price,
      productId: id,
    });

  return (
    <article className="card bg-base-100 shadow-sm border border-base-200 overflow-hidden">
      <figure className="aspect-square relative overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {inStock === false && (
          <div className="absolute top-2 right-2 badge badge-error">
            Out of Stock
          </div>
        )}
      </figure>
      <div className="card-body p-4 gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-start justify-between gap-2">
            <h2 className="card-title text-base line-clamp-2 leading-tight flex-1">
              {name}
            </h2>
            <span className="badge badge-ghost badge-sm shrink-0">
              {category}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <div className="rating rating-xs">
              {[1, 2, 3, 4, 5].map((star) => (
                <input
                  key={star}
                  type="radio"
                  name={`rating-${id}`}
                  className="mask mask-star-2 bg-warning"
                  defaultChecked={Math.round(rating) === star}
                  disabled
                />
              ))}
            </div>
            <span className="text-xs opacity-60">({rating})</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-primary leading-none">
              {formatCurrency(price)}
            </span>
            {originalPrice > price && (
              <span className="text-xs line-through opacity-50">
                {formatCurrency(originalPrice)}
              </span>
            )}
          </div>
          <button
            type="button"
            disabled={!inStock}
            className="btn btn-primary btn-sm px-4"
            onClick={handleAddItemToCart}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
