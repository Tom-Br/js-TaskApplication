/**
 * Created by Tom on 25/06/2017.
 */

var Task = require('./task');
var User = require('./user');
var Project = require('./project');
var repo = require('./repo');

console.log("Task Applications \n");

var task1 = new Task(repo.task.get(1));
var project1 = new Project(repo.project.get(1));
var user1 = new User(repo.user.get(1));

task1.linkUser(user1);
task1.linkProject(project1);

console.log(task1.project);


