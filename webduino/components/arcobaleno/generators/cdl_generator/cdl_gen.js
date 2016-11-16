
Arco.cdl['extract_component_and_connection'] = function(abr_list) {
  for (var j = 0; j < abr_list.length; j++) {
    var abr_blk_list = abr_list[j].blklist;
    var abr_val_list = abr_list[j].blkvallist;
    for (var i = 0; i < abr_blk_list.length; i++) //先写componentlist
    {
      if (abr_blk_list[i].indexOf("controls_and") >= 0) {
        //不生成component
        Arco.cdl.and2cdl(abr_blk_list[i], j);

      } else if (abr_blk_list[i].indexOf("text_print_delay") >= 0) {
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

      } else if (abr_blk_list[i].indexOf("controls_or") >= 0) {
        //不生成component
        Arco.cdl.or2cdl(abr_blk_list[i], j);

      } else if (abr_blk_list[i].indexOf("controls_branch") >= 0) {
        //不生成component
        Arco.cdl.branch2cdl(abr_blk_list[i], j);

      } else if (abr_blk_list[i].indexOf("controls_repeat_for") >= 0) {

        Arco.cdl.for2cdl(abr_blk_list[i], j);
      } else if (abr_blk_list[i].indexOf("controls_repeat_while") >= 0) {
        Arco.cdl.while2cdl(abr_blk_list[i], j);

      } else if (abr_blk_list[i].indexOf("controls_repeat_until") >= 0) {
        Arco.cdl.until2cdl(abr_blk_list[i], j);

      } else //
      {

        var component_obj = new Object();
        var temp_type_name = dev_type[abr_blk_list[i].split("ID")[0]];
        component_obj.name = abr_blk_list[i];
        component_obj.type = temp_type_name;

        component_obj.behavior = new Object();
        component_obj.behavior.name = "";
        component_obj.behavior.value = "";

        component_list.push(component_obj);

        if (i < abr_blk_list.length - 1 && i > 0) //不是最后一个和第一个
        {
          var connection_obj = new Object();
          connection_obj.from = new Array();
          connection_obj.to = new Array();
          connection_obj.to.push(abr_blk_list[i]);
          //判断前一个的类型
          if (abr_blk_list[i - 1].indexOf("text_print_delay") >= 0) 
          {
            var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分
            connection_obj.from.push("Delay" + "ID" + name_split[1]); //存入1个from
          } else if (abr_blk_list[i - 1].indexOf("controls_and") >= 0) 
          {
            var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分
            connection_obj.from.push("AndFinish" + "ID" + name_split[1]); //存入1个from
          } else if (abr_blk_list[i - 1].indexOf("controls_or") >= 0) 
          {
            var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分，生成or里面包含组件个数的connection
            connection_obj.from.push("OrFinish" + "ID" + name_split[1]); //存入1个from
          } else if (abr_blk_list[i - 1].indexOf("controls_branch") >= 0) 
          {
            var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分
            var branch_andor = notimeout_list[j].blklist[blk_ind_info.branchblk[j].begin[name_split[1]]].split("ID");
            if (branch_andor.indexOf("controls_and") >= 0) 
            {
              connection_obj.from.push("OrFinish" + "ID" + branch_andor[1]); //存入1个from
            } else if (branch_andor.indexOf("controls_or") >= 0) {
              connection_obj.from.push("AndFinish" + "ID" + branch_andor[1]); //存入1个from
            }
          } else if (abr_blk_list[i - 1].indexOf("controls_repeat_for") >= 0) 
          {
            var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分
            connection_obj.from.push("ForEnd" + name_split[1]); //存入1个from
          } else if (abr_blk_list[i - 1].indexOf("controls_repeat_while") >= 0)
          {
            var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分
            connection_obj.from.push("WhileFinish" + "ID" + name_split[1]); //存入1个from
            connection_list.push(connection_obj);
            var connection_obj = new Object();
            connection_obj.from = new Array();
            connection_obj.to = new Array();
            connection_obj.to.push(abr_blk_list[i]);
            connection_obj.from.push("WhileEnd" + "ID" + name_split[1]); //存入1个from
          } else if (abr_blk_list[i - 1].indexOf("controls_repeat_until") >= 0) //前面为until
          {
            var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分
            connection_obj.from.push("UntilEnd" + "ID" + name_split[1]); //存入1个from
          } else 
          {
            connection_obj.from.push(abr_blk_list[i - 1]);
          }
          connection_list.push(connection_obj);

        } else if (i == abr_blk_list.length - 1) //当最后的组件是一般组件时
        {
          var connection_obj = new Object();
          connection_obj.from = new Array();
          connection_obj.to = new Array();
          connection_obj.to.push(abr_blk_list[i]);
          //判断前一个的类型
          if (abr_blk_list[i - 1].indexOf("controls_and") >= 0) 
          {
            var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分
            connection_obj.from.push("AndFinish" + "ID" + name_split[1]); //存入1个from
          } else if (abr_blk_list[i - 1].indexOf("text_print_delay") >= 0) 
          {
            var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分
            connection_obj.from.push("Delay" + "ID" + name_split[1]); //存入1个from，，生成or里面包含组件个数的connection
          } else if (abr_blk_list[i - 1].indexOf("controls_or") >= 0) 
          {
            var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分
            connection_obj.from.push("OrFinish" + "ID" + name_split[1]); //存入1个from，，生成or里面包含组件个数的connection
          } else if (abr_blk_list[i - 1].indexOf("controls_branch") >= 0) 
          {
            var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分
            var branch_andor = notimeout_list[j].blklist[blk_ind_info.branchblk[j].begin[name_split[1]]].split("ID");
            if (branch_andor.indexOf("controls_and") >= 0) 
            {
              connection_obj.from.push("OrFinish" + "ID" + branch_andor[1]); //存入1个from
            } else if (branch_andor.indexOf("controls_or") >= 0) {
              connection_obj.from.push("AndFinish" + "ID" + branch_andor[1]); //存入1个from
            }

          } else if (abr_blk_list[i - 1].indexOf("controls_repeat_for") >= 0) {
            var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分
            connection_obj.from.push("ForEnd" + "ID" + name_split[1]); //存入1个from
          } else if (abr_blk_list[i - 1].indexOf("controls_repeat_while") >= 0) {
            var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分
            connection_obj.from.push("WhileFinish" + "ID" + name_split[1]); //存入1个from
            connection_list.push(connection_obj);
            var connection_obj = new Object();
            connection_obj.from = new Array();
            connection_obj.to = new Array();
            connection_obj.to.push(abr_blk_list[i]);
            connection_obj.from.push("WhileEnd" + "ID" + name_split[1]); //存入1个from
          } else if (abr_blk_list[i - 1].indexOf("controls_repeat_until") >= 0) //前面为until
          {
            var name_split = abr_blk_list[i - 1].split("ID"); //以ID进行划分
            connection_obj.from.push("UntilEnd" + "ID" + name_split[1]); //存入1个from
          } else {
            connection_obj.from.push(abr_blk_list[i - 1]);
          }
          connection_list.push(connection_obj);

        }
      }

    }
  }

  //查重 对component进行排查
  var del_comp = new Array();
  for (var i = 0; i < (component_list.length - 1); i++) {
    for (var j = i + 1; j < component_list.length; j++) {
      if (component_list[i].name == component_list[j].name) {
        del_comp.push(j);
      }
    }
  }
  del_comp.sort();
  for (var i = 0; i < del_comp.length; i++) {
    component_list.splice(del_comp[i], 1);
    if (del_comp.length > 1) {
      for (var j = i + 1; j < del_comp.length; j++) {
        del_comp[j]--;
      }
    }
  }

  var del_list = new Array();
  //查重 对connection进行排查
  for (var i = 0; i < connection_list.length; i++) {
    for (var j = 0; j < connection_list.length; j++) {
      var dup_from_num = 0;
      var dup_to_num = 0;
      for (var w = 0; w < connection_list[i].from.length; w++) {
        for (var k = 0; k < connection_list[j].from.length; k++) {
          if (j != i && connection_list[i].from[w] == connection_list[j].from[k]) {
            dup_from_num++;
          }
        }
      }
      for (var w = 0; w < connection_list[i].to.length; w++) {
        for (var k = 0; k < connection_list[j].to.length; k++) {
          if (j != i && connection_list[i].to[w] == connection_list[j].to[k]) {
            dup_to_num++;
          }
        }
      }
      if (dup_from_num == connection_list[i].from.length && dup_to_num == connection_list[i].to.length) {
        var del_comp = new Object();
        del_comp.dupa = i;
        del_comp.dupb = j;
        del_list.push(del_comp);
      }
      if (j != i && connection_list[i].from.length == 1 && connection_list[j].from.length == 1 && connection_list[i].from[0].indexOf("OrFinish") >= 0 && connection_list[j].from[0].indexOf("OrFinish") >= 0) { //查找from OrFinish到下一个组件的connection是否重复
        var next_result = Arco.block.orfinish_next_match(connection_list[i].from[0], connection_list[j].from[0]);
        if (next_result == 1) //相同的connection，标记
        {
          var del_comp = new Object();
          del_comp.dupa = i;
          del_comp.dupb = j;
          del_list.push(del_comp);
        }
      }

      if (j != i && connection_list[i].to.length == 1 && connection_list[j].to.length == 1 && connection_list[i].to[0].indexOf("OrFinish") >= 0 && connection_list[j].to[0].indexOf("OrFinish") >= 0) { //查找from组件到OrFinish的connection是否重复
        var next_result = Arco.block.orfinish_next_match(connection_list[i].to[0], connection_list[j].to[0]);
        if (next_result == 1 && connection_list[i].from[0] == connection_list[j].from[0]) //相同的两个connection
        {
          var del_comp = new Object();
          del_comp.dupa = i;
          del_comp.dupb = j;
          del_list.push(del_comp);
        }
      }

      if (j != i && connection_list[i].to.length == 1 && connection_list[j].to.length == 1 && connection_list[i].to[0].indexOf("AndFinish") >= 0 && connection_list[j].to[0].indexOf("AndFinish") >= 0) { //查找to 组件到AndFinish的connection是否重复
        var next_result = Arco.block.orfinish_next_match(connection_list[i].to[0], connection_list[j].to[0]);
        if (next_result == 1) //相同的两个connection
        {
          var dup_and_from = 0;
          for (var w = 0; w < connection_list[i].from.length; w++) {
            for (var k = 0; k < connection_list[j].from.length; k++) {
              if (j != i && connection_list[i].from[w] == connection_list[j].from[k]) {
                dup_and_from++;
              }
            }
          }

          if (dup_and_from == connection_list[i].from.length) //i和jconnection可以消除一个
          {
            var del_comp = new Object();
            del_comp.dupa = i;
            del_comp.dupb = j;
            del_list.push(del_comp);

            var del_comp = new Object();
            del_comp.dupa = Arco.block.andfinish_from_match(connection_list[i].to[0]); //查找from AndFinish到下一个组件的connection是否重复
            del_comp.dupb = Arco.block.andfinish_from_match(connection_list[j].to[0]);
            del_list.push(del_comp);
          }
        }

      }

    }
  }

  var del_con = new Array();
  for (var i = 0; i < del_list.length - 1; i++) {
    for (var j = i + 1; j < del_list.length; j++) {
      if (del_list[i].dupa == del_list[j].dupb) {
        if (del_list[i].dupa > del_list[i].dupb) {
          del_con.push(del_list[i].dupa);
        } else {
          del_con.push(del_list[i].dupb);
        }
      }
    }
  }

  del_con.sort();

  for (var i = del_con.length - 1; i >= 0; i--) {
    connection_list.splice(del_con[i], 1);
  }

}


