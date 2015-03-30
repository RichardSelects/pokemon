var Engine = function() {

	this.screen = new Screen(maps);
	this.player = new Sprite();
	this.keyboard = new Keyboard();
	this.battle = new Battle();

	this.init = function() {
		this.screen.init();
		this.screen.render("pallet_town");
		this.player.init();
	}

	this.roll = function(odds) {
		return Math.random() < odds;
	}

	return this;
}

var Game = new Engine();
Game.init();