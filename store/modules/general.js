import { action } from "easy-peasy";
import { filter, orderBy } from "lodash";

export default {
  isDarkMode: false,
  showCategoryForm: false,
  notifications: [],
  setIsDarkMode: action((state, payload) => {
    state.isDarkMode = payload;
  }),
  switchCategoryForm: action((state, _payload) => {
    state.showCategoryForm = !state.showCategoryForm;
  }),
  setNotifications: action((state, payload) => {
    payload = {...payload, _id: payload?._id.replace("drafts.", "")};
    let exist = filter(state.notifications, (o) => {
      // console.log("payload -->>", payload)
      
      return o._id != payload._id;
    });

    exist.push(payload);

    state.notifications = orderBy(exist, ["_updatedAt"], ["desc"]);
  }),
};
