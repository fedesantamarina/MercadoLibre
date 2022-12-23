const commons = {
  getDecimals: (item) => {
    let decimals = 0;
    if (item.price) {
      const priceString = item.price.toString();
      if (priceString.split(".").length > 1) {
        decimals = priceString.split(".")[1].length;
      }
    }
    return decimals;
  },
  getCategories: (result) => {
    let categories = [];
    try {
      if (result && result.filters && result.filters.length > 0) {
        const categoriesArray = result.filters.find(
          (filter) => filter.id === "category"
        );
        if (
          categoriesArray &&
          categoriesArray.values[0] &&
          categoriesArray.values[0].path_from_root
        ) {
          categories = categoriesArray.values[0].path_from_root.map(
            (category) => (category ? category.name : "")
          );
        }
      } else if (
        result &&
        result.available_filters &&
        result.available_filters.length > 0
      ) {
        const categoriesArray = result.available_filters.find(
          (filter) => filter.id === "category"
        );
        if (
          categoriesArray &&
          categoriesArray.values &&
          categoriesArray.values.length > 0
        ) {
          categories = [categoriesArray.values[0].name];
        }
      }
    } catch (error) {
      console.log(error);
    }
    return categories;
  },

  author: { name: "Federico", lastname: "Santamarina" },
};
module.exports = commons;
