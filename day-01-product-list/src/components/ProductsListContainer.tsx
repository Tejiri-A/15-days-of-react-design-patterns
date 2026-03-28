import { useEffect, useState, type ChangeEvent } from "react";
import ProductsListPresenter from "./ProductsListPresenter";
import type { CartItemType, Products, SortType } from "../types";
import axios from "axios";

function ProductsListContainer() {
  const [data, setData] = useState<Products>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [filterBy, setFilterBy] = useState<string[]>([]);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [sortBy, setSortBy] = useState<SortType>("default");

  console.log(filterBy);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("/products", {
        baseURL: import.meta.env.VITE_API_BASE_URL,
      });
      setData(res.data);
      setIsLoading(false);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Could not get products due to an error",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddProduct = (item: CartItemType) => {
    const isProductInCart = cartItems.find(
      (cartItem) => cartItem.productId === item.productId,
    );
    if (isProductInCart) return;
    setCartItems((prev) => [...prev, item]);
  };

  const handleRemoveProduct = (productId: number | string) => {
    setCartItems((prev) => prev.filter((item) => item.productId !== productId));
  };

  const handleSortProducts = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as SortType);
  };

  const handleFilter = (id: string) => {
    setFilterBy((prev) => {
      if (prev.includes(id)) {
        return [...prev].filter((filterId) => filterId !== id);
      }
      return [...prev, id];
    });
  };

  const filteredProducts = filterBy.length
    ? data.filter((product) => filterBy.includes(product.categoryId))
    : data;

  const sortedProducts = (() => {
    switch (sortBy) {
      case "name-asc":
        return [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return [...filteredProducts].sort((a, b) => b.name.localeCompare(a.name));
      case "price-asc":
        return [...filteredProducts].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...filteredProducts].sort((a, b) => b.price - a.price);
      default:
        return filteredProducts;
    }
  })();

  return (
    <ProductsListPresenter
      products={data} // used for category extraction in SortFilterControls
      filteredProducts={sortedProducts}
      cartItems={cartItems}
      isLoading={isLoading}
      error={error}
      onFilter={handleFilter}
      onAddProduct={handleAddProduct}
      filterBy={filterBy}
      sortBy={sortBy}
      onRemoveProduct={handleRemoveProduct}
      onSort={handleSortProducts}
    />
  );
}

export default ProductsListContainer;
