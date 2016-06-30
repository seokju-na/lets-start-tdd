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
        filter: { selector: '.c-FilterMenu__MenuItem' },
        clear: { selector: '.c-ClearCompletedTodoItem' }
    }
};
