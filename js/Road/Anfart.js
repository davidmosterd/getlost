function Anfart() {
    RoadAbstract.call( this );

    this.name = 'Anfart';

    this.directions = {
        'yes' : 70,
        'no' : 30
    }
}

Anfart.prototype = Object.create( RoadAbstract.prototype );

var Anfart = new Anfart();