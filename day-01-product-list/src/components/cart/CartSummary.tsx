import type { CartItemType } from "../../types";
import CartItem from "./CartItem";

type props = {
  cartItems: CartItemType[];
  onRemoveProduct: (id: number | string) => void;
};

function CartSummary({ cartItems, onRemoveProduct }: props) {
  const numberOfItems = cartItems.length;
  return (
    <div className="card bg-base-100 border-base-200 border-2 shadow-sm px-2 py-4 md:px-4">
      <div className="flex items-center justify-between">
        <h1 className="card-title uppercase">Your cart</h1>
        <p className="text-primary">
          {numberOfItems > 0
            ? `${numberOfItems === 1 ? `1 item` : `${numberOfItems} items`}`
            : `0 items`}
        </p>
      </div>
      <div className="card-body">
        {/* List of items */}
        {!cartItems.length ? (
          <p>No items in cart</p>
        ) : (
          <>
            {cartItems.map(({ imageUrl, name, price, productId }) => (
              <CartItem
                imageUrl={imageUrl}
                name={name}
                price={price}
                productId={productId}
                key={productId}
                onRemoveProduct={onRemoveProduct}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default CartSummary;
