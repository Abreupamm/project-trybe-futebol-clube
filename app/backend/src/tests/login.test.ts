import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

// import { Model } from 'sequelize/types';
import Users from '../database/models/UserModel';

chai.use(chaiHttp);

const { expect } = chai;

describe('Verifica  o endpoint /login no back-end de maneira que ele permita o acesso com dados válidos no front-end', () => {
  describe('Quando a requisução é feita com sucesso', () => {
    const userAdminToken = {
      id: 1,
      username: 'Maria',
      role: 'admin',
      email: 'maria@email.com',
      password: '123456',
    };
    before(() =>
      sinon.stub(Users, 'findOne').resolves(userAdminToken as Users)
    );
    after(() => sinon.restore);

    it('Verifica se é possível fazer login', async () => {
      const httpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'maria@email.com', password: '123456' });
      expect(httpResponse.status).to.equal(200);
    });
  });

  describe('Quando a requisução não é feita com sucesso', () => {
    it('Verifica que não é possível fazer login sem informar o email', async () => {
      const httpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: '', password: 'secret_admin' });
      expect(httpResponse.status).to.equal(400);
      expect(httpResponse.body).to.deep.equal({
        message: 'All fields must be filled',
      });
    });

    it('verifica que não é possível fazer login sem informar a senha', async () => {
      const httpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'admin@admin.com', password: '' });
      expect(httpResponse.status).to.equal(400);
      expect(httpResponse.body).to.deep.equal({
        message: 'All fields must be filled',
      });
    });

    it('Verifica que não é possível fazer login com um email inválido', async () => {
      const httpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: '@test@.com', password: 'secret_admin' });
      expect(httpResponse.status).to.equal(401);
      expect(httpResponse.body).to.deep.equal({
        message: 'Incorrect email or password',
      });
    });

    it('verifica que não é possível fazer login com uma senha inválida', async () => {
      const httpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'admin@admin.com', password: '12345' });
      expect(httpResponse.status).to.equal(401);
      expect(httpResponse.body).to.deep.equal({
        message: 'Incorrect email or password',
      });
    });

  });

});
