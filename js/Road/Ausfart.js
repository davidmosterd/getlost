function Ausfart() {
    RoadAbstract.call( this );

    this.name = 'Ausfart';

    this.directions = {
        'yes' : 10,
        'no' : 90
    }
}

Ausfart.prototype = Object.create( RoadAbstract.prototype );

var Ausfart = new Ausfart();