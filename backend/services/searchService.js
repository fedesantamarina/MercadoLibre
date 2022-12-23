const axios = require("axios");

const searchService = {
  search: (query) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getItem: (id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://api.mercadolibre.com/items/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getItemDescription: (id) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://api.mercadolibre.com/items/${id}/description`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

module.exports = searchService;
