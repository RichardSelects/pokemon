// Array extensions
Array.prototype.random = function() {
	var counter = this.length, temp, index;
	while (counter > 0) {
		index = Math.floor(Math.random() * counter);
	    counter--;
		temp = this[counter];
		this[counter] = this[index];
		this[index] = temp;
	}
	return this[0];
}


// Object extensions
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

// Element extensions
Element.prototype.addClass = function(c) {
	if ( ! this.className.match(c)) {
		c = (this.className != "") ? " " + c : c ;
		this.className += c;
	}
	this.offsetHeight;
}

Element.prototype.removeClass = function(c) {
	var pattern = new RegExp(c, "g");
	this.className = this.className.replace(pattern, "").trim().replace(/\s{2,}/, " ");
	this.offsetHeight;
}

Element.prototype.hasClass = function(c) {
	return (this.className.match(c) == null) ? false : true ;
}

// String extensions
String.prototype.pluralize = function() {
	var str = (this.slice(-1) !== "s") ? this + "s" : this ;
	return str.toString();
}