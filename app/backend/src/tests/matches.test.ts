import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Matches from '../database/models/MatchesModel';
import { newMatches, createMatches } from './moks';


chai.use(chaiHttp);

const { expect } = chai;

describe('Verifica  o endpoint /matches no back-end de maneira que ele permita o acesso com dados válidos no front-end', () => {
  describe('Quando a requisução é feita com sucesso', () => {
   
    before(() => sinon.stub(Matches, 'create').resolves());
    after(() => sinon.restore);

    it('Verifica se é possível criar uma nova partida', async () => {
      const httpResponse = await chai.request(app).post('/matches').send(createMatches);
      expect(httpResponse.status).to.equal(200);
      expect(httpResponse.body).to.deep.equal(newMatches);
    });
  });
});
