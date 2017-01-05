var PrivateParts = require('private-parts');
var Queue = (function() {
	var _ =  PrivateParts.createKey();

	function  Queue(){
		_(this).queue = new Array();
		_(this).length = 1001;
		_(this).head = 0;
		_(this).tail = 0;
	}

	Queue.prototype.enqueue = function(number) {
		if(((_(this).tail == _(this).length - 1) && (_(this).head == 0))
		 || (_(this).tail+1 == _(this).head)) {
		 	console.log("Overflow!!!");
			return false;
		}
		_(this).queue[_(this).tail] =  number;
		if(_(this).tail == _(this).length) {
			_(this).tail == 0;
		} else {
			_(this).tail++;
		}
	}

	Queue.prototype.dequeue = function() {
		var temp = 0; 
		if(_(this).head == _(this).tail) {
			console.log("Underflow!!!");
			return false;
		} 
		temp = _(this).queue[_(this).head];
		if (_(this).head == _(this).length -1) {
			_(this).head = 0;
		} else {
			_(this).head++;
		}
		 return temp;
	}

	Queue.prototype.get = function(i) {
		return _(this).queue[_(this).head + i];
	}

	Queue.prototype.isEmpty = function() {
		if(_(this).head == _(this).tail)return true;
		return false;
	}

	Queue.prototype.contains = function(key) {
		console.log("in queue.contains");
		var i = _(this).head;
		var j = _(this).tail;
		if(i < j) {
			while(i < j) {
				if(_(this).queue[i] == key) return true;
				i++;
			}
		} else if( i > j) {
			while(i < _(this).length - 1){
				if(_(this).queue[i] == key) return true;
				i++;
			}
			if(i == _(this).length - 1) i = 0;
			while(i < j){
				if(_(this).queue[i] == key) return true;
				i++;
			}
		}
		return false;
	}

	Queue.prototype.getSize = function() {
		return _(this).length-1;
	}

	return Queue;
}());

module.exports = Queue;