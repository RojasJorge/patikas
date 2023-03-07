import { createStore, persist } from "easy-peasy";
import products from "./modules/products";
import categories from "./modules/categories";
import general from "./modules/general";

export default createStore({
  categories,
  products,
  general,
});
