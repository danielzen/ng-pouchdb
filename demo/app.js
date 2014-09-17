angular.module('app', ['pouchdb'])
.controller('App', function($scope, pouchCollection, pouchBindingSimple) {
    $scope.books = pouchCollection('books');
    $scope.userInfo = {
    firstName: 'Jo', lastName: 'Bloggs'
  };
  pouchBindingSimple('user-info', $scope, 'userInfo');

  $scope.online = false;
  $scope.toggleOnline = function() {
    $scope.online = !$scope.online;
    if ($scope.online) {  // Read http://pouchdb.com/api.html#sync
      $scope.sync =  $scope.books.$db.replicate.sync('http://127.0.0.1:5984/books', {live: true})
        .on('error', function (err) {
          console.log("Syncing stopped");
          $scope.online = false;
          console.log(err);
        });
    } else {
      $scope.sync.cancel();
    }
  };
});
