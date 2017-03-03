var myApp = angular.module('myApp',
        ['ngRoute', 'ngAnimate', 'toaster']);



myApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
                when('/login', {
                    templateUrl: 'views/login.html',
                    controller: 'RegistrationController'
                }).
                when('/register', {
                    templateUrl: 'views/register.html',
                    controller: 'RegistrationController'
                }).when('/message', {
                    templateUrl: 'views/message.html',
                    controller: 'SuccessController',
                }).when('/message/:id', {
                    templateUrl: 'views/messageview.html',
                    controller: 'MessageController'
                }).
                when('/success', {
                    templateUrl: 'views/success.html',
                    controller: 'SuccessController',
                }). when('/profile', {
                    templateUrl: 'views/profile.html',
                    controller: 'SuccessController',
                }).
                otherwise({
                    redirectTo: '/login'
                });
    }]).run(function ($rootScope, $location, Data) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        $rootScope.authenticated = false;
        $rootScope.isnotloggedin = true;
        var nextUrl = next.templateUrl;
        Data.getSession().then(function (results) {
            if (results[0].id) {

                $rootScope.isnotloggedin = false;
                $rootScope.authenticated = true;
               
                $rootScope.suser=results[0];


                if (nextUrl == 'views/register.html' || nextUrl == 'views/login.html') {
                    $location.path("/success");
                }else if(nextUrl=='views/message.html')
                {
                     Data.getMessage().then(function (results) {
                         $rootScope.messages=results;
                         
                          
                         for(message in results)
                         {
                            
                             if(results[message].important==1)
                             {
                                 $rootScope.messages[message]['importantlabel']='important';
                                  $rootScope.messages[message]['flipflag']=0;
                                  $rootScope.messages[message]['flagmarkhider']=1;
                                   $rootScope.messages[message]['flagunmarkhider']=0;
                             }
                             else 
                             {
                                $rootScope.messages[message]['importantlabel']='unimportant'; 
                                $rootScope.messages[message]['flipflag']=1;
                                $rootScope.messages[message]['flagmarkhider']=0;
                                   $rootScope.messages[message]['flagunmarkhider']=1;
                                   
                             }
                             
                         }
                        
                         
                     });
                }
            }//session exists
            else {


                if (nextUrl == 'views/register.html' || nextUrl == 'views/login.html') {

                } else {
                    $location.path("/login");
                }
            }//session doesnot exists
        });


    });
});