myApp.controller('SuccessController', 
['$scope', '$http', '$location', 'Data', '$rootScope','$routeParams','toaster',
    function ($scope, $http, $location, Data, $rootScope,$routeParams,toaster) {
        $scope.message = "Welcome!!!";
        $scope.updateuserinfo = function () {
            Data.updateUserInfo().then(function (status) {
                 toaster.clear();
                if (status == 'success')
                {
                    //$location.path('/profile');
                     toaster.pop('info', "", 'successfully updated', 3000, 'trustedHtml');
                } else if (status == 'usernameexists') {
                    $scope.invalidmessage = 'User name already exists';
                    
                     toaster.pop('warning', "", 'username exists', 3000, 'trustedHtml');
                 
                } else
                {
                    $scope.invalidmessage = 'Update failed';
                }


            }, function (err) {
                //document.write(err);
                $scope.invalidmessage = err;
            });


        };
     
        
        
     
    }]);