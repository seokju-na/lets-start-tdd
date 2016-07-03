var findIndex = require('lodash/findIndex');
var filter = require('lodash/filter');
var map = require('lodash/map');
var assign = require('lodash/assign');

function TodoAppToolbarCtrl($scope) {
    var vm = this;

    vm.filterMenu = [
        {
            id: 0,
            name: 'All',
            value: 'ALL'
        },
        {
            id: 1,
            name: 'Active',
            value: 'ACTIVE'
        },
        {
            id: 2,
            name: 'Complete',
            value: 'COMPLETE'
        }
    ];
    vm.selectedFilterMenuItem = vm.filterMenu[0];
    vm.onSelectFilterMenu = onSelectFilterMenu;

    vm.clearCompleteTodoItem = clearCompleteTodoItem;

    function onSelectFilterMenu(item) {
        var targetId = parseInt(item.id, 10);
        var targetIndex = findIndex(vm.filterMenu, { id: targetId });

        if (targetIndex === -1 || vm.selectedFilterMenuItem.id === targetId) {
            return;
        }

        vm.selectedFilterMenuItem = vm.filterMenu[targetIndex];
        $scope.$parent.todoItemFilterType = item.value;
    }

    function clearCompleteTodoItem() {
        var lastIndex = 0;
        var filteredTodos = filter($scope.$parent.todos, { status: 'ACTIVE' });

        $scope.$parent.todos = map(filteredTodos, function (todoItem, index) {
            lastIndex = index;
            return assign(todoItem, { id: index });
        });
        $scope.$parent.lastTodoId = lastIndex + 1;
    }
}

TodoAppToolbarCtrl.$inject = ['$scope'];

module.exports = {
    name: 'TodoAppToolbarCtrl',
    fn: TodoAppToolbarCtrl
};
