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
                this.assert.equal(true, includes(classes, 'c-TodoItem-type--active'));
            })
            .getText(
                elems.item.selector + ':last-child > ' + elems.itemText.selector,
                function (result) {
                    this.assert.equal('방 청소 하기', result.value);
                }).end(done);
    });

    it('사용자는 해야할 일을 클릭하여 그 일을 끝낼 수 있다.', function (client, done) {
        client
            .url(url)
            .waitForElementVisible(elems.list.selector, 1000)
            .setValue(elems.input.selector, '테스팅1')
            .sendKeys(elems.input.selector, client.Keys.ENTER)
            .waitForElementVisible(elems.item.selector, 1000)
            .click(elems.item.selector + ':last-child')
            .getAttribute(elems.item.selector + ':last-child', 'class', function (result) {
                var classes = result.value.split(' ');
                this.assert.equal(true, includes(classes, 'c-TodoItem-type--complete'));
            })
            .click(elems.item.selector + ':last-child')
            .getAttribute(elems.item.selector + ':last-child', 'class', function (result) {
                var classes = result.value.split(' ');
                this.assert.equal(true, includes(classes, 'c-TodoItem-type--complete'));
            })
            .end(done);
    });

    it('사용자는 종류에 맞게 해당 일들을 분류할 수 있다.', function (client, done) {
        client
            .url(url)
            .waitForElementVisible(elems.list.selector, 1000)
            .setValue(elems.input.selector, 'Testing1')
            .sendKeys(elems.input.selector, client.Keys.ENTER)
            .waitForElementVisible(elems.item.selector, 1000)
            .setValue(elems.input.selector, 'Testing2')
            .sendKeys(elems.input.selector, client.Keys.ENTER)
            .waitForElementVisible(elems.item.selector, 1000)
            .setValue(elems.input.selector, 'Testing3')
            .sendKeys(elems.input.selector, client.Keys.ENTER)
            .waitForElementVisible(elems.item.selector, 1000)
            .click(elems.item.selector + ':nth-child(1)')
            .click(elems.filters.active.selector)
            .getAttribute(elems.filters.active.selector, 'class', function (result) {
                var classes = result.value.split(' ');
                this.assert.equal(true, includes(classes, 'c-FilterMenu__MenuItem-is--selected'));
            })
            .waitForElementVisible(elems.item.selector, 1000)
            .elements('css selector', elems.item.selector, function (results) {
                var that = this;
                var matchedItemText = ['Testing2', 'Testing3'];

                this.assert.equal(2, results.value.length);

                results.value.map(function (val, index) {
                    that.getText(
                        elems.item.selector + ':nth-child(' + (index + 1) + ') ' + elems.itemText.selector,
                        function (text) {
                            that.assert.equal(matchedItemText[index], text.value);
                        }
                    );
                });
            })
            .click(elems.filters.all.selector)
            .getAttribute(elems.filters.all.selector, 'class', function (result) {
                var classes = result.value.split(' ');
                this.assert.equal(includes(classes, 'c-FilterMenu__MenuItem-is--selected'), true);
            })
            .elements('css selector', elems.item.selector, function (results) {
                var that = this;
                var matchedItemText = ['Testing1', 'Testing2', 'Testing3'];

                this.assert.equal(3, results.value.length);

                results.value.map(function (val, index) {
                    that.getText(
                        elems.item.selector + ':nth-child(' + (index + 1) + ') ' + elems.itemText.selector,
                        function (text) {
                            that.assert.equal(matchedItemText[index], text.value);
                        }
                    );
                });
            })
            .click(elems.filters.complete.selector)
            .getAttribute(elems.filters.complete.selector, 'class', function (result) {
                var classes = result.value.split(' ');
                this.assert.equal(includes(classes, 'c-FilterMenu__MenuItem-is--selected'), true);
            })
            .getAttribute(elems.filters.active.selector, 'class', function (result) {
                var classes = result.value.split(' ');
                this.assert.equal(includes(classes, 'c-FilterMenu__MenuItem-is--selected'), false);
            })
            .elements('css selector', elems.item.selector, function (results) {
                var that = this;
                var matchedItemText = ['Testing1'];

                this.assert.equal(1, results.value.length);

                results.value.map(function (val, index) {
                    that.getText(
                        elems.item.selector + ':nth-child(' + (index + 1) + ') ' + elems.itemText.selector,
                        function (text) {
                            that.assert.equal(matchedItemText[index], text.value);
                        }
                    );
                });
            })
            .end(done);
    });

    it('사용자는 끝낸 일들을 모두 목록에서 지울 수 있다.', function (client, done) {
        client
            .url(url)
            .waitForElementVisible(elems.list.selector, 1000)
            .setValue(elems.input.selector, 'Testing1')
            .sendKeys(elems.input.selector, client.Keys.ENTER)
            .waitForElementVisible(elems.item.selector, 1000)
            .setValue(elems.input.selector, 'Testing2')
            .sendKeys(elems.input.selector, client.Keys.ENTER)
            .waitForElementVisible(elems.item.selector, 1000)
            .setValue(elems.input.selector, 'Testing3')
            .sendKeys(elems.input.selector, client.Keys.ENTER)
            .waitForElementVisible(elems.item.selector, 1000)
            .setValue(elems.input.selector, 'Testing4')
            .sendKeys(elems.input.selector, client.Keys.ENTER)
            .waitForElementVisible(elems.item.selector, 1000)
            .click(elems.item.selector + ':nth-child(2)')
            .click(elems.item.selector + ':nth-child(3)')
            .click(elems.clear.selector)
            .waitForElementVisible(elems.item.selector, 1000)
            .elements('css selector', elems.item.selector, function (results) {
                var that = this;
                var matchedItemText = ['Testing1', 'Testing4'];

                this.assert.equal(2, results.value.length);

                results.value.map(function (val, index) {
                    that.getText(
                        elems.item.selector + ':nth-child(' + (index + 1) + ') ' + elems.itemText.selector,
                        function (text) {
                            that.assert.equal(matchedItemText[index], text.value);
                        }
                    );
                });
            })
            .end(done);
    });
});
