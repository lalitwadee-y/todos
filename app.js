angular.module ('Todosapp',[])
  .service('TodosService',function(){
    var self = this //เก็บ reference this ไว้ก่อน

    self.todos = [
      {title:"hey yo!"}
    ]

    self.list = function(){
      return self.todos
    }

    self.add = function(todo){
      self.todos.push(todo)
    }
  })
  //อยากมีกี่ service ก็เพิ่มขึ้นได้
  .controller('ListTodosController',function($scope, TodosService){

    $scope.todos = TodosService.list()

  })

  .controller('AddTodosController', function ($scope, TodosService){
    $scope.add = function(){
    var todo = {
        title: $scope.title
      }

      TodosService.add(todo)
      resetForm()
    }

    function resetForm() {
      $scope.title = ''
    }



  })
