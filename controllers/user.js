const User = require('../src/models/user');

exports.index = function(req, res, next){
    User.find({},(err, users) => {
        if(err){
            return next(err);
        }
        else{
            res.send(users);
        }
    })
}

exports.create = function(req, res, next){
    
} 