var Screen = function() {

	this.$el = document.createElement("div");
	this.$el.className = "screen";

	document.body.insertBefore(this.$el, document.body.firstChild);

	return this;	

}