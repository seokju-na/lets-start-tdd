describe('todo_list.controller SPEC', function () {
    var $controller;
    var $scope;
    var $rootScope;

    var TodoListCtrl;

    beforeEach(angular.mock.module('app'));

    beforeEach(function () {
        inject(function (_$controller_, _$rootScope_) {
            $controller = _$controller_;
            $rootScope = _$rootScope_;
        });
    });

    it('해야할 일들과 끝낸 일들을 보기 위한 목록이 존재한다.', function () {

    });

    it('새로 만드는 TODO Item의 Text가 없는 경우', function () {

    });

    it("해야한 일을 끝낸 경우, TODO Item의 상태를 'DONE'으로 변경시킨다.", function () {

    });
});
