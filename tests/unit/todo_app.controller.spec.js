describe('todo_app.controller SPEC', function () {
    var $controller;
    var $rootScope;
    var $scope;

    var TodoAppCtrl;

    beforeEach(angular.mock.module('app'));

    beforeEach(function () {
        inject(function (_$controller_, _$rootScope_) {
            $controller = _$controller_;
            $rootScope = _$rootScope_;
            $scope = $rootScope.$new();

            TodoAppCtrl = $controller('TodoAppCtrl', {
                $scope: $scope
            });
        });
    });

    it("todos가 [](빈 배열)로, lastTodoItemId가 0으로 정의되어 있다.", function () {
        expect($scope.todos).toBeDefined();
        expect($scope.lastTodoId).toEqual(0);
    });
});
