Arco.block['parse_element'] = function (element, list_obj) {

  var b_element = element;
  var b_f_name;

  while(b_element.childNodes.length > 0) {
    if (b_element.tagName == "NEXT" || b_element.tagName == "STATEMENT") //第二次读取block
    {
      b_element = b_element.childNodes[0];
    } 
    b_f_name = b_element.getAttribute("type"); //block的名字
    
    if (b_f_name == "controls_repeat_for") {
      b_element = Arco.block.parse_logic_components(b_f_name, list_obj, b_element, Arco.block.parse_forblk);
 
    } else if (b_f_name == "controls_and") {
      b_element = Arco.block.parse_logic_components(b_f_name, list_obj, b_element, Arco.block.parse_andblk);

    } else if (b_f_name == "controls_or") {
      b_element = Arco.block.parse_logic_components(b_f_name, list_obj, b_element, Arco.block.parse_orblk);

    } else if (b_f_name == "text_print_delay") {
      b_element = Arco.block.parse_logic_components(b_f_name, list_obj, b_element, Arco.block.parse_delayblk);

    } else if (b_f_name == "text_print_timeout") {
      b_element = Arco.block.parse_logic_components(b_f_name, list_obj, b_element, Arco.block.parse_timeoutblk);

    } else if (b_f_name == "controls_branch") {
      b_element = Arco.block.parse_logic_components(b_f_name, list_obj, b_element, Arco.block.parse_branchblk);

    } else if(true) {
         b_element = Arco.block.parse_device_components(b_f_name, list_obj, b_element);
    }
    }
    return b_element;
}

Arco.block['parse_logic_components'] = function (name,  list_obj, b_element, callback) {
  if(!id_count[name]) id_count[name.toString()] = 0;
  name = name + 'ID' + id_count[name.toString()];
  list_obj.blklist.push(name.toString());
  b_element = callback(b_element, list_obj);
  return b_element;
}

Arco.block['parse_device_components'] = function (b_f_name, list_obj, b_element) {

  var name = b_element.getElementsByTagName("FIELD")[0].childNodes[0].nodeValue;
  if(!id_count[b_f_name]) id_count[b_f_name.toString()] = 0;
  if(!id_info[b_f_name]) id_info[b_f_name.toString()] = new Array();

  var temp = b_f_name;
  if(name != Arco.block.dev_type_match(b_f_name)) //如果界面输入的不是默认组件名字
  {
    if(name in id_info[b_f_name])
    {
      var id_inner = id_info[b_f_name][name.toString()];
      b_f_name = b_f_name + "ID" + id_inner;
      list_obj.blklist.push(b_f_name);
        list_obj.blkvallist.push("");
      } else {
        if(!id_count[b_f_name]) id_count[b_f_name] = 0;
        id_info[b_f_name][name.toString()] = id_count[b_f_name];
        b_f_name = b_f_name + "ID" + id_count[b_f_name];
        list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
      }
    }
  else 
  {
    b_f_name = b_f_name + "ID" + id_count[b_f_name.toString()];
    list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
    list_obj.blkvallist.push("");
  }

  id_count[temp]++;

  if (b_element.childNodes.length > 1) //取next
  {
     b_element = b_element.childNodes[1];
  } else if (b_element.childNodes.length ==1) {//组件在最后
     b_element = b_element.getElementsByTagName("FIELD")[0].childNodes[0];
  }
      return b_element;
}

Arco.block['parse_forblk'] = function (element, list_obj) {
  var b_element = element;
  //value部分
  var for_value = b_element.childNodes[0]; //对应value标签
  var for_abr = for_value.getElementsByTagName("field")[0].childNodes[0].nodeValue; //对应abr的值
  list_obj.blkvallist.push(for_abr);
  var for_statement = b_element.childNodes[1]; //对应statement标签
  list_obj.blklist.push("for_statement" + "ID" + id_count["controls_repeat_for"]);
  var l_for_id = id_count["controls_repeat_for"];
  list_obj.blkvallist.push("");
  id_count["controls_repeat_for"]++;
  var for_statement_end = Arco.block.parse_element(for_statement,list_obj);

  list_obj.blklist.push("for_statement" + "ID" + l_for_id);

  list_obj.blkvallist.push("");

  if (b_element.childNodes.length > 2) {
    //next部分
    var for_next = b_element.childNodes[2]; //对应next标签
    b_element = for_next;
  } else {
    b_element = for_statement_end;
  }

  return b_element;
}

