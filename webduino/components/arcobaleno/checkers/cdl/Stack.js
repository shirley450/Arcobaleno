var PrivateParts = require('private-parts');

var Stack = (function() {
	var _ = PrivateParts.createKey();

	function Stack(){
		_(this).stack = new Array();
		_(this).top = -1;
	}

	Stack.prototype.push = function(number) {
		_(this).top ++;
		_(this).stack[_(this).top] = number;
	}


	Stack.prototype.isEmpty = function() {
		if(_(this).top == -1) {
			return true;
		} else {
			return false;
		}
	}

	Stack.prototype.pop = function() {
		if(_(this).top == -1) {
			return false;
		}
		var temp = _(this).stack[_(this).top];
		_(this).top --;
		return temp;
	}

	Stack.prototype.peek = function() {
		if(_(this).top == -1) {
			return false;
		}
		return _(this).stack[_(this).top];		
	}

	Stack.prototype.size = function() {
		return _(this).top+1;
	};

	Stack.prototype.contains = function(key) {
		for(var j = 0; j <= _(this).top; j++){
			if(_(this).stack[j] == key)return true;
		}
		return false;
	}

	Stack.prototype.printStack = function() {
		var i = 0 ;
		var str = '';
		for(i = 0; i <= _(this).top; i++){
			str = str + _(this).stack[i].toString() + ' ';
		}
		console.log(str);
	}

	Stack.prototype.getIth = function(i) {
		return _(this).stack[i];
	}

	return Stack;

}());
module.exports = Stack;