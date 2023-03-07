import { useCallback, useEffect, useState } from "react";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import dbClient from "../../database";
import { Checkbox, Button } from "antd";
import { useStoreActions, useStoreState } from "easy-peasy";
import "antd/lib/checkbox/style";

const Categories = () => {
  const { push, query } = useRouter();

  const updateStoredCategories = useStoreActions(
    (actions) => actions.categories
  );

  const categories = useStoreState((state) => state.categories);

  const getCategories = useCallback(async () => {
    let Query = groq`
    *[_type == "category"]{
      _id, 
      title,
      slug
    } | order(title asc)
  `;

    updateStoredCategories.updateList(await dbClient.fetch(Query));
  }, [updateStoredCategories]);

  const queryBuilder = (e, cat) => {
    if (e.target.checked) {
      updateStoredCategories.updateSearch([
        ...categories.search,
        { slug: cat.slug.current, _id: cat._id },
      ]);
    } else {
      updateStoredCategories.updateSearch(
        categories.search.filter((item) => item._id !== cat._id)
      );
    }
  };

  useEffect(() => {
    if (categories.search.length > 0) {
      push(
        {
          query: {
            ...query,
            categorias: `${categories.search.map((item) => item.slug).join()}`,
          },
        },
        undefined,
        { shallow: true }
      );
    } else {
      push(
        {
          query: {
            ...query,
            categorias: ``,
          },
        },
        undefined,
        { shallow: true }
      );
    }
  }, [categories.search, push, query]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <>
      {categories.list.length > 0 ? (
        <>
          <h4 className="mb-0">Categorías:</h4>
          <p className="mb-1">
            <Button
              type="primary"
              size="small"
              onClick={() => updateStoredCategories.updateSearch([])}
              disabled={categories.search.length < 1}
              ghost
            >
              Remover selección
            </Button>
          </p>
          <ul className="categories d-grid gap-2">
            {categories.list.map((cat, key) => (
              <li className="d-flex align-items-center" key={key}>
                <Checkbox checked={categories.search.find((item) => item._id === cat._id)} onChange={(event) => queryBuilder(event, cat)}>
                  {cat.title}
                </Checkbox>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>No hay categorias para mostrar.</p>
      )}
    </>
  );
};

export default Categories;
