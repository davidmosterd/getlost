function Intersection() {
    RoadAbstract.call( this );

    this.name = 'Intersection';

    this.directions = {
        'left' : 20,
        'right' : 20,
        'ahead' : 60
    }
}

Intersection.prototype = Object.create( RoadAbstract.prototype );

var Intersection = new Intersection();