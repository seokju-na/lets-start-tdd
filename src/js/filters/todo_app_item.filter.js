var filter = require('lodash/filter');

function TodoAppItemFilter() {
    return function (todos, filterType) {
        var filteredTodos = todos;

        switch (filterType) {
            case 'ALL':
                break;
            case 'ACTIVE':
                filteredTodos = filter(todos, { status: 'ACTIVE' });
                break;
            case 'COMPLETE':
                filteredTodos = filter(todos, { status: 'COMPLETE' });
                break;
            default:
                throw new Error('todo_app_item.filter.js: Unexpected type.');
        }

        return filteredTodos;
    };
}

module.exports = {
    name: 'TodoAppItemFilter',
    fn: TodoAppItemFilter
};
