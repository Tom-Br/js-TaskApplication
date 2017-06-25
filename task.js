/**
 * Created by Tom on 25/06/2017.
 */

var Task = function(data){
    this.name = data.name;
    this.completed = false;
};

Task.prototype.complete = function () {
    this.completed = true;
    return "Completing task: " + this.name + "\tStatus: " + this.completed;
};

Task.prototype.save = function() {
    return "Saving task: "  + this.name;
};

module.exports = Task;