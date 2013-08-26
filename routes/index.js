var mongoose = require( 'mongoose' );
var Location     = mongoose.model('Location');
var utils    = require( 'connect' ).utils;

exports.index = function ( req, res ){
  Location.find( function ( err, locations, count ){
    res.render( 'index', {
        title : 'Node with Mongoose',
        Location : locations
    });
  });
};

exports.create = function ( req, res ){
  new Location({
    title     : req.param('title'),
    description : req.param('description'), 
    date : Date.now(),
    time : req.param('time'),
    location :  req.param('location')
    
  }).save( function( err, loc, count ){
    res.redirect( '/' );
  });
};