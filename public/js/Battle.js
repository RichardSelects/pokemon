var Battle = function() {

	this.startBattle = function() {
		var opponent = this.pickOpponent();
		Game.keyboard.context.activate("battle");
		Game.screen.createBattleScreen(opponent);
		//console.log("battle starting");
	}

	this.pickOpponent = function() {
		opponents = [];
		for (var i = 0; i < Game.screen.currentMap.pokemon.length; i++) {
			var opponent = Game.screen.currentMap.pokemon[i];
			for (var n = 0; n < opponent.frequency; n++) {
				opponents.push(opponent);
			}
		}
		return this.generateOpponent(opponents.random());
	}

	// Move to Pokemon class?
	this.generateOpponent = function(seed) {
		var pokemon = {
			species: seed.species,
			level: this.level(seed.minLevel, seed.maxLevel),
		}
		return pokemon;
	}

	this.level = function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	return this;

}