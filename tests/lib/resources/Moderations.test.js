const sinon = require('sinon');
const chai = require('chai');
const axios = require('axios');
const { getModeration, createModeration } = require('../../fixtures/moderations');

sinon.assert.expose(chai.assert, { prefix: '' });
const assert = chai.assert;

const PROJECT_KEY = 'project-key';

const moderations = require('../../../lib/resources/Moderations');

const options = {
  token: PROJECT_KEY,
  data: 'https://assets-cdn.github.com/images/modules/open_graph/github-mark.png',
  customId: '1',
  query: 1,
};

describe('resources/Moderations', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });


  afterEach(() => {
    sandbox.restore();
  });

  it('should get a moderation', async () => {
    sandbox.stub(axios, 'request').resolves(Promise.resolve(getModeration));
    const result = await moderations.get({ token, query } = options);
    const parsed = JSON.parse(result);
    assert.isObject(parsed.data.attributes);
    assert.equal(parsed.meta.code, 200);
  });

  it('should create a moderation', async () => {
    sandbox.stub(axios, 'request').resolves(Promise.resolve(createModeration));
    const result = await moderations.create({ token, data, customId } = options);
    const parsed = JSON.parse(result);
    assert.isObject(parsed.data.attributes);
    assert.equal(parsed.meta.code, 201);
  });
});