Arco.cdl['extract_rule'] = function(abr_list){
  for (var i = 0; i < blk_list.length; i++) {
    for (var j = 0; j < blk_list[i].blklist.length; j++) {
      if (blk_list[i].blklist[j].indexOf("text_print_timeout") >= 0) {
        var name_split = blk_list[i].blklist[j].split("ID");
        Arco.cdl.timeout2cdl(blk_ind_info.timeoutblk[i].begin[name_split[1]], blk_ind_info.timeoutblk[i].end[name_split[1]], blk_ind_info.timeoutblk[i].ind, name_split[1]);
      }
    }
  }
}

Arco.cdl['generate'] = function(xmlcdl) {
  for (; xmlcdl.childNodes.length > 0;) {
    var b_element = xmlcdl.childNodes[0]; //block节点
    xmlcdl.removeChild(b_element); //删除节点
  }

  var p_element = document.createElement("cdl");
  b_element = xmlcdl.appendChild(p_element);
  b_element.setAttribute("name", pname);
  b_element.setAttribute("version", version);
  var component_list_element = document.createElement("list");
  component_list_element = b_element.appendChild(component_list_element);
  component_list_element.setAttribute("name", "component");
  var connection_list_element = document.createElement("list");
  connection_list_element = b_element.appendChild(connection_list_element);
  connection_list_element.setAttribute("name", "connection");
  var rule_list_element = document.createElement("list");
  rule_list_element = b_element.appendChild(rule_list_element);
  rule_list_element.setAttribute("name", "rule");

  //遍历componentlist

  //Arco.cdl.generate_component(component_list_element);
  for (var i = 0; i < component_list.length; i++) {
    var component_element = document.createElement("component");
    component_element = component_list_element.appendChild(component_element);
    component_element.setAttribute("name", component_list[i].name);
    var type_element = document.createElement("type");
    type_element = component_element.appendChild(type_element);
    var textnode = document.createTextNode(component_list[i].type);
    type_element.appendChild(textnode);
    var behavior_element = document.createElement("behavior");
    behavior_element = component_element.appendChild(behavior_element);
    var behavior_name_element = document.createElement("name");
    behavior_name_element = behavior_element.appendChild(behavior_name_element);
    var textnode = document.createTextNode(component_list[i].behavior.name);
    behavior_name_element.appendChild(textnode);
    var behavior_value_element = document.createElement("value");
    behavior_value_element = behavior_element.appendChild(behavior_value_element);
    var textnode = document.createTextNode(component_list[i].behavior.value);
    behavior_value_element.appendChild(textnode);
    var begin_end_type = document.createElement("begin_end_type");
    begin_end_type = component_element.appendChild(begin_end_type);
    var textnode = document.createTextNode(Arco.block.cmp_type_match(component_list[i].name));
    begin_end_type.appendChild(textnode);

    if (component_list[i].name.indexOf("OrFinish") >= 0 || component_list[i].name.indexOf("AndFinish") >= 0) {
      var next_element = document.createElement("next");
      next_element = component_element.appendChild(next_element);
      var textnode = document.createTextNode(component_list[i].next);
      next_element.appendChild(textnode);
    }
  }

  //遍历connectionlist
  //Arco.cdl.generate_connection_list(connection_list);
  for (var i = 0; i < connection_list.length; i++) {
    var connection_element = document.createElement("connection");
    connection_element = connection_list_element.appendChild(connection_element);
    connection_element.setAttribute("name", "con_" + i);
    for (var j = 0; j < connection_list[i].from.length; j++) {
      var from_element = document.createElement("from");
      from_element = connection_element.appendChild(from_element);
      from_element.setAttribute("name", connection_list[i].from[j]);
    }
    for (var j = 0; j < connection_list[i].to.length; j++) {
      var to_element = document.createElement("to");
      to_element = connection_element.appendChild(to_element);
      to_element.setAttribute("name", connection_list[i].to[j]);
    }

  }

  //遍历rulelist
  //Arco.cdl.generate_rule_list(rule_list);
  for (var i = 0; i < rule_list.length; i++) {
    var rule_element = document.createElement("rule");
    rule_element = rule_list_element.appendChild(rule_element);
    rule_element.setAttribute("name", rule_list[i].name);
    if (rule_list[i].name.indexOf("repeat") >= 0) {
      var from_element = document.createElement("from");
      from_element = rule_element.appendChild(from_element);
      from_element.setAttribute("name", rule_list[i].from);
      var to_element = document.createElement("to");
      to_element = rule_element.appendChild(to_element);
      to_element.setAttribute("name", rule_list[i].to);

    } else if (rule_list[i].name.indexOf("timeout") >= 0) {
      var start_element = document.createElement("start");
      start_element = rule_element.appendChild(start_element);
      start_element.setAttribute(rule_list[i].from.start, rule_list[i].from.name);
      var end_element = document.createElement("end");
      end_element = rule_element.appendChild(end_element);
      end_element.setAttribute(rule_list[i].to.end, rule_list[i].to.name);

    }

    var value_element = document.createElement("value");
    value_element = rule_element.appendChild(value_element);
    var textnode = document.createTextNode(rule_list[i].value);
    value_element.appendChild(textnode);
  }
  var cdl_data = Blockly.Xml.domToText(xmlcdl); //实现输出xml
  var fileName = window.prompt('What would you like to name your file?', 'cdlXML');
  if (fileName) {
    var blob = new Blob([cdl_data], {
      type: 'text/xml'
    });
    saveAs(blob, fileName + ".xml");
  }

  return cdl_data;
}

Arco.cdl['extract'] = function(abr_list) {
  //第一遍生成component、connection、rulelist
  Arco.cdl.extract_component_and_connection(abr_list);
  //有timeout存在时，生成相应的rule
  Arco.cdl.extract_rule(abr_list);
}

Arco.cdl['generate_cdl'] = function(abr_list) {

  Arco.cdl.extract(abr_list);
  var xmlcdl = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace); //新建domtree
  return Arco.cdl.generate(xmlcdl);
  
}
