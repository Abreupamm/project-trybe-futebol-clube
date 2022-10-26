import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Verifica  o endpoint /login no back-end de maneira que ele permita o acesso com dados válidos no front-end', () => {
  it('Verifica se é possível fazer login', async () => {
    const httpResponse = await chai.request(app)
    .post('/login')
    .send({email: 'admin@admin.com', password: 'secret_admin'});
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.deep.equal({TOKEN: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'})
  });
  it('Verifica que não é possível fazer login sem informar o email',async () => {
    const httpResponse = await chai.request(app)
    .post('/login')
    .send({email: '', password: 'secret_admin'});
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.deep.equal({"message": "All fields must be filled"})
  });
  it('verifica que não é possível fazer login sem informar a senha', async () => {
    const httpResponse = await chai.request(app)
    .post('/login')
    .send({email: 'admin@admin.com', password: ''});
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.deep.equal({"message": "All fields must be filled"})
  });
  it('Verifica que não é possível fazer login com um email inválido',async () => {
    const httpResponse = await chai.request(app)
    .post('/login')
    .send({email: '@test@.com', password: 'secret_admin'});
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.deep.equal({"message": "Incorrect email or password"})
  });
  it('verifica que não é possível fazer login com uma senha inválida', async () => {
    const httpResponse = await chai.request(app)
    .post('/login')
    .send({email: 'admin@admin.com', password: '12345'});
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.deep.equal({"message": "Incorrect email or password"})
  });
});
