myApp.controller('SuccessController', ['$scope', '$http', '$location', 'Data', '$rootScope','$routeParams',
    function ($scope, $http, $location, Data, $rootScope,$routeParams) {
        $scope.message = "Welcome!!!";
        $scope.updateuserinfo = function () {
            Data.updateUserInfo().then(function (status) {
                if (status == 'success')
                {
                    $location.path('/success');
                } else if (status == 'usernameexists') {
                    $scope.invalidmessage = 'User name already exists';
                } else
                {
                    $scope.invalidmessage = 'Update failed';
                }


            }, function (err) {
                //document.write(err);
                $scope.invalidmessage = err;
            });


        };
        console.log('yo bahira' + $routeParams.id);
        
        $rootScope.m_title = '';
        $rootScope.m_body = '';
        $rootScope.m_sender = '';
        $rootScope.m_importance = '';
        $scope.viewMessage = function (id) {
            console.log("vitra ta auuach:" + $routeParams.id);
            Data.getSingleMessage(id).then(function (status) {
                $rootScope.m_title = status[0].message_title;
                $rootScope.m_body = status[0].message_body;
                $rootScope.m_sender = status[0].Sender;
                if (status[0].important == 1)
                    $rootScope.m_importance = 'important';
                else
                    $rootScope.m_importance = 'unimportant';

                 $rootScope.$digest();


            }, function (err) {
                //document.write(err);
                $scope.invalidmessageformessage = err;
            });



        };
          $scope.deleteMessage = function (id) {
            Data.deleteMessage(id).then(function (status) {
                if (status == 'success')
                {
                    $location.path('/message');
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