<?php

class TurnRight extends RoadAbstract {

	protected function setDirections() {
		$this->directions = [
			self::RIGHT => 10,
			self::STRAIGHT => 90,
		];
	}

	protected function setName() {
		$this->name = 'Road Right';
	}

}