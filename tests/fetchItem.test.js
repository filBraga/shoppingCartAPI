require('../mocks/fetchSimulator');
const { fetchItem , buildURLId} = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {

  it('Teste se fetchItem é uma função;', ()=> {
    const actual = typeof fetchItem;
    const expected = 'function'
    expect(actual).toBe(expected);
  })

  it('Execute a função fetchItem com o argumento "MLB1615760527" e teste se fetch foi chamada', async () => {
    fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled();
  })

  it('Teste se, ao chamar a função fetchItem com o argumento "MLB1615760527", a função fetch utiliza o endpoint ""https://api.mercadolibre.com/items/MLB1615760527"', async () => {
    const resultado = await buildURLId('MLB1615760527');
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(resultado).toEqual(url)
    // console.log(resultado);
  })

  it('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
    const resultado = await fetchItem('MLB1615760527');
    expect(resultado).toEqual(item)
  })

  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    const failRequest = await fetchItem();
    expect(failRequest).toEqual(new Error('You must provide an url'));
  })
});
