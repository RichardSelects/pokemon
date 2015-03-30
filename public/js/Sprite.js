var Sprite = function() {

	this.x = 0;
	this.y = 0;

	this.height = 20;
	this.width = 20;

	this.init = function() {
		this.$el = Game.screen.newDiv({id: "player", class: "player facing-down"});
		Game.screen.addToScreen(this.$el);
		this.setPosition(5, 6);
	}

	this.setPosition = function(x, y) {
		this.x = x;
		this.y = y;
		this.$el.style.left = (this.getX() * this.width) + "px";
		this.$el.style.top = (this.getY() * this.height) + "px";
	}

	this.getX = function() { return this.x; }
	this.getY = function() { return this.y; }

	this.isWalkable = function(x, y) {
		var tile = Game.screen.currentMap.collision_matrix[y][x];
		return tile.match(/f|t|g|m/);
	}

	this.Walk = function(direction) {
		this.$el.removeClass("(walking|facing)-(right|left|up|down)");
		this.$el.addClass("facing-" + direction.toLowerCase());
		if (direction == "RIGHT" || direction == "LEFT") {
			var x = (direction == "RIGHT") ? this.getX() + 1 : this.getX() - 1 ,
				y = this.getY();
		} else if (direction == "UP" || direction == "DOWN") {
			var x = this.getX(),
				y = (direction == "UP") ? this.getY() - 1 : this.getY() + 1 ;
		}
		if (this.isWalkable(x, y)) {
			this.setPosition(x, y);
			this.$el.removeClass("walking-(right|left|up|down)");
			this.$el.addClass("walking-" + direction.toLowerCase());
		}
	}

	this.stopWalking = function() {
		var self = this;
		setTimeout(function() {
			self.$el.removeClass("(walking)-(right|left|up|down)");
		}, 200);
	}

	this.facing = function() {
		var direction = this.$el.className.match(/facing-(right|left|up|down)/);
		switch (direction[1]) {
			case "right":
				var x = this.getX() + 1;
				var y = this.getY();
			break;
			case "left":
				var x = this.getX() - 1;
				var y = this.getY();
			break;
			case "up":
				var x = this.getX();
				var y = this.getY() - 1;
			break;
			case "down":
				var x = this.getX();
				var y = this.getY() + 1;
			break;
		}
		return {
			"direction": direction[1],
			"x": x,
			"y": y,
		};
	}

	this.interact = function() {
		var facing = this.facing(),
			x = facing.x,
			y = facing.y;
		for (var i = 0; i < Game.screen.currentMap.events.length; i++) {
			var e = Game.screen.currentMap.events[i];
			if (e.coordinates.x === x && e.coordinates.y === y) {
				Game.keyboard.context.activate("message");
				Game.screen.showMessage(e.content);
			}
		}
	}

	return this;

}