
/**
 * Module dependencies.
 */

var express = require('express');

var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

require( './db' );
var routes = require('./routes');
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
// Routes

app.get('/', routes.index);
app.post( '/create', routes.create );

app.get('/create',function(req,res){
    res.render('create',{title:'Data Entry'})
});
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
