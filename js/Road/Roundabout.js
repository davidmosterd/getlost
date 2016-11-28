function Roundabout() {
    RoadAbstract.call( this );

    this.name = 'Roundabout';

    this.directions = {
        'left' : 15,
        'right' : 15,
        'ahead' : 65,
        'back' : 5
    }
}

Roundabout.prototype = Object.create( RoadAbstract.prototype );

var Roundabout = new Roundabout();