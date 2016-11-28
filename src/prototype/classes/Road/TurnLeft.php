<?php

class TurnLeft extends RoadAbstract {

	protected function setDirections() {
		$this->directions = [
			self::LEFT => 10,
			self::STRAIGHT => 90,
		];
	}

	protected function setName() {
		$this->name = 'Road Left';
	}

}