myApp.directive('messageDirective', function ($compile ,Data, toaster, $rootScope) {
    return{
        /*template:'<div style ="color:red">hello</div>'*/
        templateUrl: 'views/messagelist.html',
        restrict: 'ECA',
       link:function(scope,elm,attrs) {
       scope.markImportantOrUnimportant = function(idflag)
       {
          
             console.log( idflag);
            var id=idflag.split('-')[0];
             var flag=idflag.split('-')[1];
            
            Data.markImportantOrUnimportant(id,flag).then(function (status) {
                if (status == 'success')
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
                  //$location.path('/message');
                  toaster.clear();
                   toaster.pop('info', "", 'successfully marked', 3000, 'trustedHtml');
                   
                    
                }  else
                {
                    scope.invalidmessage = 'Error';
                }


            }, function (err) {
                //document.write(err);
                scope.invalidmessage = err;
            });

       };
         scope.deleteMessage = function (id) {
            Data.deleteMessage(id).then(function (status) {
                if (status == 'success')
                {
                    
                    //$location.path('/message');
                    var row = document.getElementById('row_'+id);
                row.parentNode.removeChild(row);
                 toaster.clear();
                     toaster.pop('info', "", 'successfully deleted', 3000, 'trustedHtml');
                    
                 
                   }  else
                {
                    scope.invalidmessage = 'Error';
                }


            }, function (err) {
                //document.write(err);
                scope.invalidmessage = err;
            });


        };
         scope.viewMessage = function (msg_id) {
             Data.getSingleMessage(msg_id).then(function (status) {
                console.log(status);
                if(status.length>0){
                    
                
                scope.m_title = status[0].message_title;
                scope.m_body = status[0].message_body;
                scope.m_sender = status[0].email;
                if (status[0].important == 1)
                    scope.m_importance = 'important';
                else
                    scope.m_importance = 'unimportant';
                }else 
                {
                scope.m_title = '';
                scope.m_body = '';
                scope.m_sender = ''; 
                 scope.m_importance = '';
                }
                 


            }, function (err) {
                //document.write(err);
                scope.invalidmessageformessage = err;
            });


        };
         scope.replyToUser= function(){
              var sender=$rootScope.suser.id;
              var receiver = scope.m_sender;
              var subject = scope.replysubject;
              var body = scope.replymessage;
             
               Data.replyToUser(receiver,subject,body,sender).then(function (status) {
                   console.log(status);
                if (status == 'success')
                {
                    
                    
                 toaster.clear();
                     toaster.pop('info', "", 'successfully replied', 3000, 'trustedHtml');
                    
                 
                   }  else
                {
                    scope.invalidmessage = 'Error';
                }


            }, function (err) {
                //document.write(err);
                scope.invalidmessage = err;
            });
          
        }
       
    }



    };
});