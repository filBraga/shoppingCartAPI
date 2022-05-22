const buildURLId = (id) => `https://api.mercadolibre.com/items/${id}`;

const fetchItem = async (id) => {
  // seu código aqui
  try {
    const url = buildURLId(id);
    const fetchItemFetch = await fetch(url);
    const fetchItemJson = await fetchItemFetch.json();
    return fetchItemJson;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
    buildURLId,
  };
}
