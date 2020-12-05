//CRUD action about USERS in MONGOATLAS...
const User = require('../src/models/user');

//GET ALL
exports.index = function(req, res, next) {
    User.find({}, (err, users) => {
        if (err) {
            return next(err);
        } else {
            res.send(users);
        }
    })
}

//POST
exports.create = function(req, res, next){
    let user = new User({
        identification: {
            type: req.body.type,
            number: req.body.number,
        },
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        neighborhood: req.body.neighborhood,
        email: req.body.email,
        password: req.body.password
    });
    user.save(err => {
        if (err) {
            return next(err);
        } else {
            res.send("User created successfully");
        }
    })
} 

//GET BY ID
exports.show = function (req, res, next) {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            return next(err);
        } else {
            res.send(user);
        }
    })
}


/* DELETE -> not neccesary NOW
exports.delete = function (req, res, next) {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) {
            return next(err);
        } else {
            res.send("User deleted successfully");
        }
    })
}
*/

/* PUT -> not neccesary NOW
exports.update = function (req, res, next) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, user) => {
        if (err) {
            return next(err);
        } else {
            res.send("User updated successfully");
        }
    })
} 
*/