const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('assets'));

app.get('/', function(req, res) {
	res.render('dynamic-view');
});

app.get('/google-view', function(req, res) {
	let warning = true;
	if (req.query.name) {
		warning = false;
		const data = {
			name: req.query.name
		}
		res.render('google-view', {
			name: data.name
		});	
	} else {
		res.render('dynamic-view', {
			warning: warning
		})
	}
});


app.listen(3000);
app.use(function(req, res, next) {
	res.status(404).send('Niestety nie możemy zrealizować Twojego żadania');
});