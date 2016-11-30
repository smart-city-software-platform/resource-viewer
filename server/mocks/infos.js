/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var infosRouter = express.Router();

  infosRouter.get('/', function(req, res) {
    res.send({
      'infos': [
      {
        "uuid": "ae9cf502-5ed2-47d4-914c-c1caec1c41c4",
        "capabilities":{
          "location":[{
            "value":"[\"-12\", \"-58\"]",
            "date":"2016-11-25T16:48:56.000Z"
          }]
        }
      }]
    });
  });

  infosRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  infosRouter.post('/:id', function(req, res) {
    res.send({
      'resources': [{
        "uuid": "ae9cf502-5ed2-47d4-914c-c1caec1c41c4",
        "capabilities":{
          "location":[{
            "value":"[\"-12\", \"-58\"]",
            "date":"2016-11-25T16:48:56.000Z"
          }]
        }
      }]
    });
  });

  infosRouter.put('/:id', function(req, res) {
    res.send({
      'infos': {
        id: req.params.id
      }
    });
  });

  infosRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/infos', require('body-parser').json());
  app.use('/api/infos', infosRouter);
};
