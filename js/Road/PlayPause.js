function PlayPause() {
    RoadAbstract.call( this );

    this.name = 'Play/ Pause';

    this.directions = {
        'yes' : 33,
        'no' : 67
    }
}

PlayPause.prototype = Object.create( RoadAbstract.prototype );

var PlayPause = new PlayPause();