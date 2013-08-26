var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema; 
 
var Location= new Schema({
         
         title : String,
          description : String,
          date : {type: Date, 'default': Date.now},
          time : String,
          location : String
});
mongoose.model( 'Location', Location );
mongoose.connect( 'mongodb://localhost:27017/maps' );