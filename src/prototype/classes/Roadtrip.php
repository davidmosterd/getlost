<?php

class Roadtrip {

	protected $roads;

	public function attach( RoadAbstract $road ) {
		$this->roads[] = $road;
	}

	public function getRoads() {
		return $this->roads;
	}

}