<?php

class Intersection extends RoadAbstract {

	protected function setDirections() {
		$this->directions = [
			self::LEFT => 25,
			self::RIGHT => 25,
			self::STRAIGHT => 50,
		];
	}

	protected function setName() {
		$this->name = 'Intersection';
	}

}