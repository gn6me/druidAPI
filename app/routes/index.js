// routes/index.js

const druidRoutes = require('./druid_routes');

module.exports = function(app, db) {
	druidRoutes(app, db);
	// Other route groups could go here, in the future
};