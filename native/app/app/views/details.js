var place,
	observableModule = require( "data/observable" ),
	data = new observableModule.Observable();

// TODO: Set to the actual URL
data.set( "mapUrl", "" );

exports.load = function( args ) {
	var page = args.object;
	place = args.context;
	page.bindingContext = data;
};

exports.loadMap = function( args ) {
	var view = args.object.android;
}
