var myApp = angular.module('myApp');

myApp.controller('HomeController', [ '$scope', '$http', function ($scope, $http) {
	$scope.hello = 'Im Home';
}]);


myApp.controller('ContactController', [ '$scope', 'ContactService', function ($scope, ContactService) {
	
	ContactService.getContacts().then(function(data) {
		$scope.contacts = data;
	});
	
	}
]);

myApp.controller('TodoController', [ '$scope', 'TodoService', function ($scope, TodoService) {
	TodoService.getTodos().then(function(data) {
		$scope.todos = data;
	});
	
}]);
