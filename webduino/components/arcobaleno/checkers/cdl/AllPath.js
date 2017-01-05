var PrivateParts = require('private-parts');
var Graph = require('./Graph.js');
var Vertex = require('./Vertex.js');
var Stack = require('./Stack.js');
var Queue = require('./Queue.js');

var AllPath = (function() {
	var _ = PrivateParts.createKey();
	var stack = new Stack();
	var n = 0;
	var start = 0;
	var end = 0;
	var pathExist = true; 
	var tempList = new Array();

	function AllPath(graph, start, end){
		_(this).graph = graph;
		_(this).start = start;
		_(this).end = end;
	}

	AllPath.prototype.getResult = function() {
		n = _(this).graph.getN();
		stack = new Stack();
		//console.log(isConnectable(_(this).start, _(this).end, _(this).graph));
		if(!isConnectable(_(this).start, _(this).end)){
		 //if(false){
			var pathExist = false;
			var prompt = 'component ' + _(this).start + 'and ' + _(this).end + 'are not Connectable';
			console.log(prompt);
		} else {
			for (var i = 0; i < n; i++) {
				tempList = new Array();
				for(var j = 0; j < n; j++) {
					tempList[j] = 0;
				}
				_(this).graph.getVertexList()[i].setAllVisitedList(tempList);
		}
		pathExist = FindAllPath(_(this).start, _(this).end, _(this).graph);
	}
	return pathExist;
}

var isConnectable = function(start, end, g) {
		var queue = new Array();
		var visited = new Array();
		var qTail = 0;
		var vTail = 0;
		queue[qTail] = start;
		qTail++;	
		while(queue.length !== 0) {
			for(var j = 0; j < n; j++) {
				if(g.getAdjMat()[start][j] == 1 && visited.indexOf[j] == -1) {
					queue[qTail++] = j;
				}
			}
			if(queue.indexOf(end) !== -1) {
				return true;
			} else {
				visited[vTail++] = queue[0];
				queue.splice(0,1);
				if(queue.length !== 0) {
					start = queue[0];
				}
			}
		}
		return false;
	}
	
	var FindAllPath = function(start, end, g) {
		var exist = false;
		stack.push(start);
		var path = start.toString();
		while(!stack.isEmpty()) {

			var v =  getUnvisitedVertex(stack.peek(), g);
			if(v == -1) {
				tempList = new Array();
				for(var j = 0 ;j < n; j++) {
					tempList[j] = 0;
				}
				g.getVertexList()[stack.peek()].setAllVisitedList(tempList);
				stack.pop();
			} else {
				stack.push(v);
			}
			if(!stack.isEmpty() && end == stack.peek()) {
				exist = true;
				var pathLength = 0;
				var pre = start;
				g.getVertexList()[end].setWasVisited(false);

				for(var i = 1 ; i < stack.size(); i++) {
					path = path +  "-->" + stack.getIth(i).toString() + " ";
					pathLength = pathLength + g.getEdgeLength(pre, stack.getIth(i));
					console.log(pre, "-->", stack.getIth(i), ": ", g.getEdgeLength(pre, stack.getIth(i)), " sum:" , pathLength);
					pre = stack.getIth(i);
				}
				console.log(path);
				console.log("pathLength:" , pathLength);
				stack.pop();
				path = start.toString();
			}
		}
		return exist;
	}

	var getUnvisitedVertex = function(v, g) {
		var arrayList = g.getVertexList()[v].getAllVisitedList();
		for(var i = 0 ; i < n; i++){
			if(g.getAdjMat()[v][i] == 1 && arrayList[i] == 0 
				&& !stack.contains(i)) {
				g.getVertexList()[v].setVisited(i);
				return i;
			}
		}
		return -1;
	}
	return AllPath;
}());

var g = new Graph();
		g.addVertex('A');  
    g.addVertex('B');  
    g.addVertex('C');  
    g.addVertex('D');  
    g.addVertex('E');  
    g.addVertex('F');  
    g.addVertex('G'); 
   // console.log('gae',g.getVertexList()[3].getLabel());
    g.addEdge(0, 1, 2);  
    g.addEdge(0, 2, 4);  
    g.addEdge(1, 4, 5);  
    g.addEdge(2, 0, 0);
    g.addEdge(2, 5, 9);  
    g.addEdge(3, 0, 1);  
    g.addEdge(3, 2, 3);  
    g.addEdge(3, 3, 5);   
    g.addEdge(4, 1, 1);  
    g.addEdge(4, 2, 2);  
    g.addEdge(5, 6, 3);  
    g.addEdge(6, 3, 5);
    //g.printGraph();
var ap = new AllPath(g, 2, 4);
console.log(ap.getResult());