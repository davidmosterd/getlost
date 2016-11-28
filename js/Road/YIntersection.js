function YIntersection() {
    RoadAbstract.call( this );

    this.name = 'YIntersection';

    this.directions = {
        'left' : 50,
        'right' : 50
    }
}

YIntersection.prototype = Object.create( RoadAbstract.prototype );

var YIntersection = new YIntersection();