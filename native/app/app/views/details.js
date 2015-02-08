exports.load = function( args ) {
	var place = args.context,
		page = args.object;

	page.ios.title = place.Name + ", " + place.Country;

	var iosView = args.object.ios._page._view;
	var map = MKMapView.alloc().initWithFrame( CGRectMake( 0, 0, 1000, 1000 ) );
	iosView.addSubview( map );
};
