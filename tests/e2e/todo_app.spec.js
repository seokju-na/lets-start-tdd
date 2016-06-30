var includes = require('lodash/includes');
var todoAppPage = require('../../src/pages/todo_app');

var url = todoAppPage.url;
var elems = todoAppPage.elements;

describe('#TodoApp', function () {
    it('사용자는 해야할 일이 기록된 Todo Item의 목록을 볼 수 있다.', function (client, done) {
        client
            .url(url)
            .waitForElementVisible(elems.list.selector, 1000)
            .assert.elementPresent(elems.list.selector)
            .end(done);
    });

    it('사용자는 해야할 일을 기록할 수 있다.', function (client, done) {
        client
            .url(url)
            .waitForElementVisible(elems.list.selector, 1000)
            .waitForElementVisible(elems.input.selector, 1000)
            .assert.elementPresent(elems.input.selector)
            .setValue(elems.input.selector, '방 청소 하기')
            .sendKeys(elems.input.selector, client.Keys.ENTER)
            .waitForElementVisible(elems.item.selector, 1000)
            .getAttribute(elems.item.selector + ':last-child', 'class', function (result) {
                var classes = result.value.split(' ');
                this.assert.equal(includes(classes, 'c-TodoItem-type--active'), true);
            })
            .getText(
                elems.item.selector + ':last-child > ' + elems.itemText.selector,
                function (result) {
                    this.assert.equal(result.value, '방 청소 하기');
                }).end(done);
    });

    it('사용자는 해야할 일을 클릭하여 그 일을 끝낼 수 있다.', function (client, done) {
        client
            .url(url)
            .waitForElementVisible(elems.list.selector, 1000)
            .waitForElementVisible(elems.item.selector, 1000)
            .setValue(elems.input.selector, '테스팅1')
            .sendKeys(elems.input.selector, client.Keys.ENTER)
            .waitForElementVisible(elems.item.selector, 1000)
            .click(elems.item.selector + ':last-child')
            .getAttribute(elems.item.selector + ':last-child', 'class', function (result) {
                var classes = result.value.split(' ');
                this.assert.equal(includes(classes, 'c-TodoItem-type--complete'), true);
            })
            .click(elems.item.selector + ':last-child')
            .getAttribute(elems.item.selector + ':last-child', 'class', function (result) {
                var classes = result.value.split(' ');
                this.assert.equal(includes(classes, 'c-TodoItem-type--complete'), true);
            });
    });
});
