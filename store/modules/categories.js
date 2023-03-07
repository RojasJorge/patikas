import { action } from "easy-peasy";

export default {
  list: [],
  search: [],
  updateList: action((state, payload) => {
    state.list = payload;
  }),
  updateSearch: action((state, payload) => {
    state.search = payload;
  }),
};
