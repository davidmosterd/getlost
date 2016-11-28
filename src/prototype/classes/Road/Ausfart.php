<?php

class Ausfart extends RoadAbstract {

	protected function setDirections() {
		$this->directions = [
			self::YES => 10,
			self::NO => 90,
		];
	}

	protected function setName() {
		$this->name = 'Ausfart';
	}

}