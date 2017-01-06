(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./Vertex.js":2,"private-parts":14}],2:[function(require,module,exports){
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


},{"private-parts":14}],3:[function(require,module,exports){
var PrivateParts = require('private-parts');
var Graph = require('./Graph');
//var assert = require('assert.js');
var libxml = require("libxmljs");
var xmlParser = require('./xmlParser.js');
//var libxmljs = require("libxmljs");
var xml = '<?xml version="1.0"?><comment><author>author</author><content>nothing</content></comment>';

//fs.readFileSync("./cdl.xml", "utf8");
var xsd = '<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"><xs:element name="comment"><xs:complexType><xs:all><xs:element name="author" type="xs:string"/><xs:element name="content" type="xs:string"/></xs:all></xs:complexType></xs:element></xs:schema>';
//fs.readFileSync("./schema.xsd", "utf8");
console.log("cdl is valid? ",xmlParser.checker(xml, xsd));


},{"./Graph":1,"./xmlParser.js":4,"libxmljs":6,"private-parts":14}],4:[function(require,module,exports){
//var fs = require('fs');
var PrivateParts = require('private-parts');
var Graph = require('./Graph');
//var assert = require('assert.js');
var libxml = require("libxmljs");

/*var xmlParser = (function(xml){
	var xsd = fs.readFileSync("./schema.xsd", "utf8");
	var xsdDoc = libxml.parseXml(xsd);
	//var xml = fs.readFileSync("./cdl.xml", "utf8");
	var xmlDoc = libxml.parseXml(xml);
	console.log(xmlDoc.validate(xsdDoc));
	console.log(xmlDoc.validationErrors);
	//dataPreprocessing(xml);
	return xmlParser;
}());
*/
exports.checker = function(xml, xsd) {
	
	//var xsd = fs.readFileSync("./schema.xsd", "utf8");
	var xsdDoc = libxml.parseXml(xsd);
	//var xml = fs.readFileSync("./cdl.xml", "utf8");
	var xmlDoc = libxml.parseXml(xml);
	console.log(xmlDoc.validate(xsdDoc));
	console.log(xmlDoc.validationErrors);
	var str = xmlDoc.validate(xsdDoc);
	var err = xmlDoc.validationErrors;
	//dataPreprocessing(xml);
	console.log("test checker");
	return true;
};

function dataPreprocessing(data){
	var xmlDoc = libxml.parseXml(data.toString());
	var start = new Array();
	var end = new Array();
	var tpre = new Array();
	var tnext = new Array();
	

	start = getAttributeOfValue("//component", "type", "start","name", xmlDoc);
	end = getAttributeOfValue("//component", "type", "end", "name", xmlDoc);
	tpre = getAttributeText("//connection", "./from", "name", xmlDoc);
	tnext = getAttributeText("//connection", "./to", "name", xmlDoc);
	//console.log("start: ",start.toString());
	//console.log("end",end.toString());
	//console.log("tpre",tpre.toString());
	//console.log("tend",tnext.toString());
	var components = xmlDoc.find("//component");
	var g = new Graph(components.length);
	var vertex = new Array();
	var nameToIndex = new Array();
	var i = 0;
	
	//console.log("components.length: ", components.length);

	if(components !== null) {
		for(i = 0; i < components.length; i++) {
			//console.log(components[i].attr("name").value(), i);
			g.addVertex(components[i].attr("name").value());
			nameToIndex[components[i].attr("name").value()] = i;
		}
	}

	for(i = 0 ; i < tpre.length; i++) {
		for(var j = 0; j < tpre[i].length; j++) {
			for(var k = 0; k < tnext[i].length; k++)
		  g.addEdge(nameToIndex[tpre[i][j]], nameToIndex[tnext[i][k]]);
		}
	}

	g.printGraph();
	//add edge length 
	var rules = xmlDoc.find("//rule");
	for(var i = 0; i < rules.length; i++) {
		if(rules[i].attr("type").value() == "timeout") {
			var pathstart = rules[i].get("start").attr("from").value();
			var pathend = rules[i].get("end").attr("to").value();
			console.log(pathstart, pathend);











			
		}
	}
	
}

function getAttributeOfValue(tag, attrIndex, value, attrKey ,xmlDoc){
	var components = xmlDoc.find(tag);
	var set = new Array();
	var count = 0;
	for(var i=0; i<components.length; i++){
 		if(components[i].attr(attrIndex)){
 			if(components[i].attr(attrIndex).value() == value){
 				set[count] = components[i].attr(attrKey).value();
 				count++;
 			}
 		}
 	}
 	console.log(set.toString());
 	return set;
}

function getAttributeText(tag1, tag2, attr, xmlDoc){
	var connections = xmlDoc.find(tag1);
	var result = new Array();
	if(connections == null) console("connections is null !!!");
	for(var i=0; i<connections.length; i++){
		var children  = connections[i].find(tag2);
		var temp = new Array();
		for(var j= 0; j<children.length; j++){
			temp[j] = children[j].attr("name").value();
		}
		result[i] = temp;
	}
	return result;
}


},{"./Graph":1,"libxmljs":6,"private-parts":14}],5:[function(require,module,exports){
(function (process,__filename){

/**
 * Module dependencies.
 */

var fs = require('fs')
  , path = require('path')
  , join = path.join
  , dirname = path.dirname
  , exists = fs.existsSync || path.existsSync
  , defaults = {
        arrow: process.env.NODE_BINDINGS_ARROW || ' → '
      , compiled: process.env.NODE_BINDINGS_COMPILED_DIR || 'compiled'
      , platform: process.platform
      , arch: process.arch
      , version: process.versions.node
      , bindings: 'bindings.node'
      , try: [
          // node-gyp's linked version in the "build" dir
          [ 'module_root', 'build', 'bindings' ]
          // node-waf and gyp_addon (a.k.a node-gyp)
        , [ 'module_root', 'build', 'Debug', 'bindings' ]
        , [ 'module_root', 'build', 'Release', 'bindings' ]
          // Debug files, for development (legacy behavior, remove for node v0.9)
        , [ 'module_root', 'out', 'Debug', 'bindings' ]
        , [ 'module_root', 'Debug', 'bindings' ]
          // Release files, but manually compiled (legacy behavior, remove for node v0.9)
        , [ 'module_root', 'out', 'Release', 'bindings' ]
        , [ 'module_root', 'Release', 'bindings' ]
          // Legacy from node-waf, node <= 0.4.x
        , [ 'module_root', 'build', 'default', 'bindings' ]
          // Production "Release" buildtype binary (meh...)
        , [ 'module_root', 'compiled', 'version', 'platform', 'arch', 'bindings' ]
        ]
    }

/**
 * The main `bindings()` function loads the compiled bindings for a given module.
 * It uses V8's Error API to determine the parent filename that this function is
 * being invoked from, which is then used to find the root directory.
 */

function bindings (opts) {

  // Argument surgery
  if (typeof opts == 'string') {
    opts = { bindings: opts }
  } else if (!opts) {
    opts = {}
  }
  opts.__proto__ = defaults

  // Get the module root
  if (!opts.module_root) {
    opts.module_root = exports.getRoot(exports.getFileName())
  }

  // Ensure the given bindings name ends with .node
  if (path.extname(opts.bindings) != '.node') {
    opts.bindings += '.node'
  }

  var tries = []
    , i = 0
    , l = opts.try.length
    , n
    , b
    , err

  for (; i<l; i++) {
    n = join.apply(null, opts.try[i].map(function (p) {
      return opts[p] || p
    }))
    tries.push(n)
    try {
      b = opts.path ? require.resolve(n) : require(n)
      if (!opts.path) {
        b.path = n
      }
      return b
    } catch (e) {
      if (!/not find/i.test(e.message)) {
        throw e
      }
    }
  }

  err = new Error('Could not locate the bindings file. Tried:\n'
    + tries.map(function (a) { return opts.arrow + a }).join('\n'))
  err.tries = tries
  throw err
}
module.exports = exports = bindings


/**
 * Gets the filename of the JavaScript file that invokes this function.
 * Used to help find the root directory of a module.
 * Optionally accepts an filename argument to skip when searching for the invoking filename
 */

exports.getFileName = function getFileName (calling_file) {
  var origPST = Error.prepareStackTrace
    , origSTL = Error.stackTraceLimit
    , dummy = {}
    , fileName

  Error.stackTraceLimit = 10

  Error.prepareStackTrace = function (e, st) {
    for (var i=0, l=st.length; i<l; i++) {
      fileName = st[i].getFileName()
      if (fileName !== __filename) {
        if (calling_file) {
            if (fileName !== calling_file) {
              return
            }
        } else {
          return
        }
      }
    }
  }

  // run the 'prepareStackTrace' function above
  Error.captureStackTrace(dummy)
  dummy.stack

  // cleanup
  Error.prepareStackTrace = origPST
  Error.stackTraceLimit = origSTL

  return fileName
}

/**
 * Gets the root directory of a module, given an arbitrary filename
 * somewhere in the module tree. The "root directory" is the directory
 * containing the `package.json` file.
 *
 *   In:  /home/nate/node-native-module/lib/index.js
 *   Out: /home/nate/node-native-module
 */

exports.getRoot = function getRoot (file) {
  var dir = dirname(file)
    , prev
  while (true) {
    if (dir === '.') {
      // Avoids an infinite loop in rare cases, like the REPL
      dir = process.cwd()
    }
    if (exists(join(dir, 'package.json')) || exists(join(dir, 'node_modules'))) {
      // Found the 'package.json' file or 'node_modules' dir; we're done
      return dir
    }
    if (prev === dir) {
      // Got to the top
      throw new Error('Could not find module root given file: "' + file
                    + '". Do you have a `package.json` file? ')
    }
    // Try the parent dir next
    prev = dir
    dir = join(dir, '..')
  }
}

}).call(this,require('_process'),"/../../../../../../../../node_modules/bindings/bindings.js")
},{"_process":18,"fs":15,"path":17}],6:[function(require,module,exports){
// js acts as a wrapper to the c++ bindings
// prefer to do error handling and other abstrctions in the
// js layer and only go to c++ when we need to hit libxml
var bindings = require('./lib/bindings');

// document parsing for backwards compat
var Document = require('./lib/document');

/// parse an xml string and return a Document
module.exports.parseXml = Document.fromXml;

/// parse an html string and return a Document
module.exports.parseHtml = Document.fromHtml;
module.exports.parseHtmlFragment = Document.fromHtmlFragment;

// constants
module.exports.version = require('./package.json').version;
module.exports.libxml_version = bindings.libxml_version;
module.exports.libxml_parser_version = bindings.libxml_parser_version;
module.exports.libxml_debug_enabled = bindings.libxml_debug_enabled;
module.exports.features = bindings.features;

// lib exports
module.exports.Comment = require('./lib/comment');
module.exports.Document = Document;
module.exports.Element = require('./lib/element');
module.exports.Text = require('./lib/text');

// Compatibility synonyms
Document.fromXmlString = Document.fromXml;
Document.fromHtmlString = Document.fromHtml;
module.exports.parseXmlString = module.exports.parseXml;
module.exports.parseHtmlString = module.exports.parseHtml;

var sax_parser = require('./lib/sax_parser');
module.exports.SaxParser = sax_parser.SaxParser;
module.exports.SaxPushParser = sax_parser.SaxPushParser;

module.exports.memoryUsage = bindings.xmlMemUsed;

module.exports.nodeCount = bindings.xmlNodeCount;

},{"./lib/bindings":7,"./lib/comment":8,"./lib/document":9,"./lib/element":10,"./lib/sax_parser":11,"./lib/text":12,"./package.json":13}],7:[function(require,module,exports){
module.exports = require('bindings')('xmljs');

},{"bindings":5}],8:[function(require,module,exports){
var bindings = require('./bindings');

var Document = require('./document');

/// create a new comment on the given document
/// @param doc the Document to create the comment for
/// @param {String} [content] comment content
/// @constructor
var Comment = function(doc, content) {
    if (!doc) {
        throw new Error('document argument required');
    } else if (! (doc instanceof bindings.Document)) {
        throw new Error('document argument must be an ' +
                        'instance of Document');
    }

    return new bindings.Comment(doc, content);
};

Comment.prototype = bindings.Comment.prototype;

module.exports = Comment;


},{"./bindings":7,"./document":9}],9:[function(require,module,exports){
var bindings = require('./bindings');

var Element = require('./element');

function assertRoot(doc) {
    if(!doc.root()) {
        throw new Error('Document has no root element');
    }
}

/// Create a new document
/// @param {string} version xml version, default 1.0
/// @param {string} encoding the encoding, default utf8
/// @constructor
function Document(version, encoding) {
    version = version || '1.0';
    var doc = new bindings.Document(version);
    doc.encoding(encoding || 'utf8');
    return doc;
}

Document.prototype = bindings.Document.prototype;

/// get or set the root element
/// if called without any arguments, this will return the document root
/// @param {Element} [elem] if specified, this will become the new document root
Document.prototype.root = function(elem) {
    return this._root(elem);
};

/// add a child node to the document
/// this will set the document root
Document.prototype.node = function(name, content) {
    return this.root(Element(this, name, content));
};

/// xpath search
/// @return array of matching elements
Document.prototype.find = function(xpath, ns_uri) {
    assertRoot(this);

    return this.root().find(xpath, ns_uri);
};

/// xpath search
/// @return first element matching
Document.prototype.get = function(xpath, ns_uri) {
    assertRoot(this);

    return this.root().get(xpath, ns_uri);
};

/// @return a given child
Document.prototype.child = function(id) {
    if (id === undefined || typeof id !== 'number') {
        throw new Error('id argument required for #child');
    }

    assertRoot(this);

    return this.root().child(id);
};

/// @return an Array of child nodes of the document root
Document.prototype.childNodes = function() {
    assertRoot(this);

    return this.root().childNodes();
};

/// @return a string representation of the document
Document.prototype.toString = function(formatted) {
    return this._toString(formatted !== undefined ? formatted : true);
};

/// @return the document version
Document.prototype.version = function() {
    return this._version();
};

/// @return the document encoding
Document.prototype.encoding = function(encoding) {
    return this._encoding(encoding);
};

/// @return whether the XmlDocument is valid
Document.prototype.validate = function(xsd) {
    return this._validate(xsd);
};

/// @return whether the XmlDocument is valid using Relaxed NG
Document.prototype.rngValidate = function(rng) {
    return this._rngValidate(rng);
};

Document.prototype.getDtd = function() {
    return this._getDtd();
};

Document.prototype.setDtd = function(name, ext, sys) {
    if (!name) {
        throw new Error('Must pass in a DTD name');
    } else if (typeof name !== 'string') {
        throw new Error('Must pass in a valid DTD name');
    }

    var params = [name];
    if (typeof ext !== 'undefined') {
        params.push(ext);
    }
    if (ext && typeof sys !== 'undefined') {
        params.push(sys);
    }

    return this._setDtd.apply(this, params);
};

/// @return array of namespaces in document
Document.prototype.namespaces = function() {
    assertRoot(this);

    return this.root().namespaces();
};

Document.prototype.type = function() {
    return 'document';
};

module.exports = Document;

/// parse a string into a html document
/// @param string html string to parse
/// @param {encoding:string, baseUrl:string} opts html string to parse
/// @return a Document
module.exports.fromHtml = function(string, opts) {
    opts = opts || {};

    // if for some reason user did not specify an object for the options
    if (typeof(opts) !== 'object') {
        throw new Error('fromHtml options must be an object');
    }

    return bindings.fromHtml(string, opts);
};

/// parse a string into a html document fragment
/// @param string html string to parse
/// @param {encoding:string, baseUrl:string} opts html string to parse
/// @return a Document
module.exports.fromHtmlFragment = function(string, opts) {
    opts = opts || {};

    // if for some reason user did not specify an object for the options
    if (typeof(opts) !== 'object') {
        throw new Error('fromHtmlFragment options must be an object');
    }

    opts.excludeImpliedElements = true;

    return bindings.fromHtml(string, opts);
};

/// parse a string into a xml document
/// @param string xml string to parse
/// @return a Document
module.exports.fromXml = function(string, options) {
    return bindings.fromXml(string, options || {});
};


},{"./bindings":7,"./element":10}],10:[function(require,module,exports){
var bindings = require('./bindings');

/// create a new element on the given document
/// @param doc the Document to create the element for
/// @param name the element name
/// @param {String} [contenn] element content
/// @constructor
function Element(doc, name, content) {
    if (!doc) {
        throw new Error('document argument required');
    } else if (! (doc instanceof bindings.Document)) {
        throw new Error('document argument must be an ' +
                        'instance of Document');
    } else if (!name) {
        throw new Error('name argument required');
    }

    return new bindings.Element(doc, name, content);
}

Element.prototype = bindings.Element.prototype;

Element.prototype.attr = function() {
    if (arguments.length === 1) {
        var arg = arguments[0];
        if (typeof arg === 'object') {
            // object setter
            // iterate keys/value to set attributes
            for (var k in arg) {
                this._attr(k, arg[k]);
            };
            return this;
        } else if (typeof arg === 'string') {
            // getter
            return this._attr(arg);
        }
    } else if (arguments.length === 2) {
        // 2 arg setter
        var name = arguments[0];
        var value = arguments[1];
        this._attr(name, value);
        return this;
    }
};

/// helper method to attach a new node to this element
/// @param name the element name
/// @param {String} [content] element content
Element.prototype.node = function(name, content) {
    var elem = Element(this.doc(), name, content);
    this.addChild(elem);
    return elem;
};

/// helper method to attach a cdata to this element
/// @param name the element name
/// @param {String} [content] element content
Element.prototype.cdata = function(content) {
  this.addCData(content);
  return this;
};

Element.prototype.get = function() {
    var res = this.find.apply(this, arguments);
    if (res instanceof Array) {
        return res[0];
    } else {
        return res;
    }
};

Element.prototype.defineNamespace = function(prefix, href) {
    // if no prefix specified
    if (!href) {
        href = prefix;
        prefix = null;
    }
    return new bindings.Namespace(this, prefix, href);
};

module.exports = Element;


},{"./bindings":7}],11:[function(require,module,exports){
var events = require('events');

var bindings = require('./bindings');

var SaxParser = function(callbacks) {
    var parser = new bindings.SaxParser();

    // attach callbacks
    for (var callback in callbacks) {
        parser.on(callback, callbacks[callback]);
    }

    return parser;
};

// Overriding the prototype, like util.inherit, wipes out the native binding.
// Copy over the methods instead.
for (var k in events.EventEmitter.prototype)
    bindings.SaxParser.prototype[k] = events.EventEmitter.prototype[k];

var SaxPushParser = function(callbacks) {
    var parser = new bindings.SaxPushParser();

    // attach callbacks
    for (var callback in callbacks) {
        parser.on(callback, callbacks[callback]);
    }

    return parser;
};

// Overriding the prototype, like util.inherit, wipes out the native binding.
// Copy over the methods instead.
for (var k in events.EventEmitter.prototype)
    bindings.SaxPushParser.prototype[k] = events.EventEmitter.prototype[k];

module.exports.SaxParser = SaxParser;
module.exports.SaxPushParser = SaxPushParser;


},{"./bindings":7,"events":16}],12:[function(require,module,exports){
var bindings = require("./bindings");

/// create a new element on the given document
/// @param doc the Document to create the element for
/// @param name the element name
/// @param {String} [contenn] element content
/// @constructor


function Text(doc, content) {
    if (!doc) {
        throw new Error('document argument required');
    }

    if (!(doc instanceof bindings.Document)) {
        throw new Error('document argument must be an instance of Document');
    }

    if (!content) {
        throw new Error('content argument required');
    }

    return new bindings.Text(doc, content);
}

Text.prototype = bindings.Text.prototype;

module.exports = Text;

},{"./bindings":7}],13:[function(require,module,exports){
module.exports={
  "_args": [
    [
      {
        "name": "libxmljs",
        "raw": "libxmljs",
        "rawSpec": "",
        "scope": null,
        "spec": "latest",
        "type": "tag"
      },
      "/home/shiyulin"
    ]
  ],
  "_from": "libxmljs@latest",
  "_id": "libxmljs@0.18.0",
  "_inCache": true,
  "_installable": true,
  "_location": "/libxmljs",
  "_nodeVersion": "6.2.0",
  "_npmOperationalInternal": {
    "host": "packages-12-west.internal.npmjs.com",
    "tmp": "tmp/libxmljs-0.18.0.tgz_1463968639662_0.2564493091776967"
  },
  "_npmUser": {
    "email": "shtylman@gmail.com",
    "name": "defunctzombie"
  },
  "_npmVersion": "3.8.9",
  "_phantomChildren": {},
  "_requested": {
    "name": "libxmljs",
    "raw": "libxmljs",
    "rawSpec": "",
    "scope": null,
    "spec": "latest",
    "type": "tag"
  },
  "_requiredBy": [
    "#USER"
  ],
  "_resolved": "https://registry.npmjs.org/libxmljs/-/libxmljs-0.18.0.tgz",
  "_shasum": "e2993dcf28e4dc60e73486e2db6225dc24d18531",
  "_shrinkwrap": null,
  "_spec": "libxmljs",
  "_where": "/home/shiyulin",
  "author": {
    "name": "Marco Rogers"
  },
  "bugs": {
    "url": "http://github.com/polotek/libxmljs/issues"
  },
  "contributors": [
    {
      "name": "Jeff Smick"
    }
  ],
  "dependencies": {
    "bindings": "1.2.1",
    "nan": "2.3.2"
  },
  "description": "libxml bindings for v8 javascript engine",
  "devDependencies": {
    "nodeunit": "0.9.0"
  },
  "directories": {},
  "dist": {
    "shasum": "e2993dcf28e4dc60e73486e2db6225dc24d18531",
    "tarball": "https://registry.npmjs.org/libxmljs/-/libxmljs-0.18.0.tgz"
  },
  "engines": {
    "node": ">=0.8.0"
  },
  "gitHead": "a117c5923e2bed5e7fffa67c0a5b24c62a6970e8",
  "gypfile": true,
  "homepage": "https://github.com/polotek/libxmljs#readme",
  "license": "MIT",
  "main": "./index",
  "maintainers": [
    {
      "email": "marco.rogers@gmail.com",
      "name": "polotek"
    },
    {
      "email": "shtylman@gmail.com",
      "name": "defunctzombie"
    }
  ],
  "name": "libxmljs",
  "optionalDependencies": {},
  "readme": "ERROR: No README data found!",
  "repository": {
    "type": "git",
    "url": "git+ssh://git@github.com/polotek/libxmljs.git"
  },
  "scripts": {
    "install": "node-gyp rebuild",
    "test": "node --expose_gc ./node_modules/.bin/nodeunit test"
  },
  "version": "0.18.0"
}

},{}],14:[function(require,module,exports){
/**
 * A function that returns a function that allows you to associate
 * a public object with its private counterpart.
 * @param {Function|Object} factory An optional argument that, is present, will
 *   be used to create new objects in the store.
 *   If factory is a function, it will be invoked with the key as an argument
 *   and the return value will be the private instance.
 *   If factory is an object, the private instance will be a new object with
 *   factory as it's prototype.
 */
function createKey(factory){

  // Create the factory based on the type of object passed.
  factory = typeof factory == 'function'
    ? factory
    : createBound(factory);

  // Store is used to map public objects to private objects.
  var store = new WeakMap();

  // Seen is used to track existing private objects.
  var seen = new WeakMap();

  /**
   * An accessor function to get private instances from the store.
   * @param {Object} key The public object that is associated with a private
   *   object in the store.
   */
  return function(key) {
    if (typeof key != 'object') return;

    var value = store.get(key);
    if (!value) {
      // Make sure key isn't already the private instance of some existing key.
      // This check helps prevent accidental double privatizing.
      if (seen.has(key)) {
        value = key;
      } else {
        value = factory(key);
        store.set(key, value);
        seen.set(value, true);
      }
    }
    return value;
  };
}

/**
 * Function.prototype.bind doesn't work in PhantomJS or Safari 5.1,
 * so we have to manually bind until support is dropped.
 * This function is effectively `Object.create.bind(null, obj, {})`
 * @param {Object} obj The first bound parameter to `Object.create`
 * @return {Function} The bound function.
 */
function createBound(obj) {
  return function() {
    return Object.create(obj || Object.prototype);
  };
}

module.exports = {
  createKey: createKey
};

},{}],15:[function(require,module,exports){

},{}],16:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],17:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":18}],18:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[3]);
