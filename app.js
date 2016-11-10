angular.module ('Contactapp',[])
  .service('contactService',function(){
    var self = this //เก็บ reference this ไว้ก่อน

    self.contacts = [
      {message:"hey yo!"}
    ]

    self.list = function(){
      return self.contacts
    }

    self.add = function(contact){
      self.contacts.push(contact)
    }
  })

  .controller('ListContactController',function($scope, contactService){
  })

  .controller('AddContactController', function ($scope, contactService){
    $scope.add = function(){
    var contact = {
        message: $scope.message
      }

      contactService.add(contact)
      resetForm()
    }

    function resetForm() {
      $scope.message = ''
    }

  })
