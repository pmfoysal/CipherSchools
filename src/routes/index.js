const api = require('./api');
const root = require('express').Router();

function routes(port) {
   root.route('/').get((req, res, nex) => {
      res.status(200).send({
         status: 200,
         port,
         message: `App is running on port: ${port}`,
      });
      nex();
   });
   root.use('/api', api);
   return root;
}

module.exports = routes;
