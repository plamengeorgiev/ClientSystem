'use strict';

app.controller('SignUpCtrl', ['$scope', '$location', 'auth', 'notifier', function($scope, $location, auth, notifier) {
    $scope.signup = function(user) {
        auth.signup(user).then(function() {
            console.log(user)
            notifier.success('Registration successful!');
            $location.path('/');
        })
    }
}]);