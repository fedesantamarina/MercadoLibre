const searchService = require("../services/searchService");
const { getDecimals, getCategories, author } = require("../common/common");

const products = async (query) => {
  try {
    const result = await searchService.search(query);
    const fourItems = result.results.slice(0, 4);
    const categories = getCategories(result);
    const response = {
      author,
      categories,
      items: fourItems.map((item) => {
        return {
          id: item.id,
          title: item.title,
          price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: getDecimals(item),
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
        };
      }),
    };
    return response;
  } catch (error) {
    console.log(error);
    return {};
  }
};

module.exports = products;
