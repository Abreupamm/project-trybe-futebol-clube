import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matches from '../database/models/MatchesModel';
import { 
  newMatches,
  createMatches,
  matchesAll,
  matchesInProgressTrue,
  matchesInProgressFalse,  
} from './moks';
import { IMatches } from '../interfaces/IMatches';


chai.use(chaiHttp);

const { expect } = chai;

describe('Verifica  o endpoint /matches no back-end de maneira que ele permita o acesso com dados válidos no front-end', () => {
  describe('Quando a requisução é feita com sucesso', () => {

    after(() => sinon.restore);
    it('Verifica se é possível listar todas as partidas', async () => {
      sinon.stub(Matches, 'findAll').resolves(matchesAll as IMatches[]);
      const httpResponse = await chai.request(app).get('/matches');
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.deep.equal(matchesAll);
    });
  })

  // describe('Quando a requisução é feita com sucesso', () => {

  //   before(() => sinon.stub(Matches, 'findOne').resolves(matchesAll[0] as IMatches));
  //   after(() => sinon.restore);

  //   it('Verifica se é possível listar uma partida ao buscar pelo id', async () => {
  //     const httpResponse = await chai.request(app).get('/matches/1');
  //     expect(httpResponse.status).to.equal(200);
  //     expect(httpResponse.body).to.deep.equal(matchesAll[1]);
  //   });
  // })

  // describe('Quando a requisução é feita com sucesso', () => {
  //   before(() => sinon.stub(Matches, 'findAll').resolves(matchesInProgressTrue as IMatches[]));
  //   after(() => sinon.restore);
  //   it('Verifica se é possível listar as partidas em progresso', async () => {
  //     const httpResponse = await chai.request(app).get('/matches?inProgress=true');
  //     expect(httpResponse.status).to.equal(200);
  //     expect(httpResponse.body).to.deep.equal(matchesInProgressTrue);
  //   });
  // })

  // describe('Quando a requisução é feita com sucesso', () => {
  //   before(() => sinon.stub(Matches, 'findAll').resolves(matchesInProgressFalse as IMatches[]));
  //   after(() => sinon.restore);
  //   it('Verifica se é possível listar as partidas funalizadas', async () => {
  //     const httpResponse = await chai.request(app).get('matches?inProgress=false');
  //     expect(httpResponse.status).to.equal(200);
  //     expect(httpResponse.body).to.deep.equal(matchesInProgressFalse);
  //   });
  // })

  // describe('Quando a requisução é feita com sucesso', () => {
  //   before(() => sinon.stub(Matches, 'create').resolves());
  //   after(() => sinon.restore);
  //   it('Verifica se é possível criar uma nova partida', async () => {
  //     const httpResponse = await chai.request(app).post('/matches').send(createMatches);
  //     expect(httpResponse.status).to.equal(200);
  //     expect(httpResponse.body).to.deep.equal(newMatches);
  //   });
  // });

});
