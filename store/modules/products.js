import { action } from "easy-peasy";

export default {
  list: [],
  total: 0,
  setProducts: action((state, payload) => {
    state.list = payload;
  }),
  storeTotalProducts: action((state, payload) => {
    state.total = payload;
  }),
};
