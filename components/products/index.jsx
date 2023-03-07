import imageUrlBuilder from "@sanity/image-url";
import dbClient, { get_products } from "../../database";
import { useStoreState } from "easy-peasy";
import { Pagination, Skeleton, Button, Input, Card, Tag, Spin } from "antd";
import { PlusOutlined, TagOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
// import AlertsAndNews from "../alerts";
const AlertsAndNews = React.lazy(() => import("../alerts"));

const builder = imageUrlBuilder(dbClient);
const { Search } = Input;
const { Meta } = Card;

const Products = () => {
  const categories = useStoreState((state) => state.categories);
  const products = useStoreState((state) => state.products);
  const totalProducts = useStoreState((state) => state.products.total);
  const [pager, setPager] = useState({ offset: 0, size: 10, current: 1 });
  const [loading, setLoading] = useState({status: false, message: ""});

  const onPagerChange = (page, pageSize) => {
    const start = page === 1 ? page - 1 : page * pageSize - pageSize;
    const end = page === 1 ? start + pageSize : start + pageSize - 1;

    setPager({ offset: start, size: end, current: page });
  };

  const filterProducts = async (id) => {
    setLoading({status: true});
    await get_products(pager.offset, pager.size, categories.search);

    setTimeout(() => {
      setLoading({status: false, message: "No hay productos para mostrar."});
    }, 500);
  };

  const urlFor = (source) => {
    return builder.image(source);
  };

  useEffect(() => {
    filterProducts();
  }, [pager, categories.search]);

  const convertToArray = () =>
    Array.from({ length: totalProducts }, (_value, index) => index);

  const onSearch = (e) => {
    console.log("onSearch -->>", e);
  };

  return (
    <>
      <AlertsAndNews />
      <div className="mb-4 d-flex justify-content-end">
        <Pagination
          defaultCurrent={1}
          current={pager.current}
          total={totalProducts}
          showSizeChanger={true}
          onChange={onPagerChange}
          disabled={loading.status}
        />
      </div>
      <div className="row mb-4">
        <div className="col">
          <Search
            placeholder="Buscar por nombre"
            size="large"
            onSearch={onSearch}
            disabled={loading.status}
            loading={loading.status}
          />
        </div>
      </div>
      {loading.status && (
        <div className="pt-2 d-flex align-items-center justify-content-center">
          <Spin size="large" />
        </div>
        // <div className="row">
        //   {convertToArray().map((item) => (
        //     <div
        //       key={item}
        //       className="col col-md-4 h-25 mb-3 p-3"
        //       style={{
        //         height: "40px",
        //         overflow: "hidden",
        //         // opacity: 0.3,
        //       }}
        //     >
        //       <Card>
        //         <Skeleton
        //           loading={loading}
        //           active={true}
        //           avatar={false}
        //           title={false}
        //           paragraph={{ rows: 4 }}
        //         />
        //       </Card>
        //     </div>
        //   ))}
        // </div>
      )}
      {(products?.list.length > 0 && loading.status === false) && (
        <section
          className={`row products align-items-start justify-content-start`}
        >
          {products.list.map((product) => (
            <article className={`col col-md-4 product mb-5`} key={product._id}>
              <Card
                style={{ width: "100%" }}
                hoverable
                bordered
                cover={
                  <img
                    width="300"
                    height="150"
                    src={
                      product?.image
                        ? urlFor(product?.image?.asset?._ref)?.url()
                        : "https://via.placeholder.com/300x150?text=Sin+imagen+para+mostrar"
                    }
                    alt=""
                  />
                }
                actions={[
                  <h4 className="p-0 m-0 mt-1">
                    Q{product?.price.toFixed(2)}
                  </h4>,
                  <Button icon={<PlusOutlined />} type="primary" ghost>
                    Agregar
                  </Button>,
                ]}
              >
                <Meta
                  title={product?.name}
                  description={product?.description}
                  style={{
                    minHeight: 100,
                  }}
                />

                {product?.category && product.category.length > 0
                  ? product?.category.map((item, key) => {
                      return (
                        <Tag key={key} className="mt-3" icon={<TagOutlined />}>
                          {item.title}
                        </Tag>
                      );
                    })
                  : null}
              </Card>
            </article>
          ))}
        </section>
      )}
      {(!products.list.length > 0 && loading === false) && <p>{loading.message}</p>}
      <div className="mb-4 d-flex justify-content-end">
        <Pagination
          defaultCurrent={1}
          current={pager.current}
          total={totalProducts}
          showSizeChanger={true}
          onChange={onPagerChange}
          disabled={loading.status}
        />
      </div>
    </>
  );
};

export default Products;
