var Engine = function() {

	this.screen = new Screen(maps);
	this.player = new Sprite();
	this.keyboard = new Keyboard();

	this.init = function() {
		this.screen.init();
		this.screen.render("pallet_town");
		this.player.init();
	}

	return this;
}

var Game = new Engine();
Game.init();