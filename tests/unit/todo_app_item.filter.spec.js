describe('todo_app_item.filter SPEC', function () {
    var $filter;

    var todoMock;
    var activeTodos;
    var completeTodos;

    beforeEach(function (done) {
        todoMock = readJSON('tests/unit/mock/todo.mock.json').todos;
        activeTodos = readJSON('tests/unit/mock/todo.mock.json').activeTodos;
        completeTodos = readJSON('tests/unit/mock/todo.mock.json').completeTodos;

        done();
    });

    beforeEach(angular.mock.module('app'));

    beforeEach(function () {
        inject(function (_$filter_) {
            $filter = _$filter_;
        });
    });

    it("Filter Type이 'ALL'인 경우, 모든 TodoItem을 반환한다.", function () {
        var filteredTodos = $filter('TodoAppItemFilter')(todoMock, 'ALL');
        expect(filteredTodos).toEqual(todoMock);
    });

    it("Filter Type이 'ACTIVE'인 경우, status가 'ACTIVE'인 TodoItem들을 반환한다.", function () {
        var filteredTodos = $filter('TodoAppItemFilter')(todoMock, 'ACTIVE');
        expect(filteredTodos).toEqual(activeTodos);
    });

    it("Filter Type이 'COMPLETE'인 경우, status가 'COMPLETE'인 TodoItem들을 반환한다.", function () {
        var filteredTodos = $filter('TodoAppItemFilter')(todoMock, 'COMPLETE');
        expect(filteredTodos).toEqual(completeTodos);
    });

    it("Filter Type이 'ALL', 'ACTIVE', 'COMPLETE' 중에 없는 경우, Error를 발생시킨다.", function () {
        var filterFunc = $filter('TodoAppItemFilter');
        expect(filterFunc.bind(todoMock, null)).toThrow(new Error('todo_app_item.filter.js: Unexpected type.'));
        expect(filterFunc.bind(todoMock, undefined)).toThrow(new Error('todo_app_item.filter.js: Unexpected type.'));
        expect(filterFunc.bind(todoMock, 'COMPLETED')).toThrow(new Error('todo_app_item.filter.js: Unexpected type.'));
    });
});
