var isFunction = require('lodash/isFunction');
var bulk = require('bulk-require');
var directivesModule = angular.module('app.directives', []);
var directives = bulk(__dirname, ['./**/!(*index|*.spec).js']);

function declare(directiveMap) {
    Object.keys(directiveMap).forEach(function (key) {
        var item = directiveMap[key];

        if (!item) {
            return;
        }

        if (item.fn && isFunction(item.fn)) {
            directivesModule.directive(item.name, item.fn);
        } else {
            declare(item);
        }
    });
}

declare(directives);

module.expors = directivesModule;
