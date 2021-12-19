const buildURL = (computador) => `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;

const fetchProducts = async (computador) => {
  // const url = buildURL(computador);
  // const promise = fetch(url)
  //   .then((response) => response.json())
  //   .then((result) => result)
  //   .catch((error) => error);
  //   return promise;

  try {
    const url = buildURL(computador);
    const fetchProductsFetch = await fetch(url);
    const fetchProductsJson = await fetchProductsFetch.json();
    return fetchProductsJson;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
    buildURL,
  };
}
