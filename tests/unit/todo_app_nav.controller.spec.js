describe('todo_app_nav.controller SPEC', function () {
    var $controller;
    var $scope;
    var $rootScope;
    var Constants;

    var TodoAppCtrl;
    var TodoAppNavCtrl;

    beforeEach(angular.mock.module('app'));

    beforeEach(function () {
        inject(function (_$controller_, _$rootScope_, _Constants_) {
            $controller = _$controller_;
            $rootScope = _$rootScope_;
            Constants = _Constants_;

            $scope = $rootScope.$new();

            TodoAppCtrl = $controller('TodoAppCtrl', {
                $scope: $scope
            });

            $scope.todos = [];
            $scope.lastTodoId = 0;
            $scope.$digest();
        });
    });

    it("해야할 일을 적고 ENTER를 누른 경우, 'ACTIVE'상태의 새로운 TodoItem을 생성할 수 있다.", function () {
        TodoAppNavCtrl = $controller('TodoAppNavCtrl', {
            $scope: $scope.$new()
        });

        TodoAppNavCtrl.createNewTodo('Hello World!', {
            keyCode: Constants.keyCode.ENTER
        });

        expect($scope.todos[0].id).toEqual(0);
        expect($scope.todos[0].status).toEqual('ACTIVE');
        expect($scope.todos[0].text).toEqual('Hello World!');
        expect(TodoAppNavCtrl.newTodoText).toEqual('');
    });

    it("누른 키가 'ENTER'가 아닌 경우, 새로운 TodoItem을 생성하지 않는다.", function () {
        TodoAppNavCtrl = $controller('TodoAppNavCtrl', {
            $scope: $scope.$new()
        });

        TodoAppNavCtrl.createNewTodo('Good Parts.', {
            keyCode: Constants.keyCode.ENTER - 1
        });

        expect($scope.todos.length).toEqual(0);
    });
});
