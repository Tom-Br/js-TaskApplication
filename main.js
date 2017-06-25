/**
 * Created by Tom on 25/06/2017.
 */

var Task = require('./task');
var taskRepo = require('./taskRepo');

console.log("Task Applications \n");

var task1 = new Task(taskRepo.get(1));
console.log(task1.complete());


