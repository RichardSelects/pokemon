var Sprite = function() {

	this.x = 0;
	this.y = 0;

	this.height = 20;
	this.width = 20;

	this.init = function() {
		var el = document.createElement("div");
		el.setAttribute("id", "player");
		el.setAttribute("class", "player facing-down");
		this.$el = el;
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

	this.Walk = function(direction) {
		if (direction == "RIGHT" || direction == "LEFT") {
			var x = (direction == "RIGHT") ? this.getX() + 1 : this.getX() - 1 ,
				y = this.getY();
		} else if (direction == "UP" || direction == "DOWN") {
			var x = this.getX(),
				y = (direction == "UP") ? this.getY() - 1 : this.getY() + 1 ;
		}
		this.setPosition(x, y);
		this.$el.removeClass("(walking|facing)-(right|left|up|down)");
		this.$el.addClass("walking-" + direction.toLowerCase());
	}

	this.stopWalking = function() {

	}

	this.init();

	return this;

}