angular.module('myApp.services',[])

.factory('PersonService', function(Restangular){
	var Contacts = Restangular.all('contacts');
	
	return {
		getAll : function(){
			return Contacts.getList().$object;
		}
	};
	
})

.factory('TodoService', function(Restangular){
	var Todos = Restangular.all('todos');
	return {
		getAll : function(){
			return Todos.getList().$object;
		}
	}
})

;