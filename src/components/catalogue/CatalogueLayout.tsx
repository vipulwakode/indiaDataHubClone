import { useState } from "react";
import Sidebar from "./Sidebar";
import ProductListing from "./ProductListing";
import initial_data from "../../data/response1.json";
import initial_data2 from "../../data/response2.json";
import type { CatalogueData } from "../../types/catalogueData";

const CatalogueLayout = () => {
  const [data, setData] = useState<CatalogueData>(
    initial_data as CatalogueData
  );
  const categories = data.categories;
  const products = data.frequent;

  const handleCategoryChange = (type: "india" | "global") => {
    if (type === "india") setData(initial_data as CatalogueData);
    if (type === "global") setData(initial_data2 as CatalogueData);
  };

  return (
    <div className="flex min-h-[calc(100vh-64px)] p-6">
      <Sidebar
        categories={categories}
        onCategorySelect={handleCategoryChange}
      />
      <ProductListing products={products} />
    </div>
  );
};

export default CatalogueLayout;
