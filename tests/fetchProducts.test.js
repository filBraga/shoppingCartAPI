require('../mocks/fetchSimulator');
const { fetchProducts, /*fetchProductsJson*/ } = require('../helpers/fetchProducts');
const { buildURL } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {

  // https://stackoverflow.com/questions/50818474/how-to-properly-test-if-the-type-of-the-result-is-a-javascript-function-in-jes
  it('Teste se fetchProducts é uma função;', ()=> {
    const fetchProducts = () => () => {};
    const result = fetchProducts();
    expect(typeof result).toBe('function')
  })

  it('Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
    const resultado = await fetchProducts('computador');
    // https://jestjs.io/docs/expect#expectanything
    expect(resultado).toEqual(expect.anything())
  })

  it('Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    const resultado = await buildURL('computador');
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(resultado).toEqual(url)
    // console.log(resultado);
  })

  it('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    const resultado = await fetchProducts('computador');
    expect(resultado).toEqual(computadorSearch)
  })

  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url. Dica: Lembre-se de usar o new Error("mensagem esperada aqui") para comparar com o objeto retornado da API.', async () => {
    const failRequest = await fetchProducts();
    expect(failRequest).toEqual(new Error('You must provide an url'));
  })

  // fail('Teste vazio'); COMENTEI ESSA LINHA - Filipe Braga
});
