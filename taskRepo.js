/**
 * Created by Tom on 25/06/2017.
 */

var taskRepo = function() {

    var get = function(id){
        console.log("Getting task #" + id);
        return {
            name: "New task " + id,
            complete: false
        }
    };

    var update = function(data){
        console.log("Updating task: " + data.name);
    };

    return {
        get: get,
        update: update
    }
};

module.exports = taskRepo();