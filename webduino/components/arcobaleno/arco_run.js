/**     arco_run.js
#
#      Copyright  (C)  2016-9 Yulin Shi <Shirley450@163.com>, 2016-3 Jia Liu <liujia@iscas.ac.cn>
#
#      This program is free software; you can redistribute it and/or modify
#      it under the terms of the GNU General Public License as published by
#      the Free Software Foundation; either version 2 of the License, or
#       (at your option) any later version.
#
#      This program is distributed in the hope that it will be useful,
#      but WITHOUT ANY WARRANTY; without even the implied warranty of
#      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#      GNU General Public License for more details.
#
#      You should have received a copy of the GNU General Public License
#      along with this program; if not, write to the Free Software
#      Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
#      MA 02110-1301, USA.
//////////////////////
*/


var Arco = new Array();
Arco.block = new Array();
Arco.cdl = new Array();
Arco.ddl = new Array();
var position_type = new Array();
var pname;
var version;

var blk_list = new Array();
var component_list = new Array();
var connection_list = new Array();
var rule_list = new Array();
var notimeout_list = new Array();
var id_count = new Array(); //保存某种类型的组件的个数,用于生成组件的id
var id_info = new Array();  //id_info是一个数组,数组的每个元素也是一个数组,id_info[type]保存的是类型为type的被重命名的组件的名字和id的对应关系
var blk_ind_info = new Object();
var abr_list = new Array();//缩进后的blocklist
var dev_type = new Array();
var blk_begin = new Array();
var blk_end = new Array();
var complie_info="";


Arco.block['add_component_type'] = function(name, type){
	id_count[name] = 0;
	id_info[name] = new Array();
	position_type[name] = type;
}

Arco.block['delete_componemt'] = function(name) {
	/* write code*/
}

Arco.block['add_device_type'] = function(name, type) {
	dev_type[name] = type;
}

Arco.block['arco_run'] = function() {
	// pname = document.getElementsByName("pname")[0].value;
	// version = document.getElementsByName("version")[0].value;
	pname = "aaa";
	version = "0.0.1";
	blk_list = new Array();
	component_list = new Array();
	connection_list = new Array();
	rule_list = new Array();
	notimeout_list = new Array();
	complie_info="";
	blk_ind_info = new Object();
	abr_list = new Array();//缩进后的blocklist
	for (key in id_count) {
		id_count[key] =  0;
	}
	for (key in id_info) {
		id_info[key] = new Array();
	}
	
	Arco.block.ui_read(blk_list);
	var erorr_num = blk_list_check(blk_list, notimeout_list, blk_ind_info, abr_list);
	if (!erorr_num) {

		var cdl_data = Arco.cdl.generate_cdl(abr_list); //生成cdlxml内容
		alert("CDL:  \n" + cdl_data);
		alert("blk_begin: " + blk_begin);
		alert("blk_end: " + blk_end);
		//雨霖的代码

		//调田谞的代码
		var dgl_result = Arco.ddl.generate_ddl(cdl_data);
		alert(dgl_result.graph);
		alert(dgl_result.member);
		alert(dgl_result["handler.py"]);
		//publish(pname, version, "cat0", "arco-dgl", "test", dgl_result, uid, key, onerror);
	}
}

Arco.block['ui_read'] = function(blk_list) {

	var xmldoc = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
	for (var i = 0; i < xmldoc.childNodes.length; i++) {
		var list_obj = new Object();
		list_obj.blklist = new Array();
		list_obj.blkvallist = new Array();
		var b_element = xmldoc.childNodes[i]; //block节点
		var result = Arco.block.parse_element(b_element, list_obj);
		blk_list.push(list_obj);
		alert(blk_list[i].blklist);
	}
	return blk_list;

}

Arco.block['orfinish_next_match'] = function(blk_namea, blk_nameb) {
	var orfinish_a = blk_namea;
	var orfinish_b = blk_nameb;
	var next_a;
	var next_b;
	var result;
	for (var i = 0; i < component_list.length; i++) {
		if (orfinish_a == component_list[i].name) {
			next_a = component_list[i].next;

		} else if (orfinish_b == component_list[i].name) {
			next_b = component_list[i].next;

		}
	}
	if (next_a == next_b) {
		result = 1;
	}
	return result;

}

Arco.block['andfinish_from_match'] = function(andfinish_a) {
	var andfinish_a = andfinish_a;
	var andfrom_a;
	var result;

	for (var i = 0; i < connection_list.length; i++) {
		if (connection_list[i].from.length == 1 && connection_list[i].from[0] == andfinish_a) {
			result = i; //to为andfinisha的fromlist
		}
	}

	return result;

}

Arco.block['cmp_type_match'] = function(blk_name) {
	var operation_name = blk_name;
	var result = "";
	if (blk_name.indexOf("ForTrigger") >= 0) {
		result = "sc";
		return result;
	}
	for (var i = 0; i < blk_begin.length; i++) {
		if (operation_name == blk_begin[i]) {
			result = "sc";
		}
	}
	for (var i = 0; i < blk_end.length; i++) {
		if (operation_name == blk_end[i]) {
			result = "tc";
		}
	}
	
	return result;
}

