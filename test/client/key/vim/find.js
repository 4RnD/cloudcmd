'use strict';

const test = require('tape');
const diff = require('sinon-called-with-diff');
const sinon = diff(require('sinon'));
const dir = '../../../../client/key/vim/';

const {
    getDOM,
} = require('./globals');

global.DOM = global.DOM || getDOM();

const DOM = global.DOM;

const {
    find,
    findNext,
    findPrevious,
    _next,
    _previous,
} = require(dir + 'find');

test('cloudcmd: client: vim: find', (t) => {
    const setCurrentByName = sinon.stub();
    DOM.setCurrentByName = setCurrentByName;
    DOM.Dialog.prompt = Promise.resolve.bind(Promise);
    
    find('');
    
    t.ok(setCurrentByName.calledWith(), 'should call setCurrentByName');
    t.end();
});

test('cloudcmd: client: vim: findNext', (t) => {
    const setCurrentByName = sinon.stub();
    DOM.setCurrentByName = setCurrentByName;
    
    findNext();
    
    t.ok(setCurrentByName.calledWith(), 'should call setCurrentByName');
    t.end();
});

test('cloudcmd: client: vim: findPrevious', (t) => {
    const setCurrentByName = sinon.stub();
    DOM.setCurrentByName = setCurrentByName;
    
    findPrevious();
    
    t.ok(setCurrentByName.calledWith(), 'should call setCurrentByName');
    t.end();
});

test('cloudcmd: client: vim: _next', (t) => {
    const result = _next(1, 2);
    
    t.notOk(result, 'should return 0');
    t.end();
});

test('cloudcmd: client: vim: _previous', (t) => {
    const result = _previous(0, 2);
    
    t.equal(result, 1, 'should return 1');
    t.end();
});

