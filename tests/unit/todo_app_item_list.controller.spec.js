describe('todo_app_item_list.controller SPEC', function () {
    var $controller;
    var $scope;
    var $rootScope;

    var TodoAppCtrl;
    var TodoAppItemListCtrl;

    var todoMock;

    beforeEach(function (done) {
        todoMock = readJSON('tests/unit/mock/todo.mock.json');
        done();
    });

    beforeEach(angular.mock.module('app'));

    beforeEach(function () {
        inject(function (_$controller_, _$rootScope_) {
            $controller = _$controller_;
            $rootScope = _$rootScope_;

            $scope = $rootScope.$new();

            TodoAppCtrl = $controller('TodoAppCtrl', {
                $scope: $scope
            });

            $scope.todos = todoMock;
            $scope.lastTodoId = 5;
            $scope.$digest();
        });
    });

    it("해야한 일을 끝낸 경우, TODO Item의 상태를 'ACTIVE'에서 'COMPLETE'로 변경시킨다.", function () {
        TodoAppItemListCtrl = $controller('TodoAppItemListCtrl', {
            $scope: $scope.$new()
        });

        TodoAppItemListCtrl.completeTodoItem(todoMock[0]);

        expect($scope.todos[0].status).toEqual('COMPLETE');
    });

    it("'COMPLETE' 상태의 TODO Item을 클릭한 경우, 아무 변경사항이 없다.", function () {
        TodoAppItemListCtrl = $controller('TodoAppItemListCtrl', {
            $scope: $scope.$new()
        });

        TodoAppItemListCtrl.completeTodoItem(todoMock[1]);

        expect($scope.todos[1].status).toEqual('COMPLETE');
    });
});
