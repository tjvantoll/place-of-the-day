var loadedMap,
	place;

exports.load = function( args ) {
	var page = args.object;
	place = args.context,

	page.ios.title = place.Name + ", " + place.Country;
	loadedMap = false;
};

exports.loadMap = function( args ) {
	if ( loadedMap ) {
		return;
	}

	var iosView = args.object.ios,
		map = MKMapView.alloc().initWithFrame(
			 // CGRectMake( 0, 0, UIScreen.mainScreen().bounds.size.width, 200 ) ),
			 UIScreen.mainScreen().bounds ),
		location = CLLocationCoordinate2DMake( place.Latitude, place.Longitude ),
		span = new MKCoordinateSpan({ latitudeDelta: 0.3, longitudeDelta: 0.3 }),
		region = new MKCoordinateRegion({ center: location, span: span });

	map.region = region;
	iosView.addSubview( map );
	loadedMap = true;
}
