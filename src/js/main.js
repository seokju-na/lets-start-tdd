var constants = require('./utils/constants');

require('./controllers');
require('./services');
require('./directives');
require('./filters');

angular
    .module('app', [
        'app.services',
        'app.filters',
        'app.controllers',
        'app.directives'
    ])
    .constant('Constants', constants);
