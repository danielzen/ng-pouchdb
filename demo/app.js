angular.module('app', ['pouchdb'])
.controller('App', function($scope, pouchCollection, pouchBindingSimple) {
    $scope.books = pouchCollection('books');
    $scope.userInfo = {
    firstName: 'Jo', lastName: 'Bloggs'
  };
  pouchBindingSimple('user-info', $scope, 'userInfo');
});
