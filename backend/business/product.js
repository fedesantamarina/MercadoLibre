const searchService = require("../services/searchService");
const { author, getDecimals } = require("../common/common");

const product = async (id) => {
  try {
    const item = await searchService.getItem(id);
    const description = await searchService.getItemDescription(id);
    const response = {
      author,
      item: {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: getDecimals(item),
        },
        picture: item.pictures.length > 0 ? item.pictures[0].url : "",
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
      },
      description: description.plain_text,
    };
    return response;
  } catch (error) {
    console.log(error);
    return {};
  }
};

module.exports = product;
