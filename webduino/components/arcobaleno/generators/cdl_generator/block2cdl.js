
Arco.cdl['and2cdl'] = function (blkname, list_ind) {
  var and_name = blkname;
  var name_split = and_name.split("ID");
  var list_ind = list_ind;
  var and_begin = blk_ind_info.andblk[list_ind].begin[name_split[1]];
  var and_end = blk_ind_info.andblk[list_ind].end[name_split[1]];

  //从and_begin到and_end生成component  
  for (var i = and_begin; i <= and_end; i++) {
    var component_obj = new Object();
    var temp_type_name = Arco.block.dev_type_match(notimeout_list[list_ind].blklist[i]);
    component_obj.name = notimeout_list[list_ind].blklist[i];
    component_obj.type = temp_type_name;
    component_obj.behavior = new Object();
    component_obj.behavior.name = "";
    component_obj.behavior.value = "";
    component_list.push(component_obj);
  }
  var component_obj = new Object();
  var temp_type_name = Arco.block.dev_type_match("AndFinish");
  component_obj.name = "AndFinish" + "ID" + name_split[1];
  component_obj.type = temp_type_name;
  component_obj.behavior = new Object();
  component_obj.behavior.name = "";
  component_obj.behavior.value = "";
  component_obj.next = notimeout_list[list_ind].blklist[i + 1];
  component_list.push(component_obj);

  //生成andfinish节点
  var connection_obj = new Object();
  connection_obj.from = new Array();
  connection_obj.to = new Array();
  connection_obj.to.push("AndFinish" + "ID" + name_split[1]);
  for (var i = and_begin; i <= and_end; i++) {

    connection_obj.from.push(notimeout_list[list_ind].blklist[i]);

  }
  connection_list.push(connection_obj);

}

Arco.cdl['or2cdl'] = function (blkname, list_ind) {
  var or_name = blkname;
  var name_split = or_name.split("ID");
  var list_ind = list_ind;
  var or_begin = blk_ind_info.orblk[list_ind].begin[name_split[1]];
  var or_end = blk_ind_info.orblk[list_ind].end[name_split[1]];

  //从or_begin到or_end生成component
  for (var i = or_begin; i <= or_end; i++) {
    var component_obj = new Object();
    var temp_type_name = Arco.block.dev_type_match(notimeout_list[list_ind].blklist[i]);
    component_obj.name = notimeout_list[list_ind].blklist[i];
    component_obj.type = temp_type_name;
    component_obj.behavior = new Object();
    component_obj.behavior.name = "";
    component_obj.behavior.value = "";
    component_list.push(component_obj);
  }
  var component_obj = new Object();
  var temp_type_name = Arco.block.dev_type_match("OrFinish");
  component_obj.name = "OrFinish" + "ID" + name_split[1];
  component_obj.type = temp_type_name;
  component_obj.behavior = new Object();
  component_obj.behavior.name = "";
  component_obj.behavior.value = "";
  component_obj.next = notimeout_list[list_ind].blklist[i + 1];
  component_list.push(component_obj);

  //生成orfinish节点
  for (var i = or_begin; i <= or_end; i++) {
    var connection_obj = new Object();
    connection_obj.from = new Array();
    connection_obj.to = new Array();
    connection_obj.to.push("OrFinish" + "ID" + name_split[1]);
    connection_obj.from.push(notimeout_list[list_ind].blklist[i]);
    connection_list.push(connection_obj);

  }

}

Arco.cdl['branch2cdl'] = function (blkname, list_ind) {
  var branch_name = blkname;
  var name_split = branch_name.split("ID");
  var list_ind = list_ind;

  //从branch_begin到branch_end生成component
  var branch_begin = blk_ind_info.branchblk[list_ind].begin[name_split[1]];
  var branch_end = blk_ind_info.branchblk[list_ind].end[name_split[1]];

  if (notimeout_list[list_ind].blklist[branch_begin].indexOf("controls_and") >= 0) { //嵌套的是and
    branch_begin = branch_begin + 2;
    branch_end = branch_end - 1;
    for (var i = branch_begin; i <= branch_end; i++) {
      var component_obj = new Object();
      var temp_type_name = Arco.block.dev_type_match(notimeout_list[list_ind].blklist[i]);
      component_obj.name = notimeout_list[list_ind].blklist[i];
      //alert( component_obj.name+"!!!!!!!");
      component_obj.type = temp_type_name;
      component_obj.behavior = new Object();
      component_obj.behavior.name = "";
      component_obj.behavior.value = "";
      component_list.push(component_obj);

    }
    var component_obj = new Object();
    component_obj.name = "AndFinish" + "ID" + notimeout_list[list_ind].blklist[branch_end + 1].split("ID")[1];
    component_obj.type = temp_type_name;
    component_obj.behavior = new Object();
    component_obj.behavior.name = "";
    component_obj.behavior.value = "";
    component_list.push(component_obj);
    //生成branch里的节点
    var connection_obj = new Object();
    connection_obj.from = new Array();
    connection_obj.to = new Array();
    //branch前面可以接for\while\until和一般组件
    var ex_blk = notimeout_list[list_ind].blklist[branch_begin - 5];
    if (ex_blk.indexOf("con_statement") >= 0) { //前面是until
      var name_split = ex_blk.split("ID"); //以ID进行划分
      connection_obj.from.push("UntilEnd" + name_split[1]); //存入1个from
    } else if (ex_blk.indexOf("for_statement") >= 0) { //前面是for
      var name_split = ex_blk.split("ID"); //以ID进行划分
      connection_obj.from.push("ForEnd" + name_split[1]); //存入1个from
    } else if (ex_blk.indexOf("body_statement") >= 0) { //前面是while
      var name_split = ex_blk.split("ID"); //以ID进行划分
      connection_obj.from.push("WhileFinish" + name_split[1]); //存入1个from
      for (var i = branch_begin; i <= branch_end; i++) {

        connection_obj.to.push(notimeout_list[list_ind].blklist[i]);

      }
      connection_list.push(connection_obj);
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.from.push("WhileEnd" + "ID" + name_split[1]); //存入1个from
    } else {
      connection_obj.from.push(ex_blk);
    }

    for (var i = branch_begin; i <= branch_end; i++) {

      connection_obj.to.push(notimeout_list[list_ind].blklist[i]);

    }
    connection_list.push(connection_obj);
    var connection_obj = new Object();
    connection_obj.from = new Array();
    connection_obj.to = new Array();
    for (var i = branch_begin; i <= branch_end; i++) {
      connection_obj.from.push(notimeout_list[list_ind].blklist[i]);
    }
    connection_obj.to.push("AndFinish" + "ID" + notimeout_list[list_ind].blklist[branch_end + 1].split("ID")[1]);
    connection_list.push(connection_obj);

  } else if (notimeout_list[list_ind].blklist[branch_begin].indexOf("controls_or") >= 0) { //嵌套的是and
    branch_begin = branch_begin + 2;
    branch_end = branch_end - 1;
    for (var i = branch_begin; i <= branch_end; i++) {
      var component_obj = new Object();
      var temp_type_name = Arco.block.dev_type_match(notimeout_list[list_ind].blklist[i]);
      component_obj.name = notimeout_list[list_ind].blklist[i];
      //alert( component_obj.name+"!!!!!!!");
      component_obj.type = temp_type_name;
      component_obj.behavior = new Object();
      component_obj.behavior.name = "";
      component_obj.behavior.value = "";
      component_list.push(component_obj);

    }
    var component_obj = new Object();
    component_obj.name = "OrFinish" + "ID" + notimeout_list[list_ind].blklist[branch_end + 1].split("ID")[1];
    component_obj.type = temp_type_name;
    component_obj.behavior = new Object();
    component_obj.behavior.name = "";
    component_obj.behavior.value = "";
    component_list.push(component_obj);
    //生成branch里的节点
    var connection_obj = new Object();
    connection_obj.from = new Array();
    connection_obj.to = new Array();
    //branch前面可以接for\while\until和一般组件
    var ex_blk = notimeout_list[list_ind].blklist[branch_begin - 5];
    if (ex_blk.indexOf("con_statement") >= 0) { //前面是until
      var name_split = ex_blk.split("ID"); //以ID进行划分
      connection_obj.from.push("UntilEnd" + name_split[1]); //存入1个from
    } else if (ex_blk.indexOf("for_statement") >= 0) { //前面是for
      var name_split = ex_blk.split("ID"); //以ID进行划分
      connection_obj.from.push("ForEnd" + name_split[1]); //存入1个from
    } else if (ex_blk.indexOf("body_statement") >= 0) { //前面是while
      var name_split = ex_blk.split("ID"); //以ID进行划分
      connection_obj.from.push("WhileFinish" + name_split[1]); //存入1个from
      for (var i = branch_begin; i <= branch_end; i++) {

        connection_obj.to.push(notimeout_list[list_ind].blklist[i]);

      }
      connection_list.push(connection_obj);
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.from.push("WhileEnd" + "ID" + name_split[1]); //存入1个from
    } else {
      connection_obj.from.push(ex_blk);
    }

    for (var i = branch_begin; i <= branch_end; i++) {

      connection_obj.to.push(notimeout_list[list_ind].blklist[i]);

    }
    connection_list.push(connection_obj);

    for (var i = branch_begin; i <= branch_end; i++) {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.from.push(notimeout_list[list_ind].blklist[i]);
      connection_obj.to.push("OrFinish" + "ID" + notimeout_list[list_ind].blklist[branch_end + 1].split("ID")[1]);
      connection_list.push(connection_obj);
    }

  } else { //无嵌套
    for (var i = branch_begin; i <= branch_end; i++) {
      var component_obj = new Object();
      var temp_type_name = Arco.block.dev_type_match(notimeout_list[list_ind].blklist[i]);
      component_obj.name = notimeout_list[list_ind].blklist[i];
      component_obj.type = temp_type_name;
      component_obj.behavior = new Object();
      component_obj.behavior.name = "";
      component_obj.behavior.value = "";
      component_list.push(component_obj);
    }

    //生成branch里的节点，判断上层组件类型
    var connection_obj = new Object();
    connection_obj.from = new Array();
    connection_obj.to = new Array();
    var ex_blk = notimeout_list[list_ind].blklist[branch_begin - 3];
    if (ex_blk.indexOf("con_statement") >= 0) { //前面是until
      var name_split = ex_blk.split("ID"); //以ID进行划分
      connection_obj.from.push("UntilEnd" + name_split[1]); //存入1个from
    } else if (ex_blk.indexOf("for_statement") >= 0) { //前面是for
      var name_split = ex_blk.split("ID"); //以ID进行划分
      connection_obj.from.push("ForEnd" + name_split[1]); //存入1个from
    } else if (ex_blk.indexOf("body_statement") >= 0) { //前面是while
      var name_split = ex_blk.split("ID"); //以ID进行划分
      connection_obj.from.push("WhileFinish" + name_split[1]); //存入1个from
      for (var i = branch_begin; i <= branch_end; i++) {

        connection_obj.to.push(notimeout_list[list_ind].blklist[i]);

      }
      connection_list.push(connection_obj);
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.from.push("WhileEnd" + "ID" + name_split[1]); //存入1个from
    } else {
      connection_obj.from.push(ex_blk);
    }

    for (var i = branch_begin; i <= branch_end; i++) {

      connection_obj.to.push(notimeout_list[list_ind].blklist[i]);

    }
    connection_list.push(connection_obj);
  }

}

