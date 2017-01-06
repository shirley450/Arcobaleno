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

