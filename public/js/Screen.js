var Screen = function(maps) {

	this.maps = maps;

	this.init = function() {
		this.$el = this.newDiv({ "class": "screen" });
		this.$pauseMenu = this.newDiv({ id: "pause", content: "Paused" });
		this.addToScreen(this.$pauseMenu);
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
		this.currentMap = this.maps[map];
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

	return this;	

}