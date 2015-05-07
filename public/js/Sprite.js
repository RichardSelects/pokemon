var Sprite = function() {

	this.x = 0;
	this.y = 0;

	this.height = 20;
	this.width = 20;

	this.facing = "down";

	this.init = function() {
		this.$el = Game.screen.newDiv({id: "player", class: "player facing-down"});
		Game.screen.addToScreen(this.$el);
		this.setPosition(Game.screen.currentMap.start_position.x, Game.screen.currentMap.start_position.y);
		this.setScreenPosition(Math.round(Game.screen.dimensions.width / 2), Math.round(Game.screen.dimensions.height / 2), true);
	}

	this.setFacing = function(direction) {
		var dir = direction.toLowerCase();
		this.facing = dir;
		this.$el.addClass("facing-" + dir);
	}

	this.setPosition = function(x, y) {
		this.x = x;
		this.y = y;
	}

	this.setScreenPosition = function(x, y, instant) {
		if (instant == true) this.$el.addClass("instant");
		this.$el.style.left = (x * this.width) + "px";
		this.$el.style.top = (y * this.height) + "px";
		if (instant == true) this.$el.removeClass("instant");
	}

	this.getX = function() { return this.x; }
	this.getY = function() { return this.y; }

	this.Walk = function(direction) {
		var x = (direction == "RIGHT" || direction == "LEFT") ? (direction == "RIGHT") ? this.getX() + 1 : this.getX() - 1 : this.getX() ,
			y = (direction == "UP" || direction == "DOWN") ? (direction == "UP") ? this.getY() - 1 : this.getY() + 1 : this.getY() ;
		this.setFacing(direction);
		if (exit = Game.screen.isExit(x, y)) {
			Game.screen.exit(exit);
		} else if (Game.screen.isWalkable(x, y)) {
			this.setPosition(x, y);
			Game.screen.scroll(direction);
			if ( ! this.$el.hasClass("walking-" + direction.toLowerCase())) {
				this.$el.removeClass("(walking|facing)-(right|left|up|down)");
				this.$el.addClass("walking-" + direction.toLowerCase());
			}
		}
	}

	this.stopWalking = function() {
		var self = this;
		setTimeout(function() {
			self.$el.removeClass("(walking|facing)-(right|left|up|down)");
			self.$el.addClass("facing-" + self.facing);
		}, 200);
	}

	this.getDirection = function() {
		var direction = this.$el.className.match(/(facing|walking)-(right|left|up|down)/),
			x = (direction[2] == "up" || direction[2] == "down") ? this.getX() : (direction[2] == "left") ? this.getX() - 1 : this.getX() + 1 ,
			y = (direction[2] == "left" || direction[2] == "right") ? this.getY() : (direction[2] == "up") ? this.getY() - 1 : this.getY() + 1 ;
		return {
			"direction": direction[2],
			"x": x,
			"y": y,
		};
	}

	this.interact = function() {
		var facing = this.getDirection(),
			e = Game.events.findByMethod("interact", facing.x, facing.y);
		if (e !== false) {
			Game.events.do(e);
		}
	}

	return this;

}