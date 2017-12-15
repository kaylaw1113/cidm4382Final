//modeled after aircraftData.js
var mongoose = require('mongoose');


var GoalsSchema = new mongoose.Schema({
    hairGoals: String
});

mongoose.model('hairGoals', GoalsSchema, 'hairGoals');

var IssuesSchema = new mongoose.Schema({
    hairIssues: String
});

mongoose.model('hairIssues', IssuesSchema, 'hairIssues');