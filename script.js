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
  productElementAll.forEach(({ id, title, thumbnail }) => {
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

function cartItemClickListener(event) {
  // coloque seu código aqui
}

function createCartItemElement(sku, name, salePrice) {
  const li = document.createElement('li');
  const itemList = document.querySelector('.cart__items');

  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  itemList.appendChild(li);
  return li;
}

function addItemClickListner() {
  const btns = document.querySelectorAll('.item__add');
  btns.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const skuId = await getSkuFromProductItem(btn.parentNode);
      const { id: sku1, title: name2, base_price: salePrice3 } = await fetchItem(skuId);
      console.log(sku1, name2, salePrice3);
      createCartItemElement(sku1, name2, salePrice3);
    });
 });
}

window.onload = async () => {
  await addProductSection();
  await addItemClickListner();
};