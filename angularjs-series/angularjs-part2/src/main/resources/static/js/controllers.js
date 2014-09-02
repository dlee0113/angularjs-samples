var myApp = angular.module('myApp');

myApp.controller('HomeController', [ '$scope', '$resource', function ($scope, $resource) {
	$scope.hello = 'Im Home';
}]);


myApp.controller('ContactsController', [ '$scope', 'PersonService', function ($scope, PersonService) {
	$scope.contacts = PersonService.query();	
}]);

myApp.controller('TodosController', [ '$scope', 'TodoService', function ($scope, TodoService) {
	$scope.todos = TodoService.query();	
}]);
