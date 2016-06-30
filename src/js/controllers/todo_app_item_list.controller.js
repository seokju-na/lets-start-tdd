var findIndex = require('lodash/findIndex');

function TodoAppItemListCtrl($scope) {
    var vm = this;

    vm.completeTodoItem = completeTodoItem;

    function completeTodoItem(todoItem) {
        var id = todoItem.id;
        var status = todoItem.status;

        if (status === 'COMPLETE') return;
    }
}

TodoAppItemListCtrl.$inject = ['$scope'];

module.exports = {
    name: 'TodoAppItemListCtrl',
    fn: TodoAppItemListCtrl
};
