import { useState, useEffect, useRef } from "react";
import Product from "./Product";
import type { ProductType } from "../../types/productType";

type ProductListingProps = {
  products: ProductType[];
};

const PAGE_SIZE = 10;

const ProductListing = ({ products }: ProductListingProps) => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const countRef = useRef(visibleCount);
  const productsRef = useRef(products);

  useEffect(() => {
    countRef.current = visibleCount;
  }, [visibleCount]);

  useEffect(() => {
    productsRef.current = products;
    console.log("products changed, resetting visible count");
    setVisibleCount(PAGE_SIZE);
  }, [products]);

  const loadMore = () => {
    console.log(visibleCount, products.length, "load more called");

    setVisibleCount((prev) => {
      return prev + PAGE_SIZE;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const count = countRef.current;
        const total = productsRef.current.length;
        if (entry.isIntersecting && count < total) {
          loadMore();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  console.log(visibleCount, "visible count");

  const visibleProducts = products.slice(0, visibleCount);
  console.log("visible products", visibleProducts);

  return (
    <div className="flex-1 px-6">
      <div className="p-3 grid grid-cols-[3fr_2fr_1fr_1fr_1fr] rounded-1 font-semibold text-gray-600 bg-[rgb(230,237,250)] border-b pb-3 ">
        <div>New Releases</div>
        <div>Range</div>
        <div>Unit</div>
        <div>Source</div>
        <div className="text-center">Actions</div>
      </div>

      <div className="mt-2 space-y-2">
        {visibleProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      <div ref={observerRef} className="h-4"></div>
    </div>
  );
};

export default ProductListing;
