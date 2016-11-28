<?php

abstract class RoadAbstract {

	const LEFT      = 'Go left';
	const RIGHT     = 'Go right';
	const STRAIGHT  = 'Immer gerade aus';
	const BACK      = 'Backtrack';
	const YES       = 'Do it';
	const NO        = 'Don\'t';

	protected $name;

	protected $directions = [ ];

	public function __construct() {
		$this->setDirections();
		$this->setName();
	}

	public function getName() {
		return $this->name;
	}

	public function decide() {
		$stack = [ ];

		foreach ( $this->directions as $direction => $chance ) {
			for ( $i = 0; $i < $chance; $i ++ ) {
				$stack[] = $direction;
			}
		}

		$index = array_rand( $stack );

		return $stack[ $index ];
	}

	abstract protected function setDirections();

	abstract protected function setName();
}