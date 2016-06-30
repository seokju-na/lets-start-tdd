function TodoAppNavCtrl($scope, Constants) {
    var vm = this;

    vm.newTodoText = '';
    vm.createNewTodo = createNewTodo;

    function createNewTodo(newTodoText, $event) {
        if ($event.keyCode !== Constants.keyCode.ENTER) return;

        $scope.$parent.todos.push({
            id: ++$scope.$parent.lastTodoId,
            status: 'ACTIVE',
            text: newTodoText,
            date: new Date().toString()
        });

        vm.newTodoText = '';
    }
}

TodoAppNavCtrl.$inject = ['$scope', 'Constants'];

module.exports = {
    name: 'TodoAppNavCtrl',
    fn: TodoAppNavCtrl
};
