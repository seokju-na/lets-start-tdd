var devConfig = require('../../dev.config.json');

module.exports = {
    url: devConfig.devServer.url,
    elements: {
        todoApp: { selector: '.c-TodoApp' },
        nav: { selector: '.c-TodoApp__Navigator' },
        list: { selector: '.c-TodoList' },
        toolbar: { selector: '.c-TodoApp__Toolbar' },

        input: { selector: '.c-TodoApp__InputTodo' },

        item: { selector: '.c-TodoItem' },
        itemText: { selector: '.c-TodoItem__Text' },

        filterMenu: { selector: '.c-FilterMenu' },
        filters: {
            all: { selector: '.c-FilterMenu__MenuItem:first-child' },
            active: { selector: '.c-FilterMenu__MenuItem:nth-child(2)' },
            complete: { selector: '.c-FilterMenu__MenuItem:last-child' }
        },
        clear: { selector: '.c-ClearCompletedTodoItem' }
    }
};
