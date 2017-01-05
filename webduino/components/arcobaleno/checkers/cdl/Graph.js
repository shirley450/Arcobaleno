var PrivateParts = require('private-parts');
var Vertex = require('./Vertex.js');

var Graph = (function(){
	var _ = PrivateParts.createKey();
	var nVerts = 0;
	

	function Graph(vertexNum){
		_(this).adjMart = new Array();
		_(this).vertexList = new Array();
		_(this).adjMat = new Array();
		_(this).edgeLength = new Array();
		_(this).vertexNum = vertexNum;
		
		for(var i=0; i<_(this).vertexNum; i++){
			_(this).adjMat[i] = new Array();
			_(this).edgeLength[i] = new Array();
			for(var j=0; j<_(this).vertexNum; j++){
				_(this).adjMat[i][j] = -1;
				_(this).edgeLength[i][j] = -1;
			}
		}
		console.log(" Graph Constructor");
	}

	
	Graph.prototype.getVertexList = function() {
		return _(this).vertexList;
	}

	Graph.prototype.setVertexList = function(vertexList) {
		_(this).vertexList = vertexList;
	}

	Graph.prototype.getAdjMat = function() {
		return _(this).adjMat;
	}

	Graph.prototype.setAdjMat = function(adjMat) {
		_(this).adjMat = adjMat;
	}

	Graph.prototype.getN =function() {
	return _(this).vertexNum;
	}

	Graph.prototype.delEdge = function(start, end) {
		_(this).adjMat[start][end] = 0;
		_(this).edgeLength[start][end] = -1;
	}
	
	Graph.prototype.displayVertexVisited = function(i){
		return _(this).VertexList[i].getWasVisited();
	}

	Graph.prototype.printGraph = function(){
		var count=0;
		var str = "";
		for(i=0; i<_(this).vertexNum; i++){
			str = "";
		//console.log( i ,displayVertex(i));
			for(j=0; j<_(this).vertexNum; j++){
				str = "vertex No." + _(this).vertexList[i].getLabel() + '-' + _(this).vertexList[j].getLabel()+":"+_(this).edgeLength[i][j]+" ";
				console.log(str);
			}
			console.log(" ");
		}
	}

	Graph.prototype.addEdge = function(start, end) {
		_(this).adjMat[start][end] = 1;
		//_(this).edgeLength[start][end] = length;
	}

	Graph.prototype.addEdgeLength = function(start, end, length){
		_(this).edgeLength[start][end] = length;
	}

	Graph.prototype.getEdgeLength = function(start, end) {
		return _(this).edgeLength[start][end];
	}

	Graph.prototype.addVertex = function(label) {
		_(this).vertexList[nVerts++] = new Vertex(label, nVerts-1);
		//console.log(nVerts-1);

		//console.log("nVerts: ",nVerts, typeof ((this).vertexList[nVerts]));
	}

	return Graph;

	}());



module.exports = Graph;