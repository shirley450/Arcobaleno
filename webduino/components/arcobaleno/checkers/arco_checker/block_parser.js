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

Arco.block['parse_orblk'] = function (element,list_obj) {

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

Arco.block['parse_whileblk'] = function (element,list_obj) {

  var b_element = element;
  list_obj.blkvallist.push("");
  var con_statement = b_element.childNodes[0]; //对应con标签
  list_obj.blklist.push("con_statement" + "ID" + id_count["controls_repeat_while"]); //放入statement
  var l_while_id = id_count["controls_repeat_while"];
  list_obj.blkvallist.push("");
  id_count["controls_repeat_while"]++;
  con_statement = con_statement.childNodes[0]; //获得con中的第一个block
  Arco.block.parse_element(con_statement,list_obj);
  list_obj.blklist.push("con_statement" + "ID" + l_while_id); //放入statement
  list_obj.blkvallist.push("");
  var body_statement = b_element.childNodes[1]; //对应body标签
  list_obj.blklist.push("body_statement" + "ID" + l_while_id); //放入statement
  list_obj.blkvallist.push("");
  var while_end = Arco.block.parse_element(body_statement,list_obj);
  list_obj.blklist.push("body_statement" + "ID" + l_while_id); //放入statement
  list_obj.blkvallist.push("");
  if (b_element.childNodes.length > 2) {
    var while_next = b_element.childNodes[2]; //对应next标签
    b_element = while_next;
  } else {
    b_element = while_end;
  }

  return b_element;
}

Arco.block['parse_untilblk'] = function (element,list_obj) {
  var b_element = element;
  list_obj.blkvallist.push("");
  var body_statement = b_element.childNodes[0]; //对应body标签
  list_obj.blklist.push("body_statement" + "ID" + id_count["controls_repeat_until"]); //放入statement
  list_obj.blkvallist.push("");
  var l_until_id = id_count["controls_repeat_until"];
  id_count["controls_repeat_until"];
  var until_end = Arco.block.parse_element(body_statement,list_obj);
  list_obj.blklist.push("body_statement" + "ID" + l_until_id); //放入statement
  list_obj.blkvallist.push("");
  var con_statement = b_element.childNodes[1]; //对应con标签
  list_obj.blklist.push("con_statement" + "ID" + l_until_id); //放入statement
  list_obj.blkvallist.push("");
  con_statement = con_statement.childNodes[0]; //获得con中的第一个block
  Arco.block.parse_element(con_statement,list_obj);
  list_obj.blklist.push("con_statement" + "ID" + l_until_id); //放入statement
  list_obj.blkvallist.push("");

  if (b_element.childNodes.length > 2) {
    var until_next = b_element.childNodes[2]; //对应next标签
    b_element = until_next;
  } else {
    b_element = until_end;
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