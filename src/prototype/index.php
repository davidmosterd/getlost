<?php

$url = '';

// core
require 'classes/RoadAbstract.php';
require 'classes/Roadtrip.php';

// roads
$roads = [ 'Anfart', 'Ausfart', 'Intersection', 'Roundabout', 'TurnLeft', 'TurnRight', 'YIntersection' ];

$roadtrip = new Roadtrip();
$decission = false;
$road_links = [];

foreach( $roads as $road ) {
	require 'classes/Road/' . $road . '.php';

	$instance = new $road;

	$roadtrip->attach( $instance );

	$road_links[] = '<a href="' . $url . '?road=' . $instance->getName() . '">' . $instance->getName() . '</a>';

	if ( isset( $_GET['road'] ) &&  $instance->getName() == $_GET['road'] ) {
		$decission = '<h2>This ' . $instance->getName(). ': <span>' . $instance->decide() . '</span></h2>';
	}
}

?>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.3">
		<title>Roadtrip - CATPFE</title>

		<style>
			body {
				font-family: "Helvetica Neue";
			}
			a {
				font-size: 24px;
				display: block;
				color: blue;
				text-decoration: none;
				margin: 4px 0;
			}
			a:hover {
				color: black;
			}
			h2 span {
				color: blue;
				display: block;
			}
		</style>
	</head>
	<body>
		<h1>CAT PFE RT</h1>
		<?php
			foreach( $road_links as $link ) {
				echo $link;
			}

			if ( $decission ) {
				echo $decission;
			}
		?>
	</body>
</html>




