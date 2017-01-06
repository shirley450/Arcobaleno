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

