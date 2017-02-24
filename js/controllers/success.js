myApp.controller('SuccessController', 
['$scope', '$http', '$location', 'Data', '$rootScope','$routeParams','toaster',
    function ($scope, $http, $location, Data, $rootScope,$routeParams,toaster) {
        $scope.message = "Welcome!!!";
        $scope.updateuserinfo = function () {
            Data.updateUserInfo().then(function (status) {
                if (status == 'success')
                {
                    $location.path('/profile');
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
     
          $scope.deleteMessage = function (id) {
            Data.deleteMessage(id).then(function (status) {
                if (status == 'success')
                {
                    
                    $location.path('/message');
                     toaster.pop('info', "", 'successfully deleted', 3000, 'trustedHtml');
                    
                 
                   }  else
                {
                    $scope.invalidmessage = 'Error';
                }


            }, function (err) {
                //document.write(err);
                $scope.invalidmessage = err;
            });


        };
        $scope.markImportantOrUnimportant = function (id,flag) {
            Data.markImportantOrUnimportant(id,flag).then(function (status) {
                if (status == 'success')
                {
                    
                  $location.path('/message');
                   toaster.pop('info', "", 'successfully marked', 3000, 'trustedHtml');
                   
                    
                }  else
                {
                    $scope.invalidmessage = 'Error';
                }


            }, function (err) {
                //document.write(err);
                $scope.invalidmessage = err;
            });


        };
        
     
    }]);