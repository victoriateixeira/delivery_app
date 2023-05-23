const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../api/app');
const { orders, order, updatedSale } = require('./mocks/CustomersOrders.mock');
const { Sale } = require('../../database/models');
const { orderObject } = require('../../services/OrdersService');

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa o back-end de Orders e OrdersDetails', function () {
  describe('GET /orders/customer/:id', function () {
    it('Testa se retorna um array vazio caso o usuário não tiver pedidos', async function () {
      const getOrders = await chai.request(app).get('/orders/customer/1');
      expect(getOrders.body).to.deep.equal([]);
      expect(getOrders).to.have.status(200);
    });
    it('Testa se retorna um array de pedidos caso o usuário tenha pedidos', async function () {
      const ordersStub = sinon.stub(Sale, 'findAll').resolves(orders);
      const getOrders = await chai.request(app).get('/orders/customer/3');
      expect(getOrders.body).to.deep.equal(orders);
      expect(getOrders).to.have.status(200);
      ordersStub.restore();
    });
  });

  describe('GET /orders/seller/:id', function () {
    it('Testa se retorna um array vazio caso o vendedor não tiver pedidos', async function () {
      const getOrders = await chai.request(app).get('/orders/seller/3');
      expect(getOrders.body).to.deep.equal([]);
      expect(getOrders).to.have.status(200);
    });
    it('Testa se retorna um array de pedidos caso o vendedor tenha pedidos', async function () {
      const ordersStub = sinon.stub(Sale, 'findAll').resolves(orders);
      const getOrders = await chai.request(app).get('/orders/seller/2');
      expect(getOrders.body).to.deep.equal(orders);
      expect(getOrders).to.have.status(200);
      ordersStub.restore();
    });
  });

  describe('GET /customers/orders/details/:id', function () {
    it('Testa se retorna erro e status 404 caso o pedido não for encontrado', async function () {
      const getOrder = await chai.request(app).get('/orders/details/2');
      expect(getOrder.body).to.deep.equal('Pedido não encontrado');
      expect(getOrder).to.have.status(404);
    });
    it('Testa se retorna os detalhes do pedido caso for encontrado', async function () {
      const orderStub = sinon.stub(Sale, 'findOne').resolves(order);
      const getOrder = await chai.request(app).get('/orders/details/1');
      expect(getOrder.body).to.deep.equal(orderObject(order));
      expect(getOrder).to.have.status(200);
      orderStub.restore();
    });
  });

  describe('PUT /customers/orders/details/:id', function () {
    it('Testa se atualiza o status do pedido com sucesso', async function () {
      const bodyUpdate = { status: 'Entregue' };
      const updateOrderStub = sinon.stub(Sale, 'update').resolves([1]);
      const getOrderByIdStub = sinon.stub(Sale, 'findOne').resolves(order);
      const updateOrder = await chai.request(app)
        .put('/orders/details/1')
        .send(bodyUpdate);
      expect(updateOrder.body).to.deep.equal(updatedSale);
      expect(updateOrder).to.have.status(200);
    
      updateOrderStub.restore();
      getOrderByIdStub.restore();
    });
  });
});
