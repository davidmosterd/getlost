function TurnLeft() {
    RoadAbstract.call( this );

    this.name = 'TurnLeft';

    this.directions = {
        'left' : 10,
        'ahead' : 90
    }
}

TurnLeft.prototype = Object.create( RoadAbstract.prototype );

var TurnLeft = new TurnLeft();