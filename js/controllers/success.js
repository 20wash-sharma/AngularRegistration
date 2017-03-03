myApp.controller('SuccessController', 
['$scope', '$http', '$location', 'Data', '$rootScope','$routeParams','toaster',
    function ($scope, $http, $location, Data, $rootScope,$routeParams,toaster) {
        $scope.message = "Welcome!!!";
        $scope.updateuserinfo = function () {
            Data.updateUserInfo().then(function (status) {
                 toaster.clear();
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
        $scope.markImportantOrUnimportant = function (idflag) {
            console.log(idflag);
            var id=idflag.split('-')[0];
             var flag=idflag.split('-')[1];
            Data.markImportantOrUnimportant(id,flag).then(function (status) {
                if (status == 'success')
                {
                      Data.getMessage().then(function (results) {
                         $rootScope.messages=results;
                         var index=0;
                         for(message in results)
                         {
                             
                             if(message.important==1)
                             {
                                 $rootScope.messages[index]['importantlabel']='important';
                                  $rootScope.messages[index]['flipflag']=0;
                                  $rootScope.messages[index]['flagmarkhider']=1;
                                   $rootScope.messages[index]['flagunmarkhider']=0;
                             }
                             else 
                             {
                                $rootScope.messages[index]['importantlabel']='unimportant'; 
                                $rootScope.messages[index]['flipflag']=1;
                                $rootScope.messages[index]['flagmarkhider']=0;
                                   $rootScope.messages[index]['flagunmarkhider']=1;
                                   
                             }
                             index++;
                                 
                         }
                         console.log($rootScope.messages);
                         
                     });
                  //$location.path('/message');
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