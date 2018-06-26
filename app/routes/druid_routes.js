// routes/note_routes.js

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

	// lookup druid
	app.get('/api/druids/:id', (req, res) => {

		const id = req.params.id;
		const details = { '_id': new ObjectID(id) };
		db.collection('druids').findOne(details, (err, item) => {
			if (err) {
				res.send({ 'error': 'An error has ocurred' });
			} else {
				res.send(item);
			}
		});

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

  	// delete a druid
  	app.delete('/api/druids/:id', (req, res) => {

  		const id = req.params.id;
  		const details = { '_id': new ObjectID(id)  };
  		db.collection('druids').remove(details, (err, item) => {
  			if (err) {
  				res.send({ 'error': 'An error has ocurred' });
  			} else {
  				res.send('Druid ' + id + ' deleted!');
  			}
  		});

  	});

  	//update a druid
  	app.put('/api/druids/:id', (req, res) => {

  		const id = req.params.id;
  		const details = { '_id': new ObjectID(id) };
  		const druid = { text: req.body.body, title: req.body.title };
  		db.collection('druids').update(details, druid, (err, result) => {
  			if (err) {
  				res.send({ 'error': 'An error has ocurred' });
  			} else {
  				res.send(druid);
  			}
  		});

  	});
};