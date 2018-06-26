// app/models/druid.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DruidSchema   = new Schema({
    name: String
});
module.exports = mongoose.model('Druid', DruidSchema);