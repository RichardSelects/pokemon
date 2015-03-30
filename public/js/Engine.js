var Engine = function() {

	this.screen = new Screen();
	this.player = new Sprite();
	this.keyboard = new Keyboard();

	this.init = function() {
		this.screen.$el.appendChild(this.player.$el);
	}

	return this;
}

var Game = new Engine();
Game.init();