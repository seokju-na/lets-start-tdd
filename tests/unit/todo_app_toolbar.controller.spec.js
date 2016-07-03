describe('todo_app_toolbar.controller SPEC', function () {
    var $controller;
    var $rootScope;
    var $scope;

    var TodoAppCtrl;
    var TodoAppToolbarCtrl;

    var todoMock;
    var clearCompletedTodosMock;

    beforeEach(function (done) {
        todoMock = readJSON('tests/unit/mock/todo.mock.json').todos;
        clearCompletedTodosMock = readJSON('tests/unit/mock/todo.mock.json').clearCompleteTodos;
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
            $scope.todoItemFilterType = 'ALL';
            $scope.$digest();
        });
    });

    it("TodoItem을 status:'ACTIVE', 'COMPLETE' 별로 분류할 수 있는 메뉴의 데이터가 존재한다.", function () {
        var filterMenuValues = ['ALL', 'ACTIVE', 'COMPLETE'];

        TodoAppToolbarCtrl = $controller('TodoAppToolbarCtrl', {
            $scope: $scope.$new()
        });

        expect(TodoAppToolbarCtrl.filterMenu).toBeDefined();

        TodoAppToolbarCtrl.filterMenu.map(function (menuItem, index) {
            expect(menuItem.value).toEqual(filterMenuValues[index]);
        });
    });

    it('똑같은 value값인 경우, 부모의 todoItemFilterType 값을 변경시키지 않는다.', function () {
        var initTodoItemFilterType = $scope.todoItemFilterType;

        TodoAppToolbarCtrl = $controller('TodoAppToolbarCtrl', {
            $scope: $scope.$new()
        });

        TodoAppToolbarCtrl.onSelectFilterMenu({
            id: 0,
            value: 'ALL'
        });

        expect($scope.todoItemFilterType).toEqual(initTodoItemFilterType);
    });

    it("filterMenu가 선택된 경우, 선택된 MenuItem을 selectedFilterMenuItem에 올바르게 저장할 수 있다.", function () {
        TodoAppToolbarCtrl = $controller('TodoAppToolbarCtrl', {
            $scope: $scope.$new()
        });

        TodoAppToolbarCtrl.onSelectFilterMenu({
            id: 1,
            value: 'ACTIVE'
        });

        expect(TodoAppToolbarCtrl.selectedFilterMenuItem.id).toEqual(1);
        expect($scope.todoItemFilterType).toEqual('ACTIVE');
    });

    it("clearCompleteTodoItem이 호출된 경우, 'COMPLETE' 상태의 TodoItem을 모두 삭제할 수 있다.", function () {
        TodoAppToolbarCtrl = $controller('TodoAppToolbarCtrl', {
            $scope: $scope.$new()
        });

        $scope.todos = todoMock;
        $scope.lastTodoId = 5;
        $scope.$digest();

        TodoAppToolbarCtrl.clearCompleteTodoItem();

        expect($scope.todos).toEqual(clearCompletedTodosMock);
        expect($scope.lastTodoId).toEqual(3);
    });
});
