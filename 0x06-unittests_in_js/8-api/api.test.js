const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('test response status code of GET/ of the API', (done) => {
    request.get(`${API_URL}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('test response body of GET/ of the API', (done) => {
    request.get(`${API_URL}/`, (err, res, body) => {
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('test for correct path of GET request', (done) => {
    request.get(`${API_URL}/`, (err, res, body) => {
      expect(res.request.uri.path).to.be.equal('/');
      done();
    });
  });

  it('test for correct hostname of GET request', (done) => {
    request.get(`${API_URL}/`, (err, res, body) => {
      expect(res.request.uri.hostname).to.be.equal('localhost');
      done();
    });
  });

  it('test for correct HTTP methods of GET request', (done) => {
    request.get(`${API_URL}/`, (err, res, body) => {
      expect(res.request.req.method).to.be.equal('GET');
      done();
    });
  });

  it('test for correct host of GET request', (done) => {
    request.get(`${API_URL}/`, (err, res, body) => {
      expect(res.request.uri.host).to.be.equal('localhost:7865');
      done();
    });
  });

  it('test for correct protocol of GET request', (done) => {
    request.get(`${API_URL}/`, (err, res, body) => {
      expect(res.request.uri.protocol).to.be.equal('http:');
      done();
    });
  });
});
