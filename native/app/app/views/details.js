var observableModule = require( "data/observable" ),
	data = new observableModule.Observable();

exports.load = function( args ) {
	var place = args.context;
	data.set( "Name", place.Name );
	data.set( "Country", place.Country );
	args.object.bindingContext = data;
};
