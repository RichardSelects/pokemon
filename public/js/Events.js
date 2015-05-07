var Events = function() {

	this.events = {};

	this.set = function(events) {
		this.events = events;
	}

	this.find = function(type, x, y) {
		for (var i = 0; i < this.events.length; i++) {
			var e = this.events[i];
			if (e.type == type && e.coordinates.x === x && e.coordinates.y === y)
			{
				return e;
			}
		}
		return false;
	}

	this.findById = function(id) {
		return (typeof this.events[id] == "undefined") ? false : this.events[id] ;
	}

	this.do = function(event) {
		this[event.type](event);
	}

	this.message = function(e) {
		Game.keyboard.context.activate("message");
		Game.screen.showMessage(e.content);
	}

	return this;

}