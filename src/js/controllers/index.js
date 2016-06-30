var isFunction = require('lodash/isFunction');
var bulk = require('bulk-require');
var controllersModule = angular.module('app.controllers', []);
var controllers = bulk(__dirname, ['./**/!(*index|*.spec).js']);

function declare(controllerMap) {
    Object.keys(controllerMap).forEach(function (key) {
        var item = controllerMap[key];

        if (!item) {
            return;
        }

        if (item.fn && isFunction(item.fn)) {
            controllersModule.controller(item.name, item.fn);
        } else {
            declare(item);
        }
    });
}

declare(controllers);

module.expors = controllersModule;
