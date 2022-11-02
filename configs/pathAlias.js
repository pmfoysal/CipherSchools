const path = require('path');
const directory = require('module-alias');

function from(location) {
   return path.resolve(__dirname, `./${location}`);
}

directory.addAliases({
   '@configs': from('configs'),
   '@models': from('../src/models'),
   '@routes': from('../src/routes'),
   '@schemas': from('../src/schemas'),
   '@utilities': from('../utilities'),
   '@services': from('../src/services'),
   '@validations': from('../validations'),
   '@databases': from('../src/databases'),
   '@controllers': from('../src/controllers'),
   '@middlewares': from('../src/middlewares'),
});

module.exports = directory;
