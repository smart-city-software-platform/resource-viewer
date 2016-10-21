/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var resourcesRouter = express.Router();

  resourcesRouter.get('/', function(req, res) {
    res.send({
      'resources': [{
        "id": 3,
        "uri": "example.com",
        "created_at": "2016-06-25T04:33:51.621Z",
        "updated_at": "2016-06-25T04:33:51.621Z",
        "lat": -23.559616,
        "lon": -46.731386,
        "status": "stopped",
        "collect_interval": 5,
        "description": "I am a dummy sensor",
        "uuid": "db19668b-febc-48f0-bb88-ee16f4d9fd71",
        "city": "São Paulo",
        "neighborhood": "Butantã",
        "state": "São Paulo",
        "postal_code": "05508-000",
        "country": "Brazil",
        "capabilities": ["temperature"]
      }, {
        "id": 4,
        "uri": "example.com",
        "created_at": "2016-06-25T04:33:51.621Z",
        "updated_at": "2016-06-25T04:33:51.621Z",
        "lat": -23.559616,
        "lon": -46.731386,
        "status": "stopped",
        "collect_interval": 5,
        "description": "I am a dummy sensor",
        "uuid": "db19668b-febc-48f0-bb88-ee16f4d9fd71",
        "city": "São Paulo",
        "neighborhood": "Butantã",
        "state": "São Paulo",
        "postal_code": "05508-000",
        "country": "Brazil"
      }, {
        "id": 5,
        "uri": "example.com",
        "created_at": "2016-06-25T04:33:51.621Z",
        "updated_at": "2016-06-25T04:33:51.621Z",
        "lat": -23.559616,
        "lon": -46.731386,
        "status": "stopped",
        "collect_interval": 5,
        "description": "I am a dummy sensor",
        "uuid": "db19668b-febc-48f0-bb88-ee16f4d9fd71",
        "city": "São Paulo",
        "neighborhood": "Butantã",
        "state": "São Paulo",
        "postal_code": "05508-000",
        "country": "Brazil"
      }, {
        "id": 6,
        "uri": "example.com",
        "created_at": "2016-06-25T04:33:51.621Z",
        "updated_at": "2016-06-25T04:33:51.621Z",
        "lat": -23.559616,
        "lon": -46.731386,
        "status": "stopped",
        "collect_interval": 5,
        "description": "I am a dummy sensor",
        "uuid": "db19668b-febc-48f0-bb88-ee16f4d9fd71",
        "city": "São Paulo",
        "neighborhood": "Butantã",
        "state": "São Paulo",
        "postal_code": "05508-000",
        "country": "Brazil"
      }]
    });
  });

  resourcesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  resourcesRouter.get('/:id', function(req, res) {
    res.send({
      'resources': {
        id: req.params.id
      }
    });
  });

  resourcesRouter.put('/:id', function(req, res) {
    res.send({
      'resources': {
        id: req.params.id
      }
    });
  });

  resourcesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/resources', require('body-parser').json());
  app.use('/api/resources', resourcesRouter);
};
