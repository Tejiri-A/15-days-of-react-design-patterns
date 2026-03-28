import { useMemo, type ChangeEvent } from "react";
import type { Products } from "../../types";

type Props = {
  data: Products;
  onFilter: (id: string) => void;
  filterBy: string[];
  isLoading: boolean;
  onSort: (e: ChangeEvent<HTMLSelectElement>) => void;
  sortBy?: string;
};

function SortFilterControls({
  data,
  onFilter,
  filterBy,
  isLoading,
  onSort,
  sortBy,
}: Props) {
  const categories = useMemo(() => {
    const unique = new Map<string, string>();
    data.forEach(({ category, categoryId }) => {
      unique.set(categoryId, category);
    });
    return Array.from(unique.entries()).map(([categoryId, category]) => ({
      category,
      categoryId,
    }));
  }, [data]);

  return (
    <div className="pt-8 pb-2 border-b border-b-primary flex gap-3">
      <div className="flex gap-1">
        <span className="label">Filter by:</span>
        <div className="flex items-center gap-x-2">
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <>
              {categories.map((cat) => (
                <button
                  key={cat.categoryId}
                  type="button"
                  className={`btn ${filterBy.includes(cat.categoryId) ? "btn-accent" : ""}`}
                  onClick={() => onFilter(cat.categoryId)}
                >
                  {cat.category}
                </button>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="flex gap-1">
        <span className="label">Sort by:</span>
        <select
          name="sort"
          id="sort"
          className="select"
          onChange={onSort}
          value={sortBy}
        >
          <option value="default">Default</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="price-asc">Price (Lowest to highest)</option>
          <option value="price-desc">Price (Highest to lowest)</option>
        </select>
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <div className="skeleton h-10 w-20" key={index}></div>
      ))}
    </>
  );
}

export default SortFilterControls;
