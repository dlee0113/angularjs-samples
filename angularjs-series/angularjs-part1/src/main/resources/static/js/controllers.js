var myApp = angular.module('myApp');

myApp.controller('HomeController', [ '$scope', '$http', function ($scope, $http) {
	$scope.hello = 'Im Home';
}]);


myApp.controller('ContactsController', [ '$scope', 'PersonService', function ($scope, PersonService) {
	
	PersonService.getContacts().then(function(data) {
		$scope.contacts = data;
	});
	
	}
]);

myApp.controller('TodosController', [ '$scope', 'TodoService', function ($scope, TodoService) {
	TodoService.getTodos().then(function(data) {
		$scope.todos = data;
	});
	
}]);
