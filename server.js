var express = require('express');
var mockupSection = require('./mockups/index');
var app = express();

app.use(express.static('build'));
app.set('view engine', 'jade');

app.get('/api/v1/Section/Get/:id', function (req, res) {
	console.log('/api/v1/Section/Get/' + req.params.id);
	setTimeout(function () {
		res.send(mockupSection.index[req.params.id])
	}, 500)
})

app.get('/*', function (req, res) {
	res.render('index');
})

app.listen(3000)