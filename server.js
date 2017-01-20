var express 		= 	require('express'),
	app				=	express(),
	//mangoose		=	require('mangoose'),
	morgan			=	require('morgan'),
	bodyParser 		= 	require('body-parser');
	//methodOverride 	= require('method-override');

app.use(express.static(__dirname + '/public'));                
app.use(morgan('dev'));                                         
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json()); 
app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(8080);
console.log("App listening on port 8080");