//same as airplane.js
var mongoose = require('mongoose');
var hairGoals = mongoose.model('hairGoals');
var hairIssues = mongoose.model('hairIssues');
//var hairType = mongoose.model('hairType');

var sendJSONresponse = function(res, status, content){
    res.status(status);
    res.json(content);
};

/////HAIR GOALS ////////

module.exports.hairGoalsReadAll = function(req, res) {
    console.log("Finding all Hair Goals data records", req);
    
    hairGoals
        .find({});
        console.log(hairGoals.find({}))
        
        .exec(function(err, hairGoals){
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(hairGoals);
            sendJSONresponse(res, 200, hairGoals);
        });
        
};

////HAIR ISSUES /////

module.exports.hairIssuesReadAll = function(req, res) {
    console.log("Finding all Hair Issues data records", req);
    
    hairIssues
        .find({})
        console.log(hairIssues.find({}))
        .exec(function(err, hairissues){
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(hairissues);
            sendJSONresponse(res, 200, hairissues);
        });
};