import type { CategoryNode } from "./categoryNode";
import type { ProductType } from "./productType";

export type CatalogueData = {
  categories: CategoryNode;
  frequent: ProductType[];
};
