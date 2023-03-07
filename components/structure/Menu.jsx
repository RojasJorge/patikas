import {
  FormOutlined,
  UnorderedListOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useStoreActions, useStoreState } from "easy-peasy";

const Menu = () => {
  const switchCategoryForm = useStoreActions(
    (action) => action.general.switchCategoryForm
  );
  return (
    <div className="menu row pt-3">
      <ul className="d-flex align-items-center justify-content-end gap-3">
        <li>
          <Button
            icon={<FormOutlined />}
            onClick={switchCategoryForm}
            type="primary"
            size="small"
            ghost
          >
            Crear categoría
          </Button>
        </li>
        <li>
          <Button
            icon={<UnorderedListOutlined />}
            type="primary"
            size="small"
            ghost
          >
            Ordenes
          </Button>
        </li>
        <li>
          <Button icon={<ShoppingCartOutlined />} type="primary" size="small">
            Carrito
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
