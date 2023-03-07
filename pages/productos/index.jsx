import { get_products } from "../../database";
import MainLayout from "../../layout/default";
import Products from "../../components/products";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    get_products();
  }, []);
  return (
    <MainLayout title="Productos">
      <Products />
    </MainLayout>
  );
}
