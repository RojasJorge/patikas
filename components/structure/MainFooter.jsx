import React from "react";
import { Drawer } from "antd";
import { useStoreState, useStoreActions } from "easy-peasy";
import CategoryForm from "../categories/create";

const MainFooter = () => {
  const showCategoryForm = useStoreState(
    (state) => state.general.showCategoryForm
  );

  const switchCategoryForm = useStoreActions(
    (action) => action.general.switchCategoryForm
  );

  return (
    <>
      <footer id="footer"></footer>
      <Drawer
        open={showCategoryForm}
        onClose={switchCategoryForm}
        title="Crear categoría"
      >
        <CategoryForm />
      </Drawer>
    </>
  );
};

export default MainFooter;
