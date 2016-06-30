function TodoAppCtrl($scope) {
    $scope.todos = [];
    $scope.lastTodoId = 0;
}

TodoAppCtrl.$inject = ['$scope'];

module.exports = {
    name: 'TodoAppCtrl',
    fn: TodoAppCtrl
};
