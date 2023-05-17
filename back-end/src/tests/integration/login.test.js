const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');

const { expect } = chai;

chai.use(chaiHttp);

const invalidUserlogin = {
  email: 'ivalid-email@email.com',
  password: '$#zebirita#$',
};
const invalidPassword = {
  email: 'zebirita@email.com',
  password: '$#zebirita',
};
const userlogin = {
  email: 'zebirita@email.com',
  password: '$#zebirita#$',
};

describe('Verifica a rota /login', function () {
  const loginRoute = '/user/login';
  it('Retorna status 404, caso email informado não esteja cadastrado', async function () {
    const failedStatus = 404;
    
    const httpResponse = await chai
      .request(app)
      .post(loginRoute)
      .send(invalidUserlogin);

    expect(httpResponse.status).to.be.equal(failedStatus);
    expect(httpResponse.body).to.be.deep.equal({ message: 'Invalid Login' });
  });

  it('Retorna status 401, caso password esteja inválido', async function () {
    const failedStatus = 401;
    
    const response = await chai
      .request(app)
      .post(loginRoute)
      .send(invalidPassword);

    expect(response.status).to.be.equal(failedStatus);
    expect(response.body).to.be.deep.equal({ message: 'Invalid Password' });
  });

  it('Retorna status 200, caso a requisição seja feita com sucesso', async function () {
    const httpResponse = await chai
      .request(app)
      .post(loginRoute).send(userlogin);

    expect(httpResponse.status).to.be.eq(200);
  });
});