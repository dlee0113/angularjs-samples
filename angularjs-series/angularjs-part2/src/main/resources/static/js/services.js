angular.module('myApp.services',[])

.factory('ContactService', function($http){
	return {
		getContacts : function(){
			var promise = $http.get('contacts')
								.then(function(response){
									return response.data;
								},function(response){
									alert('error');
								});
			return promise;
		}
	}
})

.factory('TodoService', function($http){
	return {
		getTodos : function(){
			var promise = $http.get('todos')
								.then(function(response){
									return response.data;
								},function(response){
									alert('error');
								});
			return promise;
		}
	}
})

;