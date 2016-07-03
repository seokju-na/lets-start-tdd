var findIndex = require('lodash/findIndex');

function TodoAppToolbarCtrl($scope) {
    var vm = this;

    vm.filterMenu = [
        {
            id: 0,
            name: 'All',
            value: 'ALL'
        },
        {
            id: 1,
            name: 'Active',
            value: 'ACTIVE'
        },
        {
            id: 2,
            name: 'Complete',
            value: 'COMPLETE'
        }
    ];
    vm.selectedFilterMenuItem = vm.filterMenu[0];
    vm.onSelectFilterMenu = onSelectFilterMenu;

    function onSelectFilterMenu(item) {
        var targetId = parseInt(item.id, 10);
        var targetIndex = findIndex(vm.filterMenu, { id: targetId });

        if (targetIndex === -1 || vm.selectedFilterMenuItem.id === targetId) {
            return;
        }

        vm.selectedFilterMenuItem = vm.filterMenu[targetIndex];
        $scope.$parent.todoItemFilterType = item.value;
    }
}

TodoAppToolbarCtrl.$inject = ['$scope'];

module.exports = {
    name: 'TodoAppToolbarCtrl',
    fn: TodoAppToolbarCtrl
};
