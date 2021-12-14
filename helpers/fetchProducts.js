const url = 'https://api.mercadolibre.com/sites/MLB/search?q=';

const fetchProducts = (computador) => fetch(`${url}${computador}`)
    .then((resonse) => resonse.json())
    .then((data) => data.results)
    .catch((error) => (error));

  //  url.then((response) => {
  //   const promiseJSON = response.json();
  //   promiseJSON.then((object) => {
  //     const itemDisplay = {
  //       sku: object.id,
  //       title: object.title,
  //       img: object.thumbnail,
  //     };
  //     createProductItemElement(itemDisplay);
  //   });
  // });

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
