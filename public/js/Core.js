Object.prototype.activate = function(key) {
	for (var i in this) {
		if (this.hasOwnProperty(i)) {
			this[i] = (i == key) ? true : false ;
		}
	}
}

Object.prototype.invert = function() {
	var new_object = {};
	for (var prop in this) {
		if (this.hasOwnProperty(prop)) {
			new_object[this[prop]] = prop;
		}
	}
	return new_object;
}

Element.prototype.addClass = function(c) {
	if ( ! this.className.match(c)) {
		c = (this.className != "") ? " " + c : c ;
		this.className += c;
	}
}

Element.prototype.removeClass = function(c) {
	var pattern = new RegExp(c, "g");
	this.className = this.className.replace(pattern, "").trim().replace(/\s{2,}/, " ");
}