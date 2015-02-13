exports.load = function( args ) {
	var place = args.context,
		page = args.object;

	page.ios.title = place.Name + ", " + place.Country;
};

exports.loadMap = function( args ) {
	var iosView = args.object.ios,
		map = MKMapView.alloc().initWithFrame(
			CGRectMake( 0, 0, UIScreen.mainScreen().bounds.size.width, 200 ) );

	iosView.addSubview( map );
}
