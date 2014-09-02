
var myApp = angular.module('myApp',['restangular','ui.router','myApp.controllers','myApp.services']);

myApp.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.when('', '/home');
	$urlRouterProvider.otherwise('/home');
	
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: 'templates/home.html',
        controller: 'HomeController'
	})
	.state('contacts', {
		url: '/contacts',
		templateUrl: 'templates/contacts.html',
        controller: 'ContactsController'
	})	
	.state('todos', {
		url: '/todos',
		templateUrl: 'templates/todos.html',
        controller: 'TodosController'
	})
	.state('todos.create', {
		url: '/create',
		templateUrl: 'templates/new_todo.html',
		controller: function($scope, $stateParams, $resource) {
			$scope.newTodo = {};
			
			$scope.createTodo = function(newTodoObj){
				console.log('new Todo: '+newTodoObj.description);
				$resource('todos').save(newTodoObj, function(data){
					alert('Saved successfully');
				},function(data){
					alert('Failed to save Todo');
				});
			}
		}
	})	
		
});

myApp.config(function($locationProvider, RestangularProvider) {
	//Restangular.setBaseUrl(location.protocol + '//' + location.hostname + (location.port && ':' + location.port) + location.pathname);
    RestangularProvider.setBaseUrl(location.pathname);
    
});

myApp.run(['$rootScope', '$location', function ($rootScope, $location) {
	
	$rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {
		// We can prevent this state from completing
		//evt.preventDefault();
	    $rootScope.currentNavLink=$location.path();
	});

}]);

