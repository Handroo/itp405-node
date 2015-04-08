var express = require('express');
var app = express();
var ejs = require('ejs');
var Dvd = require('./models/Dvd');
app.set('view engine','ejs');

app.get('/dvds',function(request,response){
	console.log('Got request ' + request.query.title);
	console.log('Got request ' + request.query.award);
	Dvd.findAll({
		where:{
			title:{
				like: '%' + request.query.title + '%'
			},
			award:{
				like: '%' + request.query.award + '%'
			}

		}
	}).then(function(results){
		response.render('dvds',{
			dvds:results
		});
	});
});

app.get('/',function(request,response){
	console.log('Got request ' + request.query.title);
	response.render('index',{
		title:'Search DVD'
	});	
});



app.listen(3000,function(){
	console.log('listening on localhost 3000');
});