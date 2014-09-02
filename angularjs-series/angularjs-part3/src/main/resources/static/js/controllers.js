angular.module('myApp.controllers',[])

.controller('HomeController', [ '$scope', function ($scope) {
	$scope.hello = 'Im Home';
}])


.controller('ContactsController', [ '$scope', 'PersonService', function ($scope, PersonService) {
	$scope.contacts = PersonService.getAll();	
}])

.controller('TodosController', [ '$scope', 'TodoService', function ($scope, TodoService) {
	$scope.todos = TodoService.getAll();	
}])

;
