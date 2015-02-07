var frameModule = require( "ui/frame" ),
	observableModule = require( "data/observable" ),
	observableArray = require( "data/observable-array" ),
	el = require( "../models/el" ),
	moment = require( "../node_modules/moment/moment" ),
	data = new observableModule.Observable(),
	places = new observableArray.ObservableArray([]);

data.set( "places", places );

exports.load = function( args ) {
	args.object.bindingContext = data;

	while( places.length ) {
		places.pop();
	}
	el.data( "Places" ).get().then(function( data ) {
		data.result.forEach(function( place ) {
			place.PushDate = moment( place.PushDate )
				.format( "dddd, MMMM Do, YYYY" );
			places.push( place );
		});
	});
};

exports.details = function( args ) {
	frameModule.topmost().navigate( "app/views/details" );
};
