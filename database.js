import { createClient, groq } from "next-sanity";
import store from "./store";

const dbClient = createClient({
  projectId: process.env.NEXT_PUBLIC_DATABASE_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATABASE_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_DATABASE_API_VERSION,
  useCdn: false,
  token: process.env.NEXT_PUBLIC_DATABASE_TOKEN
});

export const get_by_pk = async (pk) => {
  try {
    return await dbClient.fetch(`*[_id == ${pk}]`);
  } catch (error) {
    console.log("Error getting categories >> ", error);
    return new Error(error);
  }
};

export const get_products = async (start = 0, end = 9, categories = []) => {
  let filterCat =
    categories.length > 0
      ? categories.reduce((acc, item, key) => {
          if (key === 0) {
            acc += `&& "${item.slug}" in category[]->slug.current`;
          } else if (key > 0) {
            acc += ` || "${item.slug}" in category[]->slug.current`;
          } else if (key + 1 === categories.length) {
            acc;
          }

          return acc;
        }, "")
      : ``;

  const Query = groq`
  {"products": *[_type == "product" ${filterCat}] {
    ...,
    category[]->
  } | order(_createdAt desc)[${start}...${end}],
  "total": count(*[_type == "product" ${filterCat}])}
  `;

  const response = await dbClient.fetch(Query);

  store.dispatch.products.setProducts(response.products);
  store.dispatch.products.storeTotalProducts(response.total);

  return;
};

export const alert_and_news = async () => {
  const Query = groq`
  *[_type == "alert"] {
    ...,
  } | order(_updatedAt desc)
  `;

  return dbClient.listen(Query, {}).subscribe((update) => {
    const items = update.result;

    store.dispatch.general.setNotifications(items);

    return;
  });
};

export default dbClient;
