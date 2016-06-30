var isFunction = require('lodash/isFunction');
var bulk = require('bulk-require');
var serviceModule = angular.module('app.services', []);
var services = bulk(__dirname, ['./**/!(*index|*.spec).js']);

function declare(serviceMap) {
    Object.keys(serviceMap).forEach(function (key) {
        var item = serviceMap[key];

        if (!item) {
            return;
        }

        if (item.fn && isFunction(item.fn)) {
            serviceModule.service(item.name, item.fn);
        } else {
            declare(item);
        }
    });
}

declare(services);

module.expors = serviceModule;