Arco.block['add_component_type'] = function(name, type){
	id_count[name] = 0;
	id_info[name] = new Array();
	position_type[name] = type;
}

Arco.block['delete_componemt'] = function(name) {
	/* write code*/
}

Arco.block['add_device_type'] = function(name, type) {
	dev_type[name] = type;
}

Arco.block['ui_type_match'] = function(blk_name) {
	if (blk_name.indexOf("ID") >= 0) {
		blk_name = blk_name.split("ID")[0];
	}
	return  position_type[blk_name];

}

Arco.block['dev_type_match'] =function(blk_name){
	
	if (blk_name.indexOf("ID") >= 0) {
		blk_name = blk_name.split("ID")[0];
	}
	return dev_type[blk_name];
}



// 组件类型定义, 1是源组件，2是中间组件，4是终端组件,3是源组件或者中间组件，6是中间组件或者终端组件，
// 7是源组件、中间组件或者终端组件，5是源组件或者终端组件，
Arco.block.add_component_type("probe","6");
Arco.block.add_component_type("textgen","1");
Arco.block.add_component_type("led","4");
Arco.block.add_component_type("switch", "1");
Arco.block.add_component_type("relay","2");
Arco.block.add_component_type("pir","1");
Arco.block.add_component_type("passthrough","6");
Arco.block.add_component_type("button","1");
Arco.block.add_component_type("controls_and","1");
Arco.block.add_component_type("controls_or","1");
Arco.block.add_component_type("controls_repeat_for","6");
Arco.block.add_component_type("controls_repeat_until","6");
Arco.block.add_component_type("controls_repeat_while","6");
Arco.block.add_component_type("text_print_timeout", "7");
Arco.block.add_component_type("text_print_delay","2");
Arco.block.add_component_type("controls_branch","6");

Arco.block.add_device_type("led", "LED");
Arco.block.add_device_type("switch", "SWITCH");
Arco.block.add_device_type("relay", "RELAY");
Arco.block.add_device_type("pir", "PIR");
Arco.block.add_device_type("button", "BUTTON");
Arco.block.add_device_type("probe", "Probe");
Arco.block.add_device_type("textgen", "TextGen");
Arco.block.add_device_type("ForTrigger", "Trigger");
Arco.block.add_device_type("ForInit", "VDev");
Arco.block.add_device_type("ForInput", "InputFilter");
Arco.block.add_device_type("ForCmp", "Zero");
Arco.block.add_device_type("ForCnt", "Countdown");
Arco.block.add_device_type("ForBack", "Positive");
Arco.block.add_device_type("ForEnd", "Zero");
Arco.block.add_device_type("ForCntBack", "Positive");
Arco.block.add_device_type("text_print_delay", "VDev");
Arco.block.add_device_type("UntilBack","UntilBack");
Arco.block.add_device_type("UntilEnd", "UntilEnd");
Arco.block.add_device_type("WhileStart", "WhileStart");
Arco.block.add_device_type("WhileBack", "WhileBack");
Arco.block.add_device_type("WhileEnd", "WhileEnd");
Arco.block.add_device_type("WhileFinish", "WhileFinish");
Arco.block.add_device_type("AndFinish", "VDev");
Arco.block.add_device_type("OrFinish",  "VDev");






//var type_name_list = new Array();
//var type_list = new Array();
//var f_type_name_list = new Array();
//var f_type_list = new Array();


/*var led_info = new Object();
var switch_info = new Object();
var relay_info = new Object();
var button_info = new Object();
var pir_info = new Object();
var probe_info = new Object();
var textgen_info = new Object();
*/
//f_type_name_list = ["led", "switch", "relay", "pir", "button", "probe", "textgen", "ForTrigger", "ForInit", "ForInput", "ForCmp", "ForCnt", "ForBack", "ForEnd", "ForCntBack", "text_print_delay", "UntilBack", "UntilEnd", "WhileStart", "WhileBack", "WhileEnd", "WhileFinish", "AndFinish", "OrFinish"];
//f_type_list = ["LED", "SWITCH", "RELAY", "PIR", "BUTTON", "Probe", "TextGen", "Trigger", "VDev", "InputFilter", "Zero", "Countdown", "Positive", "Zero", "Positive","VDev", "UntilBack", "UntilEnd", "WhileStart", "WhileBack", "WhileEnd", "WhileFinish", "VDev", "VDev"];
//f_type_list = ["LED"];
//type_name_list = ["probe", "textgen", "led", "switch", "relay", "pir", "button", "controls_and", "controls_or", "controls_repeat_for", "controls_repeat_until", "controls_repeat_while", "text_print_timeout", "text_print_delay", "controls_branch"];
//组件类型定义, 1是源组件，2是中间组件，4是终端组件,3是源组件或者中间组件，6是中间组件或者终端组件，7是源组件、中间组件或者终端组件，5是源组件或者终端组件，
/*blk_type = ["6","1","4", "3", "2", "1", "6", "1", "1", "1", "6", "6", "6", "7", "2", "6"];*/

