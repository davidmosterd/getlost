<?php

class YIntersection extends RoadAbstract {

	protected function setDirections() {
		$this->directions = [
			self::LEFT => 50,
			self::RIGHT => 50,
		];
	}

	protected function setName() {
		$this->name = 'Y Intersection';
	}

}