import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import Users from '../database/models/UserModel';

import { userAdminToken } from './moks'

chai.use(chaiHttp);

const { expect } = chai;

describe('Verifica  o endpoint /login no back-end de maneira que ele permita o acesso com dados válidos no front-end', () => {
  describe('Quando a requisução é feita com sucesso', () => {
   
    before(() =>
      sinon.stub(Users, 'findOne').resolves(userAdminToken as Users)
    );
    
    after(() => sinon.restore);

    it('Verifica se é possível fazer login', async () => {
      const httpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'maria@email.com', password: 'secret_admin' });
      expect(httpResponse.status).to.equal(200);
    });
   
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
        .send({ email: 'maria@email.com', password: '' });
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
        .send({ email: 'maria@email.com', password: '123' });
      expect(httpResponse.status).to.equal(401);
      expect(httpResponse.body).to.deep.equal({
        message: 'Incorrect email or password',
      });
    });

  });

});
