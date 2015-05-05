var Keyboard = function() {

	var keyMap = {
		"UP": 38,
		"RIGHT": 39,
		"DOWN": 40,
		"LEFT": 37,

		"A": 90,
		"B": 88,

		"START": 13,
		"SELECT": 16,
	};

	this.context = {
		"message": false,
		"menu": false,
		"roam": true,
		"map": false,
		"battle": false,
	};

	this.listen = true;

	this.init = function() {
		this.bindEvents();
	}

	this.bind = function(scope, fn) {
		return function() {
			fn.apply(scope, arguments);
		}
	}

	this.bindEvents = function()
	{
		document.addEventListener("keydown", this.bind(this, this.keyPress), false);
		document.addEventListener("keyup", this.bind(this, this.clearAction), false);
	}

	this.inContext = function(ctx) {
		var context = this.context.invert();
		return (ctx == context[true])
	}

	this.getContext = function() {
		var context = this.context.invert();
		return context[true];
	}

	this.keyPress = function(e) {
		var map = keyMap.invert();
		if (typeof map[e.keyCode] != 'undefined' && this.listen === true) {
			this.buttonPress(map[e.keyCode]);
		}
	}

	this.buttonPress = function(button) {
		var ctx = this.getContext();
		switch (button) {
			case "START":
				if (ctx === "roam") {
					this.context.activate("menu")
					Game.screen.showPauseMenu();
				} else if (ctx === "menu") {
					Game.screen.hidePauseMenu();
					this.context.activate("roam")
				}
			break;
			case "SELECT":
				if (ctx === "roam") {
					//this.context.activate("map");
				} else if (ctx === "map") {
					//this.context.activate("roam");
				}
			break;
			case "UP":
			case "RIGHT":
			case "DOWN":
			case "LEFT":
				if (ctx === "roam") {
					Game.player.Walk(button);
				}
			break;
			case "A":
				switch (ctx) {
					case "message":
						Game.screen.hideMessgae();
					break;
					case "roam":
						Game.player.interact();
					break;
				}
			break;
			case "B":
				case "message":
					Game.screen.hideMessgae();
				break;
			break;
		}
	}

	this.clearAction = function(e) {
		if (this.listen === true) {
			var ctx = this.getContext();
			switch (ctx) {
				case "roam":
					Game.player.stopWalking();
				break;
			}
		}
	}

	this.init();

	return this;

}