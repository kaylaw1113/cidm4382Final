//airport.js
var mongoose = require('mongoose');
var hairType = mongoose.model('hairType');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
}

module.exports.hairTypeReadAll = function(req, res)
{
    console.log("Finding all Hair Type Records", req);
    
    hairType
        .find({})
        .exec(function(err, hairType){
            if(err){
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(hairType);
            sendJSONresponse(res, 200, hairType);
        });
}

module.exports.hairTypeReadOne = function(req, res){
    console.log('Finding hair type data record', req.params);
    if (req.params && req.params.hairPattern){
        hairType
            .find({
                hairPattern: req.params.hairPattern
            })
            .exec(function(err, hairType){
                if (!hairType){
                    sendJSONresponse(res, 404, {
                        "message": "Hair type not found"
                    });
                    return;
                }    
                else if (err){
                    console.log (err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(hairType);
                sendJSONresponse(res, 200, hairType);
            });
    }
    else{
        console.log('Hair type not specified');
        sendJSONresponse(res, 404, {
            "message": "Hair type not requested"
        });
    }
};