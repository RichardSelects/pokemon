var Sprite = function() {

	this.x = 0;
	this.y = 0;

	this.height = 20;
	this.width = 20;

	this.init = function() {
		this.$el = Game.screen.newDiv({id: "player", class: "player facing-down"});
		Game.screen.addToScreen(this.$el);
		this.setPosition(Game.screen.currentMap.start_position.x, Game.screen.currentMap.start_position.y);
		this.setScreenPosition(Math.round(Game.screen.dimensions.width / 2), Math.round(Game.screen.dimensions.height / 2));
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

	this.find = function(type, x, y) {
		type = type.pluralize();
		for (var i = 0; i < Game.screen.currentMap[type].length; i++) {
			var e = Game.screen.currentMap[type][i];
			if (e.coordinates.x === x && e.coordinates.y === y)
			{
				return e;
			}
		}
		return false;
	}

	this.isWalkable = function(x, y) {
		var tile = Game.screen.currentMap.collision_matrix[y][x];
		return (tile == "w");
	}

	this.isExit = function(x, y) {
		return this.find("exit", x, y);
	}

	this.Walk = function(direction) {
		this.$el.removeClass("(walking|facing)-(right|left|up|down)");
		this.$el.addClass("facing-" + direction.toLowerCase());
		var x = (direction == "RIGHT" || direction == "LEFT") ? (direction == "RIGHT") ? this.getX() + 1 : this.getX() - 1 : this.getX() ,
			y = (direction == "UP" || direction == "DOWN") ? (direction == "UP") ? this.getY() - 1 : this.getY() + 1 : this.getY() ;
		if (exit = this.isExit(x, y)) {
			Game.screen.exit(exit);
		} else if (this.isWalkable(x, y)) {

			this.setPosition(x, y);
			Game.screen.scroll(direction);
			this.$el.removeClass("walking-(right|left|up|down)");
			this.$el.addClass("walking-" + direction.toLowerCase());
		}
	}

	this.stopWalking = function() {
		var self = this;
		setTimeout(function() {
			self.$el.removeClass("(walking)-(right|left|up|down)");
		}, 100);
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
			e = this.find("event", facing.x, facing.y);
		if (e !== false) {
			switch (e.type) {
				case "message":
					Game.keyboard.context.activate("message");
					Game.screen.showMessage(e.content);
				break;
			}
		}
	}

	return this;

}