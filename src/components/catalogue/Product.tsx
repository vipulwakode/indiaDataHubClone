import type { ProductType } from "../../types/productType";

type ProductProps = {
  product: ProductType;
};

const Product = ({ product }: ProductProps) => {
  return (
    <div className="grid grid-cols-[3fr_2fr_1fr_1fr_1fr] items-center bg-white rounded-lg p-3 shadow-sm hover:bg-[rgb(230,237,250)]">
      <div className="flex flex-col">
        <h3 className="font-medium">{product.title}</h3>
        <div className="text-xs text-blue-600 underline mt-1">
          {product.cat}/ {product.subCat}
        </div>
      </div>

      <div>
        <p className="text-sm">Oct 2025 – Nov 2025</p>
        <p className="text-xs text-gray-500">Daily</p>
      </div>

      <div>{product.unit}</div>

      <div>{product.src}</div>

      <div className="flex justify-end gap-3">
        <button className="px-2 py-1 bg-gray-100 rounded">+</button>
        <button className="px-2 py-1 bg-gray-100 rounded">🔖</button>
        <button className="px-2 py-1 bg-gray-100 rounded">⋮</button>
      </div>
    </div>
  );
};

export default Product;
