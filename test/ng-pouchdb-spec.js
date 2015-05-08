'use strict';

describe('ng-pouchdb Binding', function() {

  var $rootScope, $compile, pouchDB, pouchBindingSimple;

  beforeEach(module('pouchdb'));

  beforeEach(inject(function (_$rootScope_, _$compile_, _pouchDB_, _pouchBindingSimple_) {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    pouchDB = _pouchDB_;
    pouchBindingSimple = _pouchBindingSimple_;
  }));

  //TODO: This test is not working
  it('should store properties in PouchDb', function (done) {
    var expectation = {foo: 'bar', baz: 'qux'};
    $rootScope.testObj = value;
    var expression = 'testObj';
    var refDb = 'test-db';
    pouchBindingSimple(refDb, $rootScope, expression);

    var db = new pouchDB(refDb);

    db.get(expression).then(function (value) {
        console.log("GOT HERE!!!"); // Not yet getting here
        expect(true).toBeFalsy();   // expect value toBe expectation
        done();
    });
  });

});
