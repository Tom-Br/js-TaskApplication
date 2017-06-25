/**
 * Created by Tom on 25/06/2017.
 */

var projectRepo = require('./projectRepo');

var Project = function(data){
    this.name = data.name;
    this.deadline = data.deadline;
};

Project.prototype.update = function (data) {
    this.name = data.name;
    this.deadline = data.deadline;
    projectRepo.update(this);
    return "Updating task: " +  this.name;
};

module.exports = Project;