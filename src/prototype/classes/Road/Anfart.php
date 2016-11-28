<?php

class Anfart extends RoadAbstract {

	protected function setDirections() {
		$this->directions = [
			self::YES => 60,
			self::NO => 40,
		];
	}

	protected function setName() {
		$this->name = 'Anfart';
	}

}