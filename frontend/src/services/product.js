import urlBase from "../config";
const getProducts = async (query) => {
  const result = await fetch(`${urlBase}/api/items?q=${query}`);
  const jsonData = await result.json();
  return jsonData;
};
const getProduct = async (id) => {
  const result = await fetch(`${urlBase}/api/items/${id}`);
  const jsonData = await result.json();
  return jsonData;
};
export { getProducts, getProduct };
