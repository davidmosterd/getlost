<?php

class Roundabout extends RoadAbstract {

	protected function setDirections() {
		$this->directions = [
			self::LEFT => 20,
			self::RIGHT => 20,
			self::STRAIGHT => 55,
			self::BACK => 5
		];
	}

	protected function setName() {
		$this->name = 'Roundabout';
	}

}