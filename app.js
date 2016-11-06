angular.module ('Contactapp',[])
  .service('contactService',function(){
    var self = this //เก็บ reference this ไว้ก่อน

    self.contacts = [ //ใช้ var ไม่ได้ เพราะ contacts จะถูกสร้างใหม่เสมอ
      { fullname: 'Lalitwadee Yodnin',nickname: 'Bel',phone: '0807702115'},
      { fullname: 'Juntana Jumras',nickname: 'Num',phone: '092xxxxxxx'},
      { fullname: 'Warunee Phosri',nickname: 'Aor',phone: '0981234567'},
      { fullname: 'Natworapicha Sakamon',nickname: 'Tan',phone: '0671234567'}
    ]

    self.list = function(){
      return self.contacts
    }

    self.add = function(contact){
      self.contacts.push(contact)
    }
  })
  //อยากมีกี่ service ก็เพิ่มขึ้นได้
  .controller('ListContactController',function($scope, contactService){

    $scope.contacts = contactService.list()

  })

  .controller('AddContactController', function ($scope, contactService){
    $scope.add = function(){
      var contact = {
        fullname: $scope.fullname,
        nickname: $scope.nickname,
        phone: $scope.phone
      }

      contactService.add(contact)
      resetForm()
    }

    function resetForm() {
      $scope.fullname = ''
      $scope.nickname = ''
      $scope.phone = ''
    }
  })
