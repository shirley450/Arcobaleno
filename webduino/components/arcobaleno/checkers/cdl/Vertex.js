var PrivateParts = require('private-parts');
var Vertex = (function() {
	var _ = PrivateParts.createKey();

	function Vertex(label, num) {
		_(this).label = label;
		_(this).id = id;
		_(this).wasVisited = false;
	}

	Vertex.prototype.setAllVisitedList = function(allVisitedList) {
		_(this).allVisitedList = allVisitedList;
	}

	Vertex.prototype.getAllVisitedList = function() {
		return _(this).allVisitedList;
	}

	Vertex.prototype.setWasVisited = function(wasVisited) {
		_(this).wasVisited = wasVisited;
	}

	Vertex.prototype.getWasVisited = function() {
		return _(this).wasVisited;
	}

	Vertex.prototype.setLabel = function(label) {
		_(this).label = label;
	}

	Vertex.prototype.setId = function(num) {
		_(this).id = id;
	}

	Vertex.prototype.getId = function() {
		return _(this).id;
	}


	Vertex.prototype.getLabel = function() {
		return  _(this).label;
	}

	Vertex.prototype.setVisited = function(j) {
		_(this).allVisitedList[j] = 1;
	} 

	return Vertex;

}());

module.exports = Vertex;

