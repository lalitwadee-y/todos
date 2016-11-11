angular.module ('Todosapp',[])
  .service('TodosService',function(){
    var self = this //เก็บ reference this ไว้ก่อน

    self.texts = [
      {title:"hey yo!"}
    ]

    self.list = function(){
      return self.texts
    }

    self.add = function(text){
      self.texts.push(text)
    }
  })
  //อยากมีกี่ service ก็เพิ่มขึ้นได้
  .controller('ListTodosController',function($scope, TodosService){

    $scope.texts = TodosService.list()

  })

  .controller('AddTodosController', function ($scope, TodosService){
    $scope.add = function(){
    var text = {
        title: $scope.title
      }

      TodosService.add(text)
      resetForm()
    }

    function resetForm() {
      $scope.title = ''
    }



  })
