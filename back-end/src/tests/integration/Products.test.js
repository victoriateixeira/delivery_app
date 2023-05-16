const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../api/app');
const { allProducts, singleProduct } = require('./mocks/Products.mock');
const { Product } = require('../../database/models');

chai.use(chaiHttp);
const { expect } = chai;

describe('Testa a API da página de produtos', function () {
  afterEach(sinon.restore);
  describe('Testa a rota GET /customer/products', function () {
    it('deve retornar todos os produtos no db ', async function () {
  sinon.stub(Product, 'findAll').resolves(allProducts);
  const products = await chai.request(app).get('/customer/products');
  
  expect(products.body).to.deep.equal(allProducts);
  expect(products).to.have.status(200);
    });
  });
  describe('Testa a rota GET /customer/products/:id', function () {
    it('deve retornar o produto buscado de acordo com ID ', async function () {
      sinon.stub(Product, 'findAll').resolves(singleProduct);
  const product = await chai.request(app).get('/customer/products/2');
  
  expect(product.body).to.deep.equal(singleProduct);
  expect(product).to.have.status(200);
    });
    it('deve retornar o erro notFound quando o id é inválido ', async function () {
      sinon.stub(Product, 'findAll').resolves([]);
  const product = await chai.request(app).get('/customer/products/1000');
  
  expect(product.body).to.deep.equal({
    message: 'Product Not Found',
  });
  expect(product).to.have.status(404);
    });
  });
});
