$( function() {
	navButtons();
	sendReport();

	// debug
	//localStorage.removeItem( 'route' );

	if ( localStorage.getItem( 'route' ) === null ) {
		localStorage.setItem( 'route', JSON.stringify( [] ) );
	}
} );

function sendReport() {
	$( 'h1' ).on( 'click touchstart', function() {
		document.location.href = 'mailto:?subject=CAT PFE RT&body=' + encodeURIComponent( localStorage.getItem( 'route' ) );

		$.ajax( {
			url : 'report.php',
			method : 'post',
			data : {
				route : localStorage.getItem( 'route' ),
				token : ''
			}
		} );
	} );
}

function setGeoData() {
	navigator.geolocation.getCurrentPosition( success, error, {
		enableHighAccuracy : true,
		timeout : 7000,
		maximumAge : 0
	} );

	function success( position ) {
		var route = JSON.parse( localStorage.getItem( 'route' ) );

		route.push( {
			latitude : position.coords.latitude,
			longitude : position.coords.longitude,
			accuracy : position.coords.accuracy,
			time : Math.floor( Date.now() / 1000 )
		} );

		localStorage.setItem( 'route', JSON.stringify( route ) );

		// debug
		//console.log( route );
	}

	function error( err ) {
		console.warn( 'ERROR(' + err.code + '): ' + err.message );
	}
}

function navButtons() {
	$( '.road' ).on( 'click touchstart', function( event ) {
		event.preventDefault();

		// set class
		$( '.road' ).removeClass( 'active' );
		$( this ).addClass( 'active' );

		// update message
		var road = window[ window.$( this ).data( 'road' ) ];

		$( 'h3' ).fadeOut( 100, function() {
			$( this ).html( road.getAction() + ' <span>' + road.decide() + '</span>' ).fadeIn( 200 );
		} );

		// store location
		setGeoData();
	} );
}