angular
	.module('todolist')
	.controller('ListCtrl', ListCtrl);

function ListCtrl(ListService) {
	var self = this;
	
	self.tasks=[];
	
	self.auth = function(listname){
		ListService.auth(listname)
			.then(function(res){
        console.log('success');
				self.tasks = ListService.tasks = res.data.tasks;
			}), function(err){
				console.log(err);
			}
	};
	self.getTask=function(){
		ListService.getTask()
      .then(function(res) {
        self.tasks = ListService.tasks = res.data.tasks;
      })
	};
	
	self.addTask=function(newTaskText){
		ListService.addTask(newTaskText)
		.then(function(res){
      self.getTask();
    });
		
	};
	
	self.updateTask=function(task){
		ListService.updateTask(task)
		.then(function(res){
      self.getTask();
		})
	};
	
	self.deleteTask=function(TaskId){
		ListService.deleteTask(TaskId)
    .then(function(res){
      self.getTask();   
    }), function(err){
				console.log(err);
    }};
};
