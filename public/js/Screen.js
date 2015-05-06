var Screen = function(maps) {

	this.maps = maps;
	this.maps_dir = "public/img/";
	this.dimensions = { width: 16, height: 16, tile: 20 };

	this.init = function() {
		this.$el = this.newDiv({ "class": "screen" });
		this.$pauseMenu = this.newDiv({ id: "pause", content: "Paused" });
		this.$transition = this.newDiv({ id: "transition" });
		this.addToScreen(this.$pauseMenu);
		this.addToScreen(this.$transition);
		document.body.insertBefore(this.$el, document.body.firstChild);
	}

	this.newDiv = function(attributes) {
		el = document.createElement("div");
		if (typeof attributes == "object") {
			for (var attribute in attributes) {
				if (attributes.hasOwnProperty(attribute)) {
					if (attribute == "content") {
						el.innerHTML = attributes[attribute];
					} else {
						el.setAttribute(attribute, attributes[attribute]);	
					}
				}
			}
		}
		return el;
	}

	this.addToScreen = function(el) {
		this.$el.appendChild(el);
	}

	this.render = function(map) {
		if (typeof this.maps[map] == "undefined")
		{
			console.error("Map not found!");
		}
		this.currentMap = this.maps[map];
		this.$el.style.backgroundImage = 'url("' + this.maps_dir + this.currentMap.image + '")';
		this.$el.style.backgroundSize = (this.currentMap.dimensions.width * this.dimensions.tile) + "px " + (this.currentMap.dimensions.height * this.dimensions.tile) + "px";
		if (typeof this.currentMap.start_position != "undefined") {
			this.scrollTo(this.currentMap.start_position.x, this.currentMap.start_position.y, 0);
		}
	}

	this.needsScroll = function(x, y) {
		return (x >= this.dimensions.width - 2 || x == 1 || y == 1 || y >= this.dimensions.height - 2)
	}

	this.scroll = function(direction) {
		var pos = this.$el.style.backgroundPosition.split(" ");
		var x = (direction === "LEFT" || direction === "RIGHT") ? (direction === "RIGHT") ? parseInt(pos[0]) - this.dimensions.tile : parseInt(pos[0]) + this.dimensions.tile : parseInt(pos[0]) ,
			y = (direction === "UP" || direction === "DOWN") ? (direction === "DOWN") ? parseInt(pos[1]) - this.dimensions.tile : parseInt(pos[1]) + this.dimensions.tile : parseInt(pos[1]) ;
		this.$el.style.backgroundPosition = x + "px " + y + "px";
	}

	this.scrollTo = function(x, y, instant) {
		var x = (-1 * (x - Math.round(this.dimensions.width / 2)) * this.dimensions.tile),
			y = (-1 * (y - Math.round(this.dimensions.height / 2)) * this.dimensions.tile);
		if (instant == true) this.$el.addClass("instant");
		this.$el.style.backgroundPosition = x + "px " + y + "px";
		if (instant == true) this.$el.removeClass("instant");
	}

	this.exit = function(exit) {
		var self = this,
			x = this.onScreenPositionX(exit.destination.coordinates.x),
			y = this.onScreenPositionY(exit.destination.coordinates.y);
		Game.keyboard.listen(false);
		this.fadeToBlack(function() {
			Game.player.stopWalking();
			Game.player.setPosition(exit.destination.coordinates.x, exit.destination.coordinates.y);
			self.render(exit.destination.map);
			self.scrollTo(exit.destination.coordinates.x, exit.destination.coordinates.y, true);
		});
	}

	this.onScreenPositionX = function(x) {
		return (x >= this.dimensions.width) ? this.dimensions.width - 1 : x ;
	}

	this.onScreenPositionY = function(y) {
		return (y >= this.dimensions.height) ? this.dimensions.height - 1 : y ;
	}

	this.fadeToBlack = function(callback) {
		var self = this;
		Game.keyboard.listen(false);
		this.$transition.removeClass("out");
		this.$transition.addClass("in");
		setTimeout(function() {
			if (typeof callback == "function") {
				callback();
			}
			setTimeout(function() {
				self.$transition.removeClass("in");
				self.$transition.addClass("out");
				Game.keyboard.listen(true);
			}, 200);
		}, 500);
	}

	// Probably need to abstract messages into their own class (for confirmations and inputs)
	this.showMessage = function(text) {
		this.message = this.newDiv({ class: "message" });
		this.message.innerHTML = text;
		this.$el.appendChild(this.message);
	}

	this.hideMessgae = function() {
		Game.keyboard.context.activate("roam");
		this.message.remove();
	}

	this.battleScreen = function() {
		var el = this.newDiv({ id: "battle"})
	}

	this.showPauseMenu = function() {
		this.$pauseMenu.style.display = "block";
	}

	this.hidePauseMenu = function() {
		this.$pauseMenu.style.display = "none";
	}

	// Battle mechanics to come later, focus on maps and events
	/*
	this.createBattleScreen = function(opponent) {
		this.$battleScreen = this.newDiv({ id: "battle" });
		this.addOpponent(opponent);
		this.addToScreen(this.$battleScreen);
	}

	this.addOpponent = function(opponent) {
		console.log(opponent);
		var $opponentSprite = this.newDiv({ class: "opponent" });
		$opponentSprite.innerHTML = '<img src="public/img/' + opponent.species + '-front.png">';
		this.$battleScreen.appendChild($opponentSprite);
		$opponentSprite.style.left = "280px";
	}
	*/

	return this;	

}