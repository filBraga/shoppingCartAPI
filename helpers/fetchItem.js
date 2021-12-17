const buildURL = (id) => `https://api.mercadolibre.com/items/${id}`;

const fetchItem = async (id) => {
  // seu código aqui
  try {
    const url = buildURL(id);
    const fetchProductsFetch = await fetch(url);
    const fetchProductsJson = await fetchProductsFetch.json();
    return fetchProductsJson;
  } catch (error) {
    return error;
  }
};

// fetch products \/
// try {
//   const url = buildURL(computador);
//   const fetchProductsFetch = await fetch(url);
//   const fetchProductsJson = fetchProductsFetch.json();
//   return fetchProductsJson;
// } catch (error) {
//   return error;
// }

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
    buildURL,
  };
}