Arco.block['parse_andblk'] = function (element,list_obj) {

  var b_element = element;
  list_obj.blkvallist.push("");
  var and_statement = b_element.childNodes[0]; //statement节点
  list_obj.blklist.push("and_statement" + "ID" + id_count["controls_and"]); //放入statement
  list_obj.blkvallist.push("");
  var l_and_id = id_count["controls_and"];
  id_count["controls_and"]++;
  var and_statement_end = Arco.block.parse_element(and_statement,list_obj);
  list_obj.blklist.push("and_statement" + "ID" + l_and_id); //放入statement
  list_obj.blkvallist.push("");
  if (b_element.childNodes.length > 1) {
    var and_next = b_element.childNodes[1]; //and next的节点
    b_element = and_next;
  } else {
    b_element = and_statement_end;
  }

  return b_element;
}

Arco.block['parse_orblk'] = function (element, list_obj ) {

  var b_element = element;
  list_obj.blkvallist.push("");
  var or_statement = b_element.childNodes[0]; //statement节点
  list_obj.blklist.push("or_statement" + "ID" + id_count["controls_or"]); //放入statement
  list_obj.blkvallist.push("");
  var l_or_id = id_count["controls_or"];
  id_count["controls_or"]++;
  var or_statement_end = Arco.block.parse_element(or_statement,list_obj);
  list_obj.blklist.push("or_statement" + "ID" + l_or_id); //放入statement
  list_obj.blkvallist.push("");
  if (b_element.childNodes.length > 1) {
    var or_next = b_element.childNodes[1]; //and next的节点
    b_element = or_next;
  } else {
    b_element = or_statement_end;
  }

  return b_element;
}

Arco.block['parse_branchblk'] = function (element,list_obj) {

  var b_element = element;
  list_obj.blkvallist.push("");
  var branch_statement = b_element.childNodes[0]; //statement节点
  list_obj.blklist.push("branch_statement" + "ID" + id_count["controls_branch"]); //放入statement
  list_obj.blkvallist.push("");
  var l_branch_id = id_count["controls_branch"];
  id_count["controls_branch"]++;
  var branch_statement_end = Arco.block.parse_element(branch_statement,list_obj);
  list_obj.blklist.push("branch_statement" + "ID" + l_branch_id); //放入statement
  list_obj.blkvallist.push("");
  if (b_element.childNodes.length > 1) {
    var branch_next = b_element.childNodes[1]; //branch next的节点
    b_element = branch_next;
  } else {
    b_element = branch_statement_end;
  }

  return b_element;
}

Arco.block['parse_timeoutblk'] = function (element,list_obj) {

  var b_element = element;
  //value部分
  var timeout_value = b_element.childNodes[0]; //对应value标签
  var timeout_abr = timeout_value.getElementsByTagName("field")[0].childNodes[0].nodeValue; //对应abr的值
  list_obj.blkvallist.push(timeout_abr);
   var timeout_statement = b_element.childNodes[1]; //对应element标签
  list_obj.blklist.push("timeout_statement" + "ID" + id_count["text_print_timeout"]);
    list_obj.blkvallist.push("");
  var l_timeout_id = id_count["text_print_timeout"];
  id_count["text_print_timeout"]++;
  var timeout_statement_end = Arco.block.parse_element(timeout_statement,list_obj);

  list_obj.blklist.push("timeout_statement" + "ID" + l_timeout_id);
  list_obj.blkvallist.push("");
  if (b_element.childNodes.length > 2) {
    //next部分
    var timeout_next = b_element.childNodes[2]; //对应next标签
    b_element = timeout_next;
  } else {

    b_element = timeout_statement_end;
  }

  return b_element;
}


Arco.block['parse_delayblk'] = function (element,list_obj) {
  var b_element = element;
  //value部分
  var delay_value = b_element.childNodes[0]; //对应value标签
  var delay_abr = delay_value.getElementsByTagName("field")[0].childNodes[0].nodeValue; //对应abr的值
  list_obj.blkvallist.push(delay_abr);
  id_count["delay"]++;
  if (b_element.childNodes.length > 1) {
    //next部分
    var delay_next = b_element.childNodes[1]; //对应next标签
    b_element = delay_next;
  } else {
    b_element = delay_value.getElementsByTagName("field")[0].childNodes[0];
  }

  return b_element;
}