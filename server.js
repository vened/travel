var express = require('express');
var mockupSection = require('./mockups/Section');
var app = express();

app.use(express.static('build'));
app.set('view engine', 'jade');

app.get('/api/v1/Section/Get/:id', function (req, res) {
	console.log('/api/v1/Section/Get/' + req.params.id);
	setTimeout(function () {
		res.send(mockupSection.Section[req.params.id])
	}, 1500)
})

app.get('/*', function (req, res) {
	res.render('index');
})

app.listen(3000)