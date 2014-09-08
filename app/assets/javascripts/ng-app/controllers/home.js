angular.module('myApp').
  controller('HomeCtrl', function ($scope, $http) {
    $scope.scores = [];
    $scope.selectedUser = { email: '', id: 0 };
    $scope.scoreValue = 0;

    $scope.addAlert = function(message, title, type) {
      new PNotify({
        title: title || 'Notice',
        text: message,
        type: type || '',
        animation: 'show'
      });
    };

    $scope.getUsers = function(val) {
      return $http.get('/api/users/search.json', {
        params: {
          email: val
        }
      }).then(function(res){
        console.table(res);
        return res.data.users;
      });
    };

    $scope.getScores = function() {
      $http.get('/api/scores.json').
      then(function(res){
        $scope.scores = res.data.scores;
      });
    };

    $scope.createScore = function() {
      $http({ method: 'post',
              url: '/api/scores/create.json',
              data: {
                userId: $scope.selectedUser.id,
                value: $scope.scoreValue
              }
            }).
            success(function(res) {
              $scope.addAlert(res.message);
              $scope.selectedUser = { email: '', id: 0 };
              $scope.scoreValue = 0;
              $scope.getScores();
            });
    };

    $scope.init = function() {
      PNotify.prototype.options.delay = 1500;
      PNotify.prototype.options.styling = 'fontawesome';
      $scope.getScores();
    };

  });
