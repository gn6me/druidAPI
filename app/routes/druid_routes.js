// routes/note_routes.js

module.exports = function(app, db) {

	// lookup druid
	app.get('/api/druids/:id', (req, res) => {

	});

	// create a druid
	app.post('/api/druids', (req, res) => {
   		
   		const druid = { text: req.body.body, title: req.body.title };
   		db.collection('druids').insert(druid, (err, result) => {
   			if (err) {
   				res.send({ 'error': 'An error has occured' });
   			} else {
   				res.send(result.ops[0]);
   			}
   		});

  	});
};