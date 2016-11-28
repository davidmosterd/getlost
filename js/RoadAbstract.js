function RoadAbstract() {
	this.name = '';

	this.directionNames = {
		left : 'Go left',
		right : 'Go right',
		ahead : 'Continue',
		back : 'Gay',
		yes : 'Do it!',
		no : 'Pass'
	};

	this.actionNames = [
		"Beep Beep",
		"The force says",
		"Go crazy",
		"It is insane, but",
		"Wisdom tells",
		"Oh C'mon",
		"Freddy Mercury says:",
		"Lord Zaas his wish:",
		"Genius would be to",
		"By Thor's hammer:",
		"Fool!",
		"Great minds think alike:"
	];

	this.directions = [];
}

RoadAbstract.prototype.getAction = function() {
	return this.actionNames[ Math.floor( Math.random() * this.actionNames.length ) ];
};

RoadAbstract.prototype.getName = function() {
	return this.name;
};

RoadAbstract.prototype.decide = function() {
	var stack = [];

	for ( var direction in this.directions ) {
		for ( var i = 0; i < this.directions[ direction ]; i++ ) {
			stack.push( direction );
		}
	}

	var decide = stack[ Math.floor( Math.random() * stack.length ) ];

	return this.directionNames[ decide ];
};