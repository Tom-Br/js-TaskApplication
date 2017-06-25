/**
 * Created by Tom on 25/06/2017.
 */

var projectRepo = function() {

    var get = function(id){
        console.log("Getting project #" + id);
        return {
            name: "Project #" + id,
            deadline: "Not set!"
        }
    };

    var update = function(data){
        console.log("Updating project: " + data.name);
    };

    return {
        get: get,
        update: update
    }
};

module.exports = projectRepo();