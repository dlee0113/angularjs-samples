var myApp = angular.module('myApp');

myApp.controller('HomeController', [ '$scope', '$resource', function ($scope, $resource) {
	$scope.hello = 'Im Home';
}]);


myApp.controller('ContactController', [ '$scope', 'ContactService', function ($scope, ContactService) {
	$scope.contacts = ContactService.query();	
}]);

myApp.controller('TodoController', [ '$scope', 'TodoService', function ($scope, TodoService) {
	$scope.todos = TodoService.query();	
}]);
