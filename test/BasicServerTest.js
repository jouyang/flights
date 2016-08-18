import 'babel-polyfill';
import {expect} from 'chai';
import makeServer from '../src/server';
import request from "supertest-as-promised";

describe('Basic server test', function() {
  this.timeout(1000);
  var server;
  beforeEach(async () => {
    server = await makeServer(true /* silent */);
  });

  afterEach(function (done) {
    server.close(done);
  });

  it('Server healthy', async () => {
    await request(server).get('/')
      .expect(200);
  });

  it('Has favicon', async () => {
    await request(server).get('/favicon.ico')
      .expect(200);
  });

  it('main.js is loadable', async () => {
    await request(server).get('/js/main.js')
      .expect(200);
  });

  it('main.css is loadable', async () => {
    await request(server).get('/css/main.css')
      .expect(200);
  });
});
