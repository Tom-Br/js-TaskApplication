/**
 * Created by Tom on 25/06/2017.
 */

var userRepo = function() {

    var get = function(id){
        console.log("Getting user #" + id);
        return {
            first: "First Name",
            last: "Last Name"
        }
    };

    var update = function(data){
        console.log("Updating user: " + data.first + " " + data.last);
    };

    return {
        get: get,
        update: update
    }
};

module.exports = userRepo();