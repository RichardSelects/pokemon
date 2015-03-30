var Screen = function(maps) {

	this.maps = maps;

	this.init = function() {
		this.$el = this.newDiv({"class": "screen"});
		this.$pauseMenu = this.newDiv({id: "pause"});
		document.body.insertBefore(this.$el, document.body.firstChild);
	}

	this.newDiv = function(attributes) {
		el = document.createElement("div");
		if (typeof attributes == "object") {
			for (var attribute in attributes) {
				if (attributes.hasOwnProperty(attribute)) {
					el.setAttribute(attribute, attributes[attribute]);	
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
		this.message = this.newDiv({class: "message"});
		this.message.innerHTML = text;
		this.$el.appendChild(this.message);
	}

	this.hideMessgae = function() {
		Game.keyboard.context.activate("roam");
		this.message.remove();
	}

	return this;	

}