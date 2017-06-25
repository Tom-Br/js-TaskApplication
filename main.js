/**
 * Created by Tom on 25/06/2017.
 */

var Task = require('./task');
var User = require('./user');
var Project = require('./project');
var taskRepo = require('./taskRepo');
var userRepo = require('./userRepo');
var projectRepo = require('./projectRepo');

console.log("Task Applications \n");

var task1 = new Task(taskRepo.get(1));
console.log(task1.complete());


