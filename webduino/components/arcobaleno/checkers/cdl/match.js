var libxml = require("libxmljs");
var assert = require("assert");
var fs = require("fs");

fs.readFile("./schema.xsd", "utf8", function(err, xsd){
	if(err){
		console.log("Read Schema Error: ", err);
	} else {
		xsdDoc = libxml.parseXml(xsd);
		fs.readFile("./cdl.xml", "utf8", function(err, xml){
			if(err){
				console.log("Read CDL Error: ", err);
			} else{
				xmlDoc = libxml.parseXml(xml);
				console.log(xmlDoc.validate(xsdDoc));
				console.log(xmlDoc.validationErrors);

			}
		});
	}
	
});
//var xml_invalid = '<?xml version="1.0"?><comment>A comment</comment>';

