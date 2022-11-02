// import * as sinon from 'sinon';
// import * as chai from 'chai';
// // @ts-ignore
// import chaiHttp = require('chai-http');

// import { app } from '../app';

// import Teams from '../database/models/TeamsModel';
// import { teams, teamById } from './moks'

// chai.use(chaiHttp);

// const { expect } = chai;

// describe('Verifica  o endpoint /teams no back-end de maneira que ele permita o acesso com dados válidos no front-end', () => {
//   describe('Quando a requisução é feita com sucesso', () => {
   
//     before(() => sinon.stub(Teams, 'findAll').resolves(teams as Teams[]));
//     after(() => sinon.restore);

//     it('Verifica se é possível buscar todos as times', async () => {
//       const httpResponse = await chai.request(app).get('/teams');
//       expect(httpResponse.status).to.equal(200);
//       expect(httpResponse.body).to.deep.equal(teams);
//     });

//     before(() => sinon.stub(Teams, 'findOne').resolves(teamById as Teams));
//     after(() => sinon.restore);
//     it('Verifica se é possível buscar apenas um time', async () => {
//       const httpResponse = await chai.request(app).get('/teams/1');
//       expect(httpResponse.status).to.equal(200);
//       expect(httpResponse.body).to.deep.equal(teamById);
//     });
//   });
// });
