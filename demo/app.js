angular.module('app', ['pouchdb'])
.controller('App', function($scope, pouchCollection, pouchBindingSimple) {
    $scope.books = pouchCollection('http://localhost:5984/books');
    $scope.userInfo = {
    firstName: 'Jo', lastName: 'Bloggs'
  };
  pouchBindingSimple('http://localhost:5984/user-info', $scope, 'userInfo');
});
