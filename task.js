/**
 * Created by Tom on 25/06/2017.
 */

var taskRepo = require('./taskRepo');

var Task = function(data){
    this.name = data.name;
    this.completed = false;
    this.user = "";
    this.project = "";
};

Task.prototype.linkUser = function(data){
    this.user = {
        first: data.first,
        last: data.last
    };
    taskRepo.update(this);
};

Task.prototype.linkProject = function(data){
    this.project = {
        name: data.name,
        deadline: data.deadline
    };
    taskRepo.update(this);
};

Task.prototype.complete = function () {
    this.completed = true;
    taskRepo.update(this);
    return "Completing task: " + this.name + "\tStatus: " + this.completed;
};

module.exports = Task;