var loadedMap;

exports.load = function( args ) {
	var place = args.context,
		page = args.object;

	page.ios.title = place.Name + ", " + place.Country;
	loadedMap = false;
};

exports.loadMap = function( args ) {
	if ( loadedMap ) {
		return;
	}

	var iosView = args.object.ios,
		map = MKMapView.alloc().initWithFrame(
			// CGRectMake( 0, 0, UIScreen.mainScreen().bounds.size.width, 200 ) );
			UIScreen.mainScreen().bounds );

	iosView.addSubview( map );
	loadedMap = true;
}
