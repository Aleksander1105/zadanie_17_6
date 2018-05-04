const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('assets'));

app.use('/store', function(req, res, next) {
	console.log('Jestem pośrednikiem przy żądaniu /store');
	next();
});

app.get('/', function(req, res) {
	res.send('Hello world!');
})

app.get('/store', function(req, res) {
	res.send('To jest sklep');
});

app.get('/dynamic-view', function(req, res) {
	res.render('dynamic-view', {
		user: {name: "Aleksander"},
		link: '/google-view'
	});
});

app.get('/google-view', function(req, res) {
	res.render('google-view', {
		user: {name: "Aleksander"}
	});
});

app.listen(3000);
app.use(function(req, res, next) {
	res.status(404).send('Niestety nie możemy zrealizować Twojego żadania');
});