Arco.cdl['for2cdl'] = function (blkname, list_ind) {
  var for_list = new Array();
  var for_type_list = new Array();
  var for_name = blkname;
  var list_ind = list_ind;
  for_list.push("ForTrigger");
  for_list.push("ForInit");
  for_list.push("ForInput");
  for_list.push("ForCmp");
  for_list.push("ForCnt");
  for_list.push("ForCntBack");
  for_list.push("ForBack");
  for_list.push("ForEnd");
  for_type_list.push("Trigger");
  for_type_list.push("VDev");
  for_type_list.push("InputFilter");
  for_type_list.push("Zero");
  for_type_list.push("Countdown");
  for_type_list.push("ParamFilter");
  for_type_list.push("Positive");
  for_type_list.push("Zero");
  var for_value = 0;

  for (var i = 0; i < notimeout_list[list_ind].blklist.length; i++) {

    if (notimeout_list[list_ind].blklist[i] == for_name) {
      for_value = notimeout_list[list_ind].blkvallist[i];
    }
  }

  var name_split = for_name.split("ID"); //以ID进行划分
  var for_begin = blk_ind_info.forblk[list_ind].begin[name_split[1]];
  var for_end = blk_ind_info.forblk[list_ind].end[name_split[1]];

  for (var i = for_begin; i <= for_end; i++) {
    if (notimeout_list[list_ind].blklist[i].indexOf("text_print_delay") >= 0) {
      var component_obj = new Object();
      component_obj.name = notimeout_list[list_ind].blklist[i];
      var temp_type_name = Arco.block.dev_type_match(notimeout_list[list_ind].blklist[i]);
      component_obj.type = temp_type_name;
      component_obj.behavior = new Object();
      component_obj.behavior.name = "time";
      component_obj.behavior.value = notimeout_list[list_ind].blkvallist[i];
      component_list.push(component_obj);
      var component_obj = new Object();
      component_obj.name = "Delay" + "ID" + notimeout_list[list_ind].blklist[i].split("ID")[1];
      component_obj.type = "Delay";
      component_obj.behavior = new Object();
      component_obj.behavior.name = "";
      component_obj.behavior.value = "";
      component_list.push(component_obj);
    } else {
      var component_obj = new Object();
      component_obj.name = notimeout_list[list_ind].blklist[i];
      var temp_type_name = Arco.block.dev_type_match(notimeout_list[list_ind].blklist[i]);
      component_obj.type = temp_type_name;
      component_obj.behavior = new Object();
      component_obj.behavior.name = "";
      component_obj.behavior.value = notimeout_list[list_ind].blkvallist[i];
      component_list.push(component_obj);
    }

    
  }
  for (var i = 0; i < for_list.length; i++) {
    var component_obj = new Object();
    component_obj.name = for_list[i] + "ID" + name_split[1];
    component_obj.type = for_type_list[i];
    component_obj.behavior = new Object();
    if (for_list[i] == "ForInit") {
      component_obj.behavior.name = "counter";
      component_obj.behavior.value = for_value;
    } else {
      component_obj.behavior.name = "";
      component_obj.behavior.value = "";
    }

    component_list.push(component_obj);
  }

  //生成connect节点
  //添加connection从 ForTrigger到for_init
  var connection_obj = new Object();
  connection_obj.from = new Array();
  connection_obj.to = new Array();
  connection_obj.from.push("ForTrigger" + "ID" + name_split[1]); //存入1个from
  connection_obj.to.push("ForInit" + "ID" + name_split[1]); //存入一个to
  connection_list.push(connection_obj);

  //生成connection从ForCmp到ForInit
  var connection_obj = new Object();
  connection_obj.from = new Array();
  connection_obj.to = new Array();
  connection_obj.from.push("ForEnd" + "ID" + name_split[1]); //存入1个from
  connection_obj.to.push("ForInit" + "ID" + name_split[1]); //存入一个to
  connection_list.push(connection_obj);

  //再生成一个connection，从ForInit和上层组件，到ForInput
  var connection_obj = new Object();
  connection_obj.from = new Array();
  connection_obj.to = new Array();
  connection_obj.from.push("ForInit" + "ID" + name_split[1]); //存入1个from
  if (notimeout_list[list_ind].blklist[for_begin - 3].indexOf("and_statement") >= 0) {
    var inname_split = notimeout_list[list_ind].blklist[for_begin - 3].split("ID"); //以ID进行划分
    connection_obj.from.push("AndFinish" + "ID" + inname_split[1]); //存入1个from
  } else if (notimeout_list[list_ind].blklist[for_begin - 3].indexOf("text_print_delay") >= 0) {
    var inname_split = notimeout_list[list_ind].blklist[for_begin - 3].split("ID"); //以ID进行划分
    connection_obj.from.push("Delay" + "ID" + inname_split[1]); //存入1个from
  } else if (notimeout_list[list_ind].blklist[for_begin - 3].indexOf("or_statement") >= 0) {
    var inname_split = notimeout_list[list_ind].blklist[for_begin - 3].split("ID"); //以ID进行划分
    connection_obj.from.push("OrFinish" + "ID" + inname_split[1]); //存入1个from
  } else if (notimeout_list[list_ind].blklist[for_begin - 3].indexOf("for_statement") >= 0) {
    var inname_split = notimeout_list[list_ind].blklist[for_begin - 3].split("ID"); //以ID进行划分
    connection_obj.from.push("ForEnd" + "ID" + inname_split[1]); //存入1个from
  } else if (notimeout_list[list_ind].blklist[for_begin - 3].indexOf("body_statement") >= 0) //while需要生成两个whileend和whilefinish
  {
    var inname_split = notimeout_list[list_ind].blklist[for_begin - 3].split("ID"); //以ID进行划分
    connection_obj.from.push("WhileFinish" + "ID" + inname_split[1]); //存入1个from
    connection_obj.to = new Array();
    connection_obj.to.push("ForInput" + "ID" + name_split[1]); //存入一个to
    connection_list.push(connection_obj);
    var connection_obj = new Object();
    connection_obj.from = new Array();
    connection_obj.to = new Array();
    connection_obj.from.push("ForInit" + "ID" + name_split[1]); //存入1个from
    connection_obj.from.push("WhileEnd" + "ID" + inname_split[1]); //存入1个from
  } else if (notimeout_list[list_ind].blklist[for_begin - 3].indexOf("con_statement") >= 0) //前面为until
  {
    var inname_split = notimeout_list[list_ind].blklist[for_begin - 3].split("ID"); //以ID进行划分
    connection_obj.from.push("UntilEnd" + "ID" + inname_split[1]); //存入1个from
  } else {
    connection_obj.from.push(notimeout_list[list_ind].blklist[for_begin - 3]); //存入1个from
  }
  connection_obj.to.push("ForInput" + "ID" + name_split[1]); //存入一个to
  connection_list.push(connection_obj);

  //添加connection从 ForInput到循环第一个组件
  var connection_obj = new Object();
  connection_obj.from = new Array();
  connection_obj.to = new Array();
  connection_obj.from.push("ForInput" + "ID" + name_split[1]); //存入1个from
  connection_obj.to.push(notimeout_list[list_ind].blklist[for_begin]); //存入一个to
  connection_list.push(connection_obj);

  //循环体内部的connection
  for (var i = for_begin; i < for_end; i++) {
    if (notimeout_list[list_ind].blklist[i].indexOf("text_print_delay") >= 0) {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.from.push(notimeout_list[list_ind].blklist[i]); //存入1个from
      connection_obj.to.push("Delay" + "ID" + notimeout_list[list_ind].blklist[i].split("ID")[1]); //存入一个to
      connection_list.push(connection_obj);
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.from.push("Delay" + "ID" + notimeout_list[list_ind].blklist[i].split("ID")[1]); //存入1个from
      connection_obj.to.push(notimeout_list[list_ind].blklist[i + 1]); //存入一个to
      connection_list.push(connection_obj);
    } else {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.from.push(notimeout_list[list_ind].blklist[i]); //存入1个from
      connection_obj.to.push(notimeout_list[list_ind].blklist[i + 1]); //存入一个to
      connection_list.push(connection_obj);

    }

  }
  //生成ForInit到ForCnt
  var connection_obj = new Object();
  connection_obj.from = new Array();
  connection_obj.to = new Array();
  connection_obj.from.push("ForInit" + "ID" + name_split[1]); //存入1个from
  connection_obj.to.push("ForCnt" + "ID" + name_split[1]); //存入一个to
  connection_list.push(connection_obj);

  //生成循环体最后一个组件和ForCnt到ForCntBack
  var connection_obj = new Object();
  connection_obj.from = new Array();
  connection_obj.to = new Array();
  connection_obj.from.push("ForCnt" + "ID" + name_split[1]); //存入1个from
  connection_obj.from.push(notimeout_list[list_ind].blklist[for_end]); //存入1个from
  connection_obj.to.push("ForCntBack" + "ID" + name_split[1]); //存入一个to
  connection_list.push(connection_obj);

  //生成ForCntBack到ForCnt
  var connection_obj = new Object();
  connection_obj.from = new Array();
  connection_obj.to = new Array();
  connection_obj.from.push("ForCntBack" + "ID" + name_split[1]); //存入1个from
  connection_obj.to.push("ForCnt" + "ID" + name_split[1]); //存入一个to
  connection_list.push(connection_obj);

  //生成循环体最后一个组件和ForCnt到ForBack
  var connection_obj = new Object();
  connection_obj.from = new Array();
  connection_obj.to = new Array();
  connection_obj.from.push("ForCnt" + "ID" + name_split[1]); //存入1个from
  connection_obj.from.push(notimeout_list[list_ind].blklist[for_end]); //存入1个from
  connection_obj.to.push("ForBack" + "ID" + name_split[1]); //存入一个to
  connection_list.push(connection_obj);

  //生成循环体最后一个组件和ForCnt到ForEnd
  var connection_obj = new Object();
  connection_obj.from = new Array();
  connection_obj.to = new Array();
  connection_obj.from.push("ForCnt" + "ID" + name_split[1]); //存入1个from
  connection_obj.from.push(notimeout_list[list_ind].blklist[for_end]); //存入1个from
  connection_obj.to.push("ForEnd" + "ID" + name_split[1]); //存入一个to
  connection_list.push(connection_obj);

  //生成ForBack到循环体第一个组件
  var connection_obj = new Object();
  connection_obj.from = new Array();
  connection_obj.to = new Array();
  connection_obj.from.push("ForBack" + "ID" + name_split[1]); //存入1个from
  connection_obj.to.push(notimeout_list[list_ind].blklist[for_begin]); //存入一个to
  connection_list.push(connection_obj);

  //生成rulelist
  var rule_obj = new Object();
  rule_obj.name = "repeat" + "ID" + name_split[1];
  rule_obj.from = notimeout_list[list_ind].blklist[for_begin];
  rule_obj.to = notimeout_list[list_ind].blklist[for_end];
  rule_obj.value = for_value;
  rule_list.push(rule_obj);

}

Arco.cdl['while2cdl'] = function (blkname, list_ind) {
  var while_list = new Array();
  var whiletype_list = new Array();
  var while_name = blkname;

  while_list.push("WhileStart"); //加入while生成的中间component项
  whiletype_list.push("WhileStart");
  while_list.push("WhileBack");
  whiletype_list.push("WhileBack");
  while_list.push("WhileEnd"); //加入while生成的中间component项
  whiletype_list.push("WhileEnd");
  while_list.push("WhileFinish");
  whiletype_list.push("WhileFinish");
  var name_split = while_name.split("ID"); //以ID进行划分
  var while_body_begin = blk_ind_info.whileblk[list_ind].bodybegin[name_split[1]];
  var while_body_end = blk_ind_info.whileblk[list_ind].bodyend[name_split[1]];
  var while_con_begin = blk_ind_info.whileblk[list_ind].conbegin[name_split[1]];
  var while_con_end = blk_ind_info.whileblk[list_ind].conend[name_split[1]];

  for (var i = while_con_begin; i <= while_con_end; i++) {
    var component_obj = new Object();
    component_obj.name = notimeout_list[list_ind].blklist[i];
    var temp_type_name = Arco.block.dev_type_match(notimeout_list[list_ind].blklist[i]);
    component_obj.type = temp_type_name;
    component_obj.behavior = new Object();
    component_obj.behavior.name = "";
    component_obj.behavior.value = "";
    component_list.push(component_obj);
  }
  for (var i = while_body_begin; i <= while_body_end; i++) {
    var component_obj = new Object();
    component_obj.name = notimeout_list[list_ind].blklist[i];
    var temp_type_name = Arco.block.dev_type_match(notimeout_list[list_ind].blklist[i]);
    component_obj.type = temp_type_name;
    component_obj.behavior = new Object();
    if (notimeout_list[list_ind].blklist[i].indexOf("text_print_delay") >= 0) {
      component_obj.behavior.name = "time";
      component_obj.behavior.value = notimeout_list[list_ind].blkvallist[i];
      component_list.push(component_obj);
      var component_obj = new Object();
      component_obj.name = "Delay" + "ID" + notimeout_list[list_ind].blklist[i].split("ID")[1];
      component_obj.type = "Delay";
      component_obj.behavior = new Object();
      component_obj.behavior.name = "";
      component_obj.behavior.value = "";
    } else {
      component_obj.behavior.name = "";
      component_obj.behavior.value = notimeout_list[list_ind].blkvallist[i];
    }

    component_list.push(component_obj);
  }

  for (var i = 0; i < while_list.length; i++) {
    var component_obj = new Object();
    component_obj.name = while_list[i] + "ID" + name_split[1];
    component_obj.type = whiletype_list[i];
    component_obj.behavior = new Object();
    component_obj.behavior.name = "";
    component_obj.behavior.value = "";
    component_list.push(component_obj);
  }

  //生成connection
  if (notimeout_list[list_ind].blklist[while_con_begin - 1].indexOf("and_statement") >= 0) //如果条件中是and，则生成一个con,WhileStart和WhileEnd生成两个
  {

    //判断前一个的类型
    if (notimeout_list[list_ind].blklist[while_con_begin - 5].indexOf("and_statement") >= 0) {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("WhileStart" + "ID" + name_split[1]); //存入一个to
      var inname_split = notimeout_list[list_ind].blklist[while_con_begin - 5].split();
      connection_obj.from.push("AndFinish" + "ID" + notimeout_list[list_ind].blklist[while_con_begin - 5].split("ID")[1]); //存入1个from
      for (var i = while_con_begin; i <= while_con_end; i++) {
        connection_obj.from.push(notimeout_list[list_ind].blklist[i]); //存入1个from
      }
      connection_list.push(connection_obj);
    } else if (notimeout_list[list_ind].blklist[while_con_begin - 5].indexOf("or_statement") >= 0) {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("WhileStart" + "ID" + name_split[1]); //存入一个to
      connection_obj.from.push("OrFinish" + "ID" + notimeout_list[list_ind].blklist[while_con_begin - 5].split("ID")[1]); //存入1个from
      for (var i = while_con_begin; i <= while_con_end; i++) {
        connection_obj.from.push(notimeout_list[list_ind].blklist[i]); //存入1个from
      }
      connection_list.push(connection_obj);
    } else if (notimeout_list[list_ind].blklist[while_con_begin - 5].indexOf("text_print_delay") >= 0) {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("WhileStart" + "ID" + name_split[1]); //存入一个to
      connection_obj.from.push("Delay" + "ID" + notimeout_list[list_ind].blklist[while_con_begin - 5].split("ID")[1]); //存入1个from
      connection_list.push(connection_obj);
    } else if (notimeout_list[list_ind].blklist[while_con_begin - 5].indexOf("for_statement") >= 0) {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("WhileStart" + "ID" + name_split[1]); //存入一个to
      var l_for_id = notimeout_list[list_ind].blklist[while_con_begin - 5].split("ID"); //以ID进行划分
      connection_obj.from.push("ForEnd" + "ID" + l_for_id[1]); //存入1个from
      for (var i = while_con_begin; i <= while_con_end; i++) {
        connection_obj.from.push(notimeout_list[list_ind].blklist[i]); //存入1个from
      }
      connection_list.push(connection_obj);
    } else if (notimeout_list[list_ind].blklist[while_con_begin - 5].indexOf("body_statement") >= 0) {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("WhileStart" + "ID" + name_split[1]); //存入一个to
      var l_while_id = notimeout_list[list_ind].blklist[while_con_begin - 5].split("ID"); //以ID进行划分
      connection_obj.from.push("WhileFinish" + "ID" + l_while_id[1]); //存入1个from
      for (var i = while_con_begin; i <= while_con_end; i++) {
        connection_obj.from.push(notimeout_list[list_ind].blklist[i]); //存入1个from
      }
      connection_list.push(connection_obj);
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("WhileStart" + "ID" + name_split[1]); //存入一个to
      connection_obj.from.push("WhileEnd" + "ID" + l_while_id[1]); //存入1个from
      for (var i = while_con_begin; i <= while_con_end; i++) {
        connection_obj.from.push(notimeout_list[list_ind].blklist[i]); //存入1个from
      }
      connection_list.push(connection_obj);
    } else if (notimeout_list[list_ind].blklist[while_con_begin - 5].indexOf("con_statement") >= 0) //前面为until
    {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      var l_until_id = notimeout_list[list_ind].blklist[while_con_begin - 5].split("ID"); //以ID进行划分
      connection_obj.to.push("WhileStart" + "ID" + name_split[1]); //存入一个to
      connection_obj.from.push("UntilEnd" + "ID" + l_until_id[1]); //存入1个from
      for (var i = while_con_begin; i <= while_con_end; i++) {
        connection_obj.from.push(notimeout_list[list_ind].blklist[i]); //存入1个from
      }
      connection_list.push(connection_obj);

    } else {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("WhileStart" + "ID" + name_split[1]); //存入一个to
      connection_obj.from.push(notimeout_list[list_ind].blklist[while_con_begin - 5]); //存入1个from
      for (var i = while_con_begin; i <= while_con_end; i++) {
        connection_obj.from.push(notimeout_list[list_ind].blklist[i]); //存入1个from
      }
      connection_list.push(connection_obj);
    }

    //whileend点
    //判断前一个的类型
    if (notimeout_list[list_ind].blklist[while_con_begin - 5].indexOf("and_statement") >= 0) {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("WhileEnd" + "ID" + name_split[1]); //存入一个to
      var and_name_split = notimeout_list[list_ind].blklist[while_con_begin - 5].split("ID");
      connection_obj.from.push("AndFinish" + "ID" + and_name_split[1]); //存入1个from
      for (var i = while_con_begin; i <= while_con_end; i++) {
        connection_obj.from.push(notimeout_list[list_ind].blklist[i]); //存入1个from
      }
      connection_list.push(connection_obj);
    } else if (notimeout_list[list_ind].blklist[while_con_begin - 5].indexOf("or_statement") >= 0) {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("WhileEnd" + "ID" + name_split[1]); //存入一个to
      var or_name_split = notimeout_list[list_ind].blklist[while_con_begin - 5].split("ID");
      connection_obj.from.push("OrFinish" + "ID" + or_name_split[1]); //存入1个from
      for (var i = while_con_begin; i <= while_con_end; i++) {
        connection_obj.from.push(notimeout_list[list_ind].blklist[i]); //存入1个from
      }
      connection_list.push(connection_obj);
    } else if (notimeout_list[list_ind].blklist[while_con_begin - 5].indexOf("text_print_delay") >= 0) {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("WhileEnd" + "ID" + name_split[1]); //存入一个to
      connection_obj.from.push("Delay" + "ID" + notimeout_list[list_ind].blklist[while_con_begin - 5].split("ID")[1]); //存入1个from
      connection_list.push(connection_obj);
    } else if (notimeout_list[list_ind].blklist[while_con_begin - 5].indexOf("for_statement") >= 0) {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("WhileEnd" + "ID" + name_split[1]); //存入一个to
      var l_for_id = notimeout_list[list_ind].blklist[while_con_begin - 5].split("ID"); //以ID进行划分
      connection_obj.from.push("ForEnd" + "ID" + l_for_id[1]); //存入1个from
      for (var i = while_con_begin; i <= while_con_end; i++) {
        connection_obj.from.push(notimeout_list[list_ind].blklist[i]); //存入1个from
      }
      connection_list.push(connection_obj);
    } else if (notimeout_list[list_ind].blklist[while_con_begin - 5].indexOf("body_statement") >= 0) {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("WhileEnd" + "ID" + name_split[1]); //存入一个to
      var l_while_id = notimeout_list[list_ind].blklist[while_con_begin - 5].split("ID"); //以ID进行划分
      connection_obj.from.push("WhileFinish" + "ID" + l_while_id[1]); //存入1个from
      for (var i = while_con_begin; i <= while_con_end; i++) {
        connection_obj.from.push(notimeout_list[list_ind].blklist[i]); //存入1个from
      }
      connection_list.push(connection_obj);
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("WhileEnd" + "ID" + name_split[1]); //存入一个to
      connection_obj.from.push("WhileEnd" + "ID" + l_while_id[1]); //存入1个from
      for (var i = while_con_begin; i <= while_con_end; i++) {
        connection_obj.from.push(notimeout_list[list_ind].blklist[i]); //存入1个from
      }
      connection_list.push(connection_obj);
    } else if (notimeout_list[list_ind].blklist[while_con_begin - 5].indexOf("con_statement") >= 0) //前面为until
    {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("WhileEnd" + "ID" + name_split[1]); //存入一个to
      var l_until_id = notimeout_list[list_ind].blklist[while_con_begin - 5].split("ID"); //以ID进行划分
      connection_obj.from.push("UntilEnd" + "ID" + l_until_id[1]); //存入1个from
      for (var i = while_con_begin; i <= while_con_end; i++) {
        connection_obj.from.push(notimeout_list[list_ind].blklist[i]); //存入1个from
      }
      connection_list.push(connection_obj);

    } else {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("WhileEnd" + "ID" + name_split[1]); //存入一个to
      connection_obj.from.push(notimeout_list[list_ind].blklist[while_con_begin - 5]); //存入1个from
      for (var i = while_con_begin; i <= while_con_end; i++) {
        connection_obj.from.push(notimeout_list[list_ind].blklist[i]); //存入1个from
      }
      connection_list.push(connection_obj);
    }

  } else if (notimeout_list[list_ind].blklist[while_con_begin - 1].indexOf("or_statement") >= 0) //如果条件中是or，则生成n个con，WhileStart和WhileEnd生成两个
  {
    for (var i = 0; i <= (while_con_end - while_con_begin); i++) {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("WhileStart" + "ID" + name_split[1]); //存入一个to
      //判断前一个的类型
      if (notimeout_list[list_ind].blklist[while_con_begin - 5].indexOf("and_statement") >= 0) {
        connection_obj.from.push("AndFinish"); //存入1个from
      } else if (notimeout_list[list_ind].blklist[while_con_begin - 5].indexOf("or_statement") >= 0) {
        connection_obj.from.push("OrFinish"); //存入1个from
      } else if (notimeout_list[list_ind].blklist[while_con_begin - 5].indexOf("for_statement") >= 0) {
        var l_for_id = notimeout_list[list_ind].blklist[while_con_begin - 5].split("ID"); //以ID进行划分
        connection_obj.from.push("ForEnd" + "ID" + l_for_id[1]); //存入1个from
      } else if (notimeout_list[list_ind].blklist[while_con_begin - 5].indexOf("body_statement") >= 0) {
        var l_while_id = notimeout_list[list_ind].blklist[while_con_begin - 5].split("ID"); //以ID进行划分
        connection_obj.from.push("WhileFinish" + "ID" + l_while_id[1]); //存入1个from
        connection_obj.from.push(notimeout_list[list_ind].blklist[while_con_begin + i]);
        connection_list.push(connection_obj);
        var connection_obj = new Object();
        connection_obj.from = new Array();
        connection_obj.to = new Array();
        connection_obj.to.push("WhileStart" + "ID" + name_split[1]); //存入一个to
        connection_obj.from.push("WhileEnd" + "ID" + l_while_id[1]);
      } else if (notimeout_list[list_ind].blklist[while_con_begin - 5].indexOf("con_statement") >= 0) {
        var l_until_id = notimeout_list[list_ind].blklist[while_con_begin - 5].split("ID"); //以ID进行划分
        connection_obj.from.push("UntilEnd" + "ID" + l_until_id[1]); //存入1个from
      } else {
        connection_obj.from.push(notimeout_list[list_ind].blklist[while_con_begin - 5]); //存入1个from
      }
      connection_obj.from.push(notimeout_list[list_ind].blklist[while_con_begin + i]);
      connection_list.push(connection_obj);

      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("WhileEnd" + "ID" + name_split[1]); //存入一个to
      //判断前一个的类型
      if (notimeout_list[list_ind].blklist[while_con_begin - 5].indexOf("and_statement") >= 0) {
        connection_obj.from.push("AndFinish"); //存入1个from
      } else if (notimeout_list[list_ind].blklist[while_con_begin - 5].indexOf("or_statement") >= 0) {
        connection_obj.from.push("OrFinish"); //存入1个from
      } else if (notimeout_list[list_ind].blklist[while_con_begin - 5].indexOf("for_statement") >= 0) {
        var l_for_id = notimeout_list[list_ind].blklist[while_con_begin - 5].split("ID"); //以ID进行划分
        connection_obj.from.push("ForEnd" + "ID" + l_for_id[1]); //存入1个from
      } else if (notimeout_list[list_ind].blklist[while_con_begin - 5].indexOf("body_statement") >= 0) {
        var l_while_id = notimeout_list[list_ind].blklist[while_con_begin - 5].split("ID"); //以ID进行划分
        connection_obj.from.push("WhileFinish" + "ID" + l_while_id[1]); //存入1个from
        connection_obj.from.push(notimeout_list[list_ind].blklist[while_con_begin + i]);
        connection_list.push(connection_obj);
        var connection_obj = new Object();
        connection_obj.from = new Array();
        connection_obj.to = new Array();
        connection_obj.to.push("WhileEnd" + "ID" + name_split[1]); //存入一个to
        connection_obj.from.push("WhileEnd" + "ID" + l_while_id[1]);
      } else {
        connection_obj.from.push(notimeout_list[list_ind].blklist[while_con_begin - 5]); //存入1个from
      }
      connection_obj.from.push(notimeout_list[list_ind].blklist[while_con_begin - 5]);
      connection_list.push(connection_obj);

    }

  }
  //WhileStart和WhileEnd生成两个connection
  var connection_obj = new Object();
  connection_obj.from = new Array();
  connection_obj.to = new Array();
  connection_obj.to.push(notimeout_list[list_ind].blklist[while_body_begin]); //存入一个to
  connection_obj.from.push("WhileStart" + "ID" + name_split[1]);
  connection_list.push(connection_obj);
  if (notimeout_list[list_ind].blklist[while_body_begin].indexOf("text_print_delay") >= 0) {
    var connection_obj = new Object();
    connection_obj.from = new Array();
    connection_obj.to = new Array();
    connection_obj.from.push(notimeout_list[list_ind].blklist[while_body_begin]);
    connection_obj.to.push("Delay" + "ID" + notimeout_list[list_ind].blklist[while_body_begin].split("ID")[1]);
    connection_list.push(connection_obj);
  }

  for (var i = 0; i < (while_body_end - while_body_begin); i++) //对于body当中的block，生成相应中间的connection
  {
    if (notimeout_list[list_ind].blklist[while_body_begin + i].indexOf("text_print_delay") >= 0) {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.from.push(notimeout_list[list_ind].blklist[while_body_begin + i]);
      connection_obj.to.push("Delay" + "ID" + notimeout_list[list_ind].blklist[while_body_begin + i].split("ID")[1]);
      connection_list.push(connection_obj);
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push(notimeout_list[list_ind].blklist[while_body_begin + i + 1]); //存入一个to
      connection_obj.from.push("Delay" + "ID" + notimeout_list[list_ind].blklist[while_body_begin + i].split("ID")[1]); //存入1个from
      connection_list.push(connection_obj);
    } else {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push(notimeout_list[list_ind].blklist[while_body_begin + i + 1]); //存入一个to
      connection_obj.from.push(notimeout_list[list_ind].blklist[while_body_begin + i]); //存入1个from
      connection_list.push(connection_obj);
    }

  }
  //生成W2处关键的connection，需要连接condition中的block
  if (notimeout_list[list_ind].blklist[while_con_begin - 1].indexOf("and_statement") >= 0) //如果条件中是and，则生成一个con,WhileBack,WhileFinish各一套
  {
    var connection_obj = new Object();
    connection_obj.from = new Array();
    connection_obj.to = new Array();
    connection_obj.to.push("WhileBack" + "ID" + name_split[1]); //存入一个to
    connection_obj.from.push(notimeout_list[list_ind].blklist[while_body_end]); //存入1个from
    for (var i = while_con_begin; i <= while_con_end; i++) {
      connection_obj.from.push(notimeout_list[list_ind].blklist[i]); //存入1个from
    }
    connection_list.push(connection_obj);

    var connection_obj = new Object();
    connection_obj.from = new Array();
    connection_obj.to = new Array();
    connection_obj.to.push("WhileFinish" + "ID" + name_split[1]); //存入一个to
    connection_obj.from.push(notimeout_list[list_ind].blklist[while_body_end]); //存入1个from
    for (var i = while_con_begin; i <= while_con_end; i++) {
      connection_obj.from.push(notimeout_list[list_ind].blklist[i]); //存入1个from
    }
    connection_list.push(connection_obj);

  } else if (notimeout_list[list_ind].blklist[while_con_begin - 1].indexOf("or_statement") >= 0) //如果条件中是and，则生成n个con
  {
    for (var i = 0; i <= (while_con_end - while_con_begin); i++) {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("WhileBack" + "ID" + name_split[1]); //存入一个to
      connection_obj.from.push(notimeout_list[list_ind].blklist[while_body_end]); //存入1个from
      connection_obj.from.push(notimeout_list[list_ind].blklist[while_con_begin + i]); //存入1个from
      connection_list.push(connection_obj);

      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("WhileFinish" + "ID" + name_split[1]); //存入一个to
      connection_obj.from.push(notimeout_list[list_ind].blklist[while_body_end]); //存入1个from
      connection_obj.from.push(notimeout_list[list_ind].blklist[while_con_begin + i]); //存入1个from
      connection_list.push(connection_obj);

    }

  }

  //W2结束后，要生成1个connection
  var connection_obj = new Object();
  connection_obj.from = new Array();
  connection_obj.to = new Array();
  connection_obj.to.push(notimeout_list[list_ind].blklist[while_body_begin]); //存入一个to
  connection_obj.from.push("WhileBack" + "ID" + name_split[1]); //存入1个from
  connection_list.push(connection_obj);

}
Arco.cdl['until2cdl'] = function (blkname, list_ind) {
  var until_list = new Array();
  var untiltype_list = new Array();
  var until_name = blkname;
  var list_ind = list_ind;
  alert(list_ind + "here!!!");
  var name_split = until_name.split("ID");
  until_list.push("UntilBack"); ////加入until生成的中间component项
  untiltype_list.push("UntilBack");
  until_list.push("UntilEnd");
  untiltype_list.push("UntilEnd");
  var until_con_begin = blk_ind_info.untilblk[list_ind].conbegin[name_split[1]];
  var until_con_end = blk_ind_info.untilblk[list_ind].conend[name_split[1]];
  var until_body_begin = blk_ind_info.untilblk[list_ind].bodybegin[name_split[1]];
  var until_body_end = blk_ind_info.untilblk[list_ind].bodyend[name_split[1]];

  //生成component
  for (var i = until_con_begin; i <= until_con_end; i++) {
    var component_obj = new Object();
    component_obj.name = notimeout_list[list_ind].blklist[i];
    var temp_type_name = Arco.block.dev_type_match(notimeout_list[list_ind].blklist[i]);
    component_obj.type = temp_type_name;
    component_obj.behavior = new Object();
    component_obj.behavior.name = "";
    component_obj.behavior.value = "";
    component_list.push(component_obj);
  }
  for (var i = until_body_begin; i <= until_body_end; i++) {

    if (notimeout_list[list_ind].blklist[i].indexOf("text_print_delay") >= 0) {
      var component_obj = new Object();
      component_obj.name = notimeout_list[list_ind].blklist[i];
      component_obj.type = "VDev";
      component_obj.behavior = new Object();
      component_obj.behavior.name = "time";
      component_obj.behavior.value = notimeout_list[list_ind].blkvallist[i];

      component_list.push(component_obj);
      var component_obj = new Object();
      component_obj.name = "Delay" + "ID" + notimeout_list[list_ind].blklist[i].split("ID")[1];
      component_obj.type = "Delay";
      component_obj.behavior.name = "";
      component_obj.behavior.value = "";
    } else {
      var component_obj = new Object();
      component_obj.name = notimeout_list[list_ind].blklist[i];
      var temp_type_name = Arco.block.dev_type_match(notimeout_list[list_ind].blklist[i]);
      component_obj.type = temp_type_name;
      component_obj.behavior = new Object();
      component_obj.behavior.name = "";
      component_obj.behavior.value = notimeout_list[list_ind].blkvallist[i];
    }

    component_list.push(component_obj);
  }

  for (var i = 0; i < until_list.length; i++) {
    var component_obj = new Object();
    component_obj.name = until_list[i] + "ID" + name_split[1];
    component_obj.type = untiltype_list[i];
    component_obj.behavior = new Object();
    component_obj.behavior.name = "";
    component_obj.behavior.value = "";
    component_list.push(component_obj);
  }

  //生成connectionlist
  //until之前的block和body第一个的con
  var connection_obj = new Object();
  connection_obj.from = new Array();
  connection_obj.to = new Array();
  connection_obj.to.push(notimeout_list[list_ind].blklist[until_body_begin]);
  //判断前一个的类型
  if (notimeout_list[list_ind].blklist[until_body_begin - 3].indexOf("and_statement") >= 0) {
    var inname_split = notimeout_list[list_ind].blklist[until_body_begin - 3].split("ID");
    connection_obj.from.push("AndFinish" + "ID" + inname_split[1]); //存入1个from
  } else if (notimeout_list[list_ind].blklist[until_body_begin - 3].indexOf("or_statement") >= 0) {
    var inname_split = notimeout_list[list_ind].blklist[until_body_begin - 3].split("ID");
    connection_obj.from.push("OrFinish" + "ID" + inname_split[1]); //存入1个from
  } else if (notimeout_list[list_ind].blklist[until_body_begin - 3].indexOf("text_print_delay") >= 0) {
    var inname_split = notimeout_list[list_ind].blklist[until_body_begin - 3].split("ID");
    connection_obj.from.push("Delay" + "ID" + inname_split[1]); //存入1个from
  } else if (notimeout_list[list_ind].blklist[until_body_begin - 3].indexOf("for_statement") >= 0) {
    var inname_split = notimeout_list[list_ind].blklist[until_body_begin - 3].split("ID");
    connection_obj.from.push("ForEnd" + "ID" + inname_split[1]); //存入1个from
  } else if (notimeout_list[list_ind].blklist[until_body_begin - 3].indexOf("body_statement") >= 0) {
    var inname_split = notimeout_list[list_ind].blklist[until_body_begin - 3].split("ID");
    connection_obj.from.push("WhileFinish" + "ID" + inname_split[1]); //存入1个from
    connection_list.push(connection_obj);
    var connection_obj = new Object();
    connection_obj.from = new Array();
    connection_obj.to = new Array();
    connection_obj.to.push(notimeout_list[list_ind].blklist[until_body_begin]);
    connection_obj.from.push("WhileEnd" + "ID" + inname_split[1]); //存入1个from
  } else if (notimeout_list[list_ind].blklist[until_body_begin - 3].indexOf("con_statement") >= 0) //前面为until
  {
    var inname_split = notimeout_list[list_ind].blklist[until_body_begin - 3].split("ID");
    connection_obj.from.push("UntilEnd" + "ID" + inname_split[1]); //存入1个from
  } else {
    connection_obj.from.push(notimeout_list[list_ind].blklist[until_body_begin - 3]); //存入1个from
  }
  connection_list.push(connection_obj);

  //body之间的block间的connection
  for (var i = 0; i < (until_body_end - until_body_begin); i++) //对于body当中的block，生成相应中间的connection
  {
    if (notimeout_list[list_ind].blklist[until_body_begin + i].indexOf("text_print_delay") >= 0) {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("Delay" + "ID" + notimeout_list[list_ind].blklist[until_body_begin + i].split("ID")[1]); //存入一个to
      connection_obj.from.push(notimeout_list[list_ind].blklist[until_body_begin + i]); //存入1个from
      connection_list.push(connection_obj);
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push(notimeout_list[list_ind].blklist[until_body_begin + i + 1]); //存入一个to
      connection_obj.from.push("Delay" + "ID" + notimeout_list[list_ind].blklist[until_body_begin + i].split("ID")[1]); //存入一个from
      connection_list.push(connection_obj);
    }
    var connection_obj = new Object();
    connection_obj.from = new Array();
    connection_obj.to = new Array();
    connection_obj.to.push(notimeout_list[list_ind].blklist[until_body_begin + i + 1]); //存入一个to
    connection_obj.from.push(notimeout_list[list_ind].blklist[until_body_begin + i]); //存入1个from
    connection_list.push(connection_obj);

  }

  //根据condition中的type，生成相应个数的connection
  if (notimeout_list[list_ind].blklist[until_con_begin - 1].indexOf("and_statement") >= 0) //如果条件中是and，则生成一个con,UntilBack和UntilEnd生成两个
  {
    var connection_obj = new Object();
    connection_obj.from = new Array();
    connection_obj.to = new Array();
    connection_obj.to.push("UntilBack" + "ID" + name_split[1]); //存入一个to
    connection_obj.from.push(notimeout_list[list_ind].blklist[until_body_end]);
    for (var i = until_con_begin; i <= until_con_end; i++) {
      connection_obj.from.push(notimeout_list[list_ind].blklist[i]); //存入1个from
    }
    connection_list.push(connection_obj);

    //UntilEnd点
    var connection_obj = new Object();
    connection_obj.from = new Array();
    connection_obj.to = new Array();
    connection_obj.to.push("UntilEnd" + "ID" + name_split[1]); //存入一个to
    connection_obj.from.push(notimeout_list[list_ind].blklist[until_body_end]);
    for (var i = until_con_begin; i <= until_con_end; i++) {
      connection_obj.from.push(notimeout_list[list_ind].blklist[i]); //存入1个from
    }
    connection_list.push(connection_obj);

  } else if (notimeout_list[list_ind].blklist[until_con_begin - 1].indexOf("or_statement") >= 0) //如果条件中是or，则生成n个con，UntilBack和UntilEnd生成两个
  {
    for (var i = 0; i <= (until_con_end - until_con_begin); i++) {
      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("UntilBack" + "ID" + name_split[1]); //存入一个to
      connection_obj.from.push(notimeout_list[list_ind].blklist[until_body_end]);
      connection_obj.from.push(notimeout_list[list_ind].blklist[until_con_begin + i]);
      connection_list.push(connection_obj);

      var connection_obj = new Object();
      connection_obj.from = new Array();
      connection_obj.to = new Array();
      connection_obj.to.push("UntilEnd" + "ID" + name_split[1]); //存入一个to
      connection_obj.from.push(notimeout_list[list_ind].blklist[until_body_end]);
      connection_obj.from.push(notimeout_list[list_ind].blklist[until_con_begin + i]);
      connection_list.push(connection_obj);

    }

  }
  //UN下面生成2个connection
  var connection_obj = new Object();
  connection_obj.from = new Array();
  connection_obj.to = new Array();
  connection_obj.to.push(notimeout_list[list_ind].blklist[until_body_begin]); //存入一个to
  connection_obj.from.push("UntilBack" + "ID" + name_split[1]);
  connection_list.push(connection_obj);

}

Arco.cdl['timeout2cdl'] = function (timeout_begin, timeout_end, list_ind, id) {
  var timeout_begin = timeout_begin;
  var timeout_end = timeout_end;
  var list_ind = list_ind;
  var id = id;
  //生成rule
  var rule_obj = new Object();
  rule_obj.name = "timeout" + "ID" + id;
  rule_obj.from = new Object();
  rule_obj.to = new Object();
  rule_obj.value = blk_list[list_ind].blkvallist[timeout_begin - 2];
  //如果第一项是sc\mc\tc\delay，则start from
  if (blk_list[list_ind].blklist[timeout_begin].indexOf("led") >= 0 || blk_list[list_ind].blklist[timeout_begin].indexOf("pir") >= 0 || blk_list[list_ind].blklist[timeout_begin].indexOf("switch") >= 0 || blk_list[list_ind].blklist[timeout_begin].indexOf("button") >= 0 || blk_list[list_ind].blklist[timeout_begin].indexOf("relay") >= 0 || blk_list[list_ind].blklist[timeout_begin].indexOf("text_print_delay") >= 0) {
    rule_obj.from.start = "From";
    rule_obj.from.name = blk_list[list_ind].blklist[timeout_begin];

  } else if (blk_list[list_ind].blklist[timeout_begin].indexOf("text_print_timeout") >= 0) {
    rule_obj.from.start = "From";
    for (var j = timeout_begin + 2; j < blk_list[list_ind].blklist.length; j++) {
      if (blk_list[list_ind].blklist[j].indexOf("text_print_timeout)") < 0) {
        rule_obj.from.name = blk_list[list_ind].blklist[j];
        j = blk_list[list_ind].blklist.length;
      }
    }
    if (rule_obj.from.name.indexOf("controls_repeat_for") >= 0) {
      rule_obj.from.start = "After";
      rule_obj.from.name = "ForEnd" + "ID" + rule_obj.from.name.split("ID")[1];
    }

  } else if (blk_list[list_ind].blklist[timeout_begin].indexOf("controls_repeat_for") >= 0) //如果第一项是for，则start after前一个组件
  {
    rule_obj.from.start = "After";
    if (blk_list[list_ind].blklist[timeout_begin - 3].indexOf("and_statement") >= 0) //如果前一项是and，则start after AndFinish
    {

      rule_obj.from.name = "AndFinish" + "ID" + blk_list[list_ind].blklist[timeout_begin - 3].split("ID")[1];

    } else if (blk_list[list_ind].blklist[timeout_begin - 3].indexOf("or_statement") >= 0) //如果前一项是or，则start after OrFinish
    {
      rule_obj.from.name = "OrFinish" + "ID" + blk_list[list_ind].blklist[timeout_begin - 3].split("ID")[1];
    } else if (blk_list[list_ind].blklist[timeout_begin - 3].indexOf("body_statement") >= 0) //如果前一项是while，则start after WhileEnd
    {
      rule_obj.from.name = "WhileEnd" + "ID" + blk_list[list_ind].blklist[timeout_begin - 3].split("ID")[1];
    } else if (blk_list[list_ind].blklist[timeout_begin - 3].indexOf("timeout_statement") >= 0) //如果前一项是timeout，
    {
      for (var j = timeout_begin - 4; j > 0; j--) {
        if (blk_list[list_ind].blklist[j].indexOf("timeout_statement)") < 0) {
          rule_obj.from.name = blk_list[list_ind].blklist[j];
          j = 0;
        }

      }

    } else if (blk_list[list_ind].blklist[timeout_begin - 3].indexOf("con_statement") >= 0) //如果前一项是until，则start after UntilEnd
    {
      rule_obj.from.name = "UntilEnd" + "ID" + blk_list[list_ind].blklist[timeout_begin - 3].split("ID")[1];
    } else {
      rule_obj.from.name = blk_list[list_ind].blklist[timeout_begin - 3];

    }

  }

  //如果最后项是sc\mc\tc\delay\timeout，则end to
  var temp_type_name = ui_type_match(blk_list[list_ind].blklist[timeout_end]);
  if (temp_type_name == "1" || temp_type_name == "2" || temp_type_name == "3" || temp_type_name == "4" || temp_type_name == "5" || temp_type_name == "6" || temp_type_name == "7") {
    rule_obj.to.end = "To";
    rule_obj.to.name = blk_list[list_ind].blklist[timeout_end];

  } else if (blk_list[list_ind].blklist[timeout_end].indexOf("text_print_delay") >= 0) {
    rule_obj.to.end = "To";
    rule_obj.to.name = blk_list[list_ind].blklist[timeout_end];

  } else if (blk_list[list_ind].blklist[timeout_end].indexOf("for_statement") >= 0) //如果最后一项是for，则start to一个组件
  {
    var name_split = blk_list[list_ind].blklist[timeout_end].split("ID"); //以ID进行划分
    rule_obj.to.end = "To";
    rule_obj.to.name = "ForEnd" + "ID" + name_split[1];
  } else if (blk_list[list_ind].blklist[timeout_end].indexOf("timeout_statement") >= 0) //如果最后一项是timeout
  {
    for (var j = timeout_end - 1; j > 0; j--) {
      if (blk_list[j].indexOf("timeout_statement)") < 0) {
        rule_obj.from.name = blk_list[list_ind].blklist[j];
        j = 0;
      }

    }
    var name_split = blk_list[list_ind].blklist[timeout_end].split("ID"); //以ID进行划分
    rule_obj.to.end = "To";
    rule_obj.to.name = "ForEnd" + "ID" + name_split[1];
  }

  rule_list.push(rule_obj);

}

Arco.cdl['delay2cdl'] = function (abr_blk_list, abr_val_list, i) {
   //生成component和connection
        var component_obj = new Object();
        component_obj.name = abr_blk_list[i];
        component_obj.type = "VDev";
        component_obj.behavior = new Object();
        component_obj.behavior.name = "time";
        component_obj.behavior.value = abr_val_list[i];
        component_list.push(component_obj);
        var component_obj = new Object();
        component_obj.name = "Delay" + "ID" + abr_blk_list[i].split("ID")[1];
        component_obj.type = "Delay";
        component_obj.behavior = new Object();
        component_obj.behavior.name = "";
        component_obj.behavior.value = "";
        component_list.push(component_obj);

        //生成connection，需判断之前组件类型
        var connection_obj = new Object();
        connection_obj.from = new Array();
        connection_obj.to = new Array();
        connection_obj.to.push(abr_blk_list[i]);
        if (abr_blk_list[i - 1].indexOf("controls_and") >= 0) {
          var inname_split = abr_blk_list[i - 1].split("ID");
          connection_obj.from.push("AndFinish" + "ID" + inname_split[1]); //存入1个from
        } else if (abr_blk_list[i - 1].indexOf("controls_or") >= 0) {
          var inname_split = abr_blk_list[i - 1].split("ID");
          connection_obj.from.push("OrFinish" + "ID" + inname_split[1]); //存入1个from
        } else if (abr_blk_list[i - 1].indexOf("text_print_delay") >= 0) {
          var inname_split = abr_blk_list[i - 1].split("ID");
          connection_obj.from.push("Delay" + "ID" + inname_split[1]); //存入1个from
        } else if (abr_blk_list[i - 1].indexOf("controls_repeat_for") >= 0) {
          var inname_split = abr_blk_list[i - 1].split("ID");
          connection_obj.from.push("ForEnd" + "ID" + inname_split[1]); //存入1个from
        } else if (abr_blk_list[i - 1].indexOf("controls_repeat_while") >= 0) {
          var inname_split = abr_blk_list[i - 1].split("ID");
          connection_obj.from.push("WhileFinish" + "ID" + inname_split[1]); //存入1个from
          connection_list.push(connection_obj);
          var connection_obj = new Object();
          connection_obj.from = new Array();
          connection_obj.to = new Array();
          connection_obj.to.push(abr_blk_list[i]);
          connection_obj.from.push("WhileEnd" + "ID" + inname_split[1]); //存入1个from
        } else if (abr_blk_list[i - 1].indexOf("controls_repeat_until") >= 0) //前面为until
        {
          var inname_split = abr_blk_list[i - 1].split("ID");
          connection_obj.from.push("UntilEnd" + "ID" + inname_split[1]); //存入1个from
        } else {
          connection_obj.from.push(abr_blk_list[i - 1]); //存入1个from
        }
        connection_list.push(connection_obj);
        var connection_obj = new Object();
        connection_obj.from = new Array();
        connection_obj.to = new Array();
        connection_obj.to.push("Delay" + "ID" + abr_blk_list[i].split("ID")[1]);
        connection_obj.from.push(abr_blk_list[i]);

        connection_list.push(connection_obj);

}

Arco.cdl['device2cdl'] = function(abr_blk_list, i) {

        var component_obj = new Object();
        var temp_type_name = Arco.block.dev_type_match(abr_blk_list[i]);
        component_obj.name = abr_blk_list[i];
        component_obj.type = temp_type_name;

        component_obj.behavior = new Object();
        component_obj.behavior.name = "";
        component_obj.behavior.value = "";
        component_list.push(component_obj);

        var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分
        if (i < abr_blk_list.length - 1 && i > 0) //不是最后一个和第一个
        {
          var connection_obj = new Object();
          connection_obj.from = new Array();
          connection_obj.to = new Array();
          connection_obj.to.push(abr_blk_list[i]);
          //判断前一个的类型
          if (abr_blk_list[i - 1].indexOf("text_print_delay") >= 0) {

            connection_obj.from.push("Delay" + "ID" + name_split[1]); //存入1个from

          } else if (abr_blk_list[i - 1].indexOf("controls_and") >= 0) {

            connection_obj.from.push("AndFinish" + "ID" + name_split[1]); //存入1个from

          } else if (abr_blk_list[i - 1].indexOf("controls_or") >= 0) {

            connection_obj.from.push("OrFinish" + "ID" + name_split[1]); //存入1个from

          } else if (abr_blk_list[i - 1].indexOf("controls_branch") >= 0) {

            var branch_andor = notimeout_list[j].blklist[blk_ind_info.branchblk[j].begin[name_split[1]]].split("ID");

            if (branch_andor.indexOf("controls_and") >= 0) {

              connection_obj.from.push("OrFinish" + "ID" + branch_andor[1]); //存入1个from

            } else if (branch_andor.indexOf("controls_or") >= 0) {

              connection_obj.from.push("AndFinish" + "ID" + branch_andor[1]); //存入1个from

            }
          } else if (abr_blk_list[i - 1].indexOf("controls_repeat_for") >= 0) {

            connection_obj.from.push("ForEnd" + name_split[1]); //存入1个from

          } else if (abr_blk_list[i - 1].indexOf("controls_repeat_while") >= 0) {

            connection_obj.from.push("WhileFinish" + "ID" + name_split[1]); //存入1个from
            connection_list.push(connection_obj);
            var connection_obj = new Object();
            connection_obj.from = new Array();
            connection_obj.to = new Array();
            connection_obj.to.push(abr_blk_list[i]);
            connection_obj.from.push("WhileEnd" + "ID" + name_split[1]); //存入1个from

          } else if (abr_blk_list[i - 1].indexOf("controls_repeat_until") >= 0){ //前面为until

            connection_obj.from.push("UntilEnd" + "ID" + name_split[1]); //存入1个from

          } else {

            connection_obj.from.push(abr_blk_list[i - 1]);
          }

          connection_list.push(connection_obj);

        } else if (i == abr_blk_list.length - 1){
         //当最后的组件是一般组件时
        
          var connection_obj = new Object();
          connection_obj.from = new Array();
          connection_obj.to = new Array();
          connection_obj.to.push(abr_blk_list[i]);
          //判断前一个的类型
          if (abr_blk_list[i - 1].indexOf("controls_and") >= 0) {
            //var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分
            connection_obj.from.push("AndFinish" + "ID" + name_split[1]); //存入1个from
          } else if (abr_blk_list[i - 1].indexOf("text_print_delay") >= 0) {
            //var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分
            connection_obj.from.push("Delay" + "ID" + name_split[1]); //存入1个from，，生成or里面包含组件个数的connection
          } else if (abr_blk_list[i - 1].indexOf("controls_or") >= 0) {
            //var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分
            connection_obj.from.push("OrFinish" + "ID" + name_split[1]); //存入1个from，，生成or里面包含组件个数的connection
          } else if (abr_blk_list[i - 1].indexOf("controls_branch") >= 0) {
            //var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分
            var branch_andor = notimeout_list[j].blklist[blk_ind_info.branchblk[j].begin[name_split[1]]].split("ID");
            if (branch_andor.indexOf("controls_and") >= 0) {
              connection_obj.from.push("OrFinish" + "ID" + branch_andor[1]); //存入1个from
            } else if (branch_andor.indexOf("controls_or") >= 0) {
              connection_obj.from.push("AndFinish" + "ID" + branch_andor[1]); //存入1个from
            }

          } else if (abr_blk_list[i - 1].indexOf("controls_repeat_for") >= 0) {
            //var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分
            connection_obj.from.push("ForEnd" + "ID" + name_split[1]); //存入1个from
          } else if (abr_blk_list[i - 1].indexOf("controls_repeat_while") >= 0) {
            //var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分
            connection_obj.from.push("WhileFinish" + "ID" + name_split[1]); //存入1个from
            connection_list.push(connection_obj);
            var connection_obj = new Object();
            connection_obj.from = new Array();
            connection_obj.to = new Array();
            connection_obj.to.push(abr_blk_list[i]);
            connection_obj.from.push("WhileEnd" + "ID" + name_split[1]); //存入1个from

          } else if (abr_blk_list[i - 1].indexOf("controls_repeat_until") >= 0) //前面为until
          {
            //var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分
            connection_obj.from.push("UntilEnd" + "ID" + name_split[1]); //存入1个from
          } else {
            
            connection_obj.from.push(abr_blk_list[i - 1]);
          }
          connection_list.push(connection_obj);

        }
}