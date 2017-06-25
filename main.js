/**
 * Created by Tom on 25/06/2017.
 */

var Task = require('./task');

console.log("Task Applications");

var task1 = new Task({name: "Build the basic components for this application"});
console.log(task1.complete());

