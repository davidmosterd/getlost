function TurnRight() {
    RoadAbstract.call( this );

    this.name = 'TurnRight';

    this.directions = {
        'right' : 10,
        'ahead' : 90
    }
}

TurnRight.prototype = Object.create( RoadAbstract.prototype );

var TurnRight = new TurnRight();