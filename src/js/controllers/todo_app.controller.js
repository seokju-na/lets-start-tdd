function TodoAppCtrl($scope) {
    $scope.todos = [];
    $scope.lastTodoId = 0;
    $scope.todoItemFilterType = 'ALL';
}

TodoAppCtrl.$inject = ['$scope'];

module.exports = {
    name: 'TodoAppCtrl',
    fn: TodoAppCtrl
};
