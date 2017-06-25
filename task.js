/**
 * Created by Tom on 25/06/2017.
 */

var taskRepo = require('./taskRepo');

var Task = function(data){
    this.name = data.name;
    this.completed = false;
};

Task.prototype.complete = function () {
    this.completed = true;
    taskRepo.update(this);
    return "Completing task: " + this.name + "\tStatus: " + this.completed;
};

module.exports = Task;