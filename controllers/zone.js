//CRUD action about ZONES in MONGOATLAS...
const Zone = require('../src/models/zone');

//GET ALL
exports.index = function(req, res, next){
    Zone.find({}, (err, zones) => {
        if(err){
            return next(err);
        } else {
            res.send(zones);
        }
    })
}


//POST
exports.create = function(req, res, next){
    let zone = new Zone({
        type: req.body.type,
        title: req.body.title,
        description: req.body.description,
        calification: req.body.calification,
        color: req.body.color,
        latlng: req.body.latlng 
    });
    zone.save(err => {
        if(err) {
            return next(err);
        } else {
            res.send("Zone created successfully");
        }
    })  
}

//GET BY ID
exports.show = function(req, res, next) {
    Zone.findById(req.params.id, (err, zone) => {
        if (err) {
            return next(err);
        } else {
            res.send(zone);
        }
    })
}


// DELETE 
exports.delete = function(req, res, next) {
    Zone.findByIdAndRemove(req.params.id, (err, zone) => {
        if (err) {
            return next(err);
        } else {
            res.send("Zone deleted successfully");
        }
    })
}



// UPDATE 
exports.update = function (req, res, next) {
    Zone.findByIdAndUpdate(req.params.id, {$set: req.body}, (err, zone) => {
        if (err) {
            return next(err);
        } else {
            res.send("Zone updated successfully");
        }
    })
} 

