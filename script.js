function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

const addProductSection = async () => {
  const productElementAll = await fetchProducts('computador');
  const productArr = productElementAll.results;
  productArr.forEach(({ id, title, thumbnail }) => {
    const productElement = createProductItemElement({
      sku: id,
      name: title,
      image: thumbnail,
    });
    const sectionItens = document.querySelector('.items');
    sectionItens.appendChild(productElement);
  });
};

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener() {
  // coloque seu código aqui
  // https://pretagteam.com/question/removing-li-items-with-button-onclick
  // Re-reading the question I think you also want to add that to the dynamic LIs
  this.parentNode.removeChild(this);
}

function createCartItemElement(sku, name, salePrice) {
  const li = document.createElement('li');
  // Criei uma const para selecionar a classe cart items
  const itemList = document.querySelector('.cart__items');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  // Criei um append child na classe cart items selecionada
  itemList.appendChild(li);
  return li;
}

function addItemClickListner() {
  const btns = document.querySelectorAll('.item__add');
  btns.forEach((btn) => {
    btn.addEventListener('click', async () => {
      // Peguei o parent do button e executei a func abaixo
      const skuId = await getSkuFromProductItem(btn.parentNode);
      // O skuId recebe o id do produto e executei na func fetchItem para pegar o obj
      const { id: sku1, title: name2, price: salePrice3 } = await fetchItem(skuId);
      // console.log(sku1, name2, salePrice3);
      // executei a func abaixo para criar o li na lista
      createCartItemElement(sku1, name2, salePrice3);
    });
 });
}

function apagarCarrinho() {
  const esvaziarCarrinhoBtn = document.querySelector('.empty-cart');
  esvaziarCarrinhoBtn.addEventListener('click', () => {
    document.querySelector('.cart__items').innerHTML = '';
  });
}

window.onload = async () => {
  await addProductSection();
  await addItemClickListner();
  await apagarCarrinho();
};