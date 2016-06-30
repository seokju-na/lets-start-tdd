var findIndex = require('lodash/findIndex');

function TodoAppItemListCtrl($scope) {
    var vm = this;

    vm.completeTodoItem = completeTodoItem;

    function completeTodoItem(todoItem) {
        var id = todoItem.id;
        var status = todoItem.status;

        var targetIndex = -1;

        if (status === 'COMPLETE') return;

        targetIndex = findIndex($scope.$parent.todos, { id: parseInt(id, 10) });

        if (targetIndex !== -1) {
            $scope.$parent.todos[targetIndex].status = 'COMPLETE';
        }
    }
}

TodoAppItemListCtrl.$inject = ['$scope'];

module.exports = {
    name: 'TodoAppItemListCtrl',
    fn: TodoAppItemListCtrl
};
