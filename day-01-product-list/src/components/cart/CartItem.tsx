import type { CartItemType } from "../../types";
import { formatCurrency } from "../../utils";

function CartItem({
  imageUrl,
  name,
  price,
  productId,
  onRemoveProduct,
}: CartItemType & { onRemoveProduct: (id: number | string) => void }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="card card-side bg-base-200 border-base-300 border-2 shadow-sm gap-2 items-center">
        <figure className="rounded-md overflow-hidden size-12">
          <img src={imageUrl} alt="" width={48} height={48} />
        </figure>
        <div className="">
          <h2 className="font-bold text-md leading-[1.2]">{name}</h2>
          <p className="text-xs leading-normal text-primary">
            {formatCurrency(price)}
          </p>
        </div>
        <button
          type="button"
          className="btn btn-secondary ml-auto"
          onClick={() => onRemoveProduct(productId)}
        >
          Del
        </button>
      </div>
    </div>
  );
}

export default CartItem;
