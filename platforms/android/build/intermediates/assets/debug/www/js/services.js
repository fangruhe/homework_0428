angular
	.module('todolist')
	.service('ListService', ListService);
	
function ListService($http) {
	this.baseURL = 'https://richegg.top';
	this.tasks = [];
	this.auth = function(listname){
		var data= {
			listName: listname					
		};
		return $http.post(this.baseURL + '/lists', data);
	}
	this.addTask = function(newTaskText){
		var data= {
			text: newTaskText				
		};
		return $http.post(this.baseURL + '/tasks', data);
	}

	this.getTask = function(newTaskText){
		return $http.get(this.baseURL + '/tasks');
	}

	this.updateTask = function(task){
		var data= {
			isDone: task.isDone			
		};
		return $http.patch(this.baseURL + '/tasks/' + task.id , data);
	}

	this.deleteTask = function(taskId){
		return $http.delete(this.baseURL + '/tasks/' + taskId);
	}

}