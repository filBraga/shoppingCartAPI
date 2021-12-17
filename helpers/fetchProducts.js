const buildURL = (computador) => `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;

const fetchProducts = async (computador) => {
  try {
    const url = buildURL(computador);
    const fetchProductsFetch = await fetch(url);
    const fetchProductsJson = fetchProductsFetch.json();
    return fetchProductsJson;
  } catch (error) {
    return error;
  }
  // .then((resonse) => resonse.json())
  // .then((data) => data.results)
  // .catch((error) => (error));
};

// const fetchProductsJson = (computador) => fetch(buildURL(computador))
// .then((resonse) => resonse.json())
// .catch((error) => (error));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
    buildURL,
    // fetchProductsJson,
  };
}
