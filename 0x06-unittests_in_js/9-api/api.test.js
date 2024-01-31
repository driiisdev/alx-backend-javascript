const request = require('request');
const { expect } = require('chai');

describe('API integration test for cart page', () => {
  const API_URL = 'http://localhost:7865/cart';

  it('test response status code of cart/ without id', (done) => {
    request.get(`${API_URL}`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('test response status code of cart/ with positive integer id', (done) => {
    const id = 25;
    request.get(`${API_URL}/${id}`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.be.equal('Payment methods for cart 25');
      done();
    });
  });

  it('test response status code of cart/ with negative id', (done) => {
    const id = -25;
    request.get(`${API_URL}/${id}`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('test response status code of cart/ with non-numeric id ', (done) => {
    const id = 'axzasd4556fds';
    request.get(`${API_URL}/${id}`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
