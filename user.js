/**
 * Created by Tom on 25/06/2017.
 */

var userRepo = require('./userRepo');

var User = function(data){
    this.first = data.first;
    this.last = data.last;
};

User.prototype.update = function (data) {
    this.first = data.first;
    this.last = data.last;
    userRepo.update(this);
    return "Updating user: " +  this.first + " " + this.last;
};

module.exports = User;
