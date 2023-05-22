const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../../api/app');
const { User } = require('../../database/models');

const { expect } = chai;

chai.use(chaiHttp);

const userRegister = {
  name: 'André Pestana Silva',
  email: 'atlas.ifpa@gmail.com',
  password: '$#atlas#$',
  role: 'customer',
};

const newUser = {
  id: 1,
  ...userRegister,
};

describe('Verifica a rota /register', function () {
  const registerRoute = '/user/register';

  beforeEach(async function () {
    sinon.restore();
  });

  it('Registra um usuário corretamente', async function () {
    sinon.stub(User, 'create').resolves(newUser);
  
    const httpResponse = await chai
      .request(app)
      .post(registerRoute).send(userRegister);

    expect(httpResponse).to.have.status(201);
    expect(httpResponse.body).to.be.deep.equal(newUser);
  });

  it('Retorna erro ao registrar usuário já existente', async function () {
    sinon.stub(User, 'findOne').resolves(userRegister);

    const httpResponse = await chai
      .request(app)
      .post(registerRoute).send(userRegister);

    expect(httpResponse).to.have.status(409);
    expect(httpResponse.body).to.be.deep.equal({
      message: 'Already registered',
    });
  });
});