Arco.block['parse_element'] = function (element, list_obj) {

  var b_element = element;
  var b_f_name;

  while(b_element.childNodes.length > 0) {
    if (b_element.tagName == "NEXT" || b_element.tagName == "STATEMENT") //第二次读取block
    {
      b_element = b_element.childNodes[0];
      b_f_name = b_element.getAttribute("type"); //block的名字
    } else {
      b_f_name = b_element.getAttribute("type"); //block的名字
    }

    if (b_f_name == "controls_repeat_for") {
      b_element = Arco.block.logicComponentsParse(b_f_name, list_obj, b_element, Arco.block.parse_forblk);
 
    } else if (b_f_name == "controls_and") {

      b_element = Arco.block.logicComponentsParse(b_f_name, list_obj, b_element, Arco.block.parse_andblk);

    } else if (b_f_name == "controls_or") {

      b_element = Arco.block.logicComponentsParse(b_f_name, list_obj, b_element, Arco.block.parse_orblk);

    } else if (b_f_name == "controls_repeat_while") {

      b_element = Arco.block.logicComponentsParse(b_f_name, list_obj, b_element, Arco.block.parse_whileblk);

    } else if (b_f_name == "controls_repeat_until") {

      b_element = Arco.block.logicComponentsParse(b_f_name, list_obj, b_element, Arco.block.parse_untilblk);

    } else if (b_f_name == "text_print_delay") {

      b_element = Arco.block.logicComponentsParse(b_f_name, list_obj, b_element, Arco.block.parse_delayblk);

    } else if (b_f_name == "text_print_timeout") {

      b_element = Arco.block.logicComponentsParse(b_f_name, list_obj, b_element, Arco.block.parse_timeoutblk);

    } else if (b_f_name == "controls_branch") {

      b_element = Arco.block.logicComponentsParse(b_f_name, list_obj, b_element, Arco.block.parse_branchblk);

    } else if(true) {

      var name = b_element.getElementsByTagName("FIELD")[0].childNodes[0].nodeValue;
      if(!id_count[b_f_name]) id_count[b_f_name.toString()] = 0;
      if(!id_info[b_f_name]) id_info[b_f_name.toString()] = new Array();

      var temp = b_f_name;
      if(name != name.toUpperCase()) //如果界面输入的不是默认组件名字
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
    }
    }
    return b_element;
}

Arco.block['logicComponentsParse'] = function (name,  list_obj, b_element, callback) {
  if(!id_count[name]) id_count[name.toString()] = 0;
  name = name + 'ID' + id_count[name.toString()];
  list_obj.blklist.push(name.toString());
  b_element = callback(b_element, list_obj);
  return b_element;
}



   /* else if (b_f_name == "led") {
      led_name = b_element.getElementsByTagName("FIELD")[0].childNodes[0].nodeValue; //对应led显示的值

      if (led_name != "LED") //如果界面输入的不是默认LED
      {
        if (led_name in led_info) //重复标记同一个组件
        {
          led_id_inner = led_info[led_name];
          b_f_name = b_f_name + "ID" + led_id_inner;
          list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
          list_obj.blkvallist.push("");
        } else {
          led_info[led_name] = led_id;
          b_f_name = b_f_name + "ID" + led_id;
          list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block

        }

      } else {
        b_f_name = b_f_name + "ID" + led_id;
        list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
        list_obj.blkvallist.push("");
      }
      led_id++;

      if (b_element.childNodes.length > 1) //取next
      {
        b_element = b_element.childNodes[1];

        
      } else if (b_element.childNodes.length ==1) {//组件在最后
        b_element = b_element.getElementsByTagName("FIELD")[0].childNodes[0];
      }
    }
    else if (b_f_name == "switch") {
      switch_name = b_element.getElementsByTagName("FIELD")[0].childNodes[0].nodeValue; //对应led显示的值

      if (switch_name != "SWITCH") //如果界面输入的不是默认SWITCH
      {
        if (switch_name in switch_info) //重复标记同一个组件
        {
          switch_id_inner = switch_info[switch_name];
          b_f_name = b_f_name + "ID" + switch_id_inner;
          list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
          list_obj.blkvallist.push("");
        } else {
          switch_info[switch_name] = switch_id;
          b_f_name = b_f_name + "ID" + switch_id;
          list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
          list_obj.blkvallist.push("");

        }

      } else {
        b_f_name = b_f_name + "ID" + switch_id;
        list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
        list_obj.blkvallist.push("");
      }
      switch_id++;
      if (b_element.childNodes.length > 1) //取next
      {
        b_element = b_element.childNodes[1];
     
      } else if (b_element.childNodes.length == 1) {
        b_element = b_element.getElementsByTagName("FIELD")[0].childNodes[0];

      }
    }   
    else if (b_f_name == "probe") {
      probe_name = b_element.getElementsByTagName("FIELD")[0].childNodes[0].nodeValue; //对应led显示的值

      if (probe_name != "Probe") //如果界面输入的不是默认SWITCH
      {
        if (probe_name in probe_info) //重复标记同一个组件
        {
          probe_id_inner = probe_info[probe_name];
          b_f_name = b_f_name + "ID" + probe_id_inner;
          list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
          list_obj.blkvallist.push("");
        } else {
          probe_info[probe_name] = probe_id;
          b_f_name = b_f_name + "ID" + probe_id;
          list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
          list_obj.blkvallist.push("");

        }

      } else {
        b_f_name = b_f_name + "ID" + probe_id;
        list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
        list_obj.blkvallist.push("");
      }
      probe_id++;
      if (b_element.childNodes.length > 1) //取next
      {
        b_element = b_element.childNodes[1];
     
      } else if (b_element.childNodes.length == 1) {
        b_element = b_element.getElementsByTagName("FIELD")[0].childNodes[0];

      }
    }  
    else if (b_f_name == "textgen") {
      textgen_name = b_element.getElementsByTagName("FIELD")[0].childNodes[0].nodeValue; //对应led显示的值

      if (textgen_name != "TextGen") //如果界面输入的不是默认SWITCH
      {
        if (textgen_name in textgen_info) //重复标记同一个组件
        {
          textgen_id_inner = textgen_info[textgen_name];
          b_f_name = b_f_name + "ID" + textgen_id_inner;
          list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
          list_obj.blkvallist.push("");
        } else {
          textgen_info[textgen_name] = textgen_id;
          b_f_name = b_f_name + "ID" + textgen_id;
          list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
          list_obj.blkvallist.push("");

        }

      } else {
        b_f_name = b_f_name + "ID" + textgen_id;
        list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
        list_obj.blkvallist.push("");
      }
      textgen_id++;
      if (b_element.childNodes.length > 1) //取next
      {
        b_element = b_element.childNodes[1];
     
      } else if (b_element.childNodes.length == 1) {
        b_element = b_element.getElementsByTagName("FIELD")[0].childNodes[0];

      }
    }  
    else if (b_f_name == "relay") {
      
      relay_name = b_element.getElementsByTagName("FIELD")[0].childNodes[0].nodeValue; //对应led显示的值

      if (relay_name != "RELAY") //如果界面输入的不是默认SWITCH
      {
        if (relay_name in relay_info) //重复标记同一个组件
        {
          relay_id_inner = relay_info[relay_name];
          b_f_name = b_f_name + "ID" + relay_id_inner;
          list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
          list_obj.blkvallist.push("");
        } else {
          relay_info[relay_name] = relay_id;
          b_f_name = b_f_name + "ID" + relay_id;
          list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
          list_obj.blkvallist.push("");

        }

      } else {
        b_f_name = b_f_name + "ID" + relay_id;
        list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
        list_obj.blkvallist.push("");
      }
      relay_id++;
      if (b_element.childNodes.length > 1) //取next
      {
        b_element = b_element.childNodes[1];
        
      } else if (b_element.childNodes.length == 1) {
        b_element = b_element.getElementsByTagName("FIELD")[0].childNodes[0];

      }
    }   
    else if (b_f_name == "pir") {
      
      pir_name = b_element.getElementsByTagName("FIELD")[0].childNodes[0].nodeValue; //对应led显示的值

      if (pir_name != "PIR") //如果界面输入的不是默认SWITCH
      {
        if (pir_name in pir_info) //重复标记同一个组件
        {
          pir_id_inner = pir_info[pir_name];
          b_f_name = b_f_name + "ID" + pir_id_inner;
          list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
          list_obj.blkvallist.push("");
        } else {
          pir_info[pir_name] = pir_id;
          b_f_name = b_f_name + "ID" + pir_id;
          list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
          list_obj.blkvallist.push("");

        }

      } else {
        b_f_name = b_f_name + "ID" + pir_id;
        list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
        list_obj.blkvallist.push("");
      }
      pir_id++;
      if (b_element.childNodes.length > 1) //取next
      {
        b_element = b_element.childNodes[1];
        
      } else if (b_element.childNodes.length == 1) {
        b_element = b_element.getElementsByTagName("FIELD")[0].childNodes[0];

      }
    }   
    else if (b_f_name == "button") {
      
      button_name = b_element.getElementsByTagName("FIELD")[0].childNodes[0].nodeValue; //对应led显示的值

      if (button_name != "BUTTON") //如果界面输入的不是默认SWITCH
      {
        if (button_name in button_info) //重复标记同一个组件
        {
          button_id_inner = button_info[button_name];
          b_f_name = b_f_name + "ID" + button_id_inner;
          list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
          list_obj.blkvallist.push("");
        } else {
          button_info[button_name] = button_id;
          b_f_name = b_f_name + "ID" + button_id;
          list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
          list_obj.blkvallist.push("");

        }

      } else {
        b_f_name = b_f_name + "ID" + button_id;
        list_obj.blklist.push(b_f_name); //往list_obj.blklist中放入block
        list_obj.blkvallist.push("");
      }
      button_id++;
      if (b_element.childNodes.length > 1) //取next
      {
        b_element = b_element.childNodes[1];
        
      } else if (b_element.childNodes.length == 1) {
        b_element = b_element.getElementsByTagName("FIELD")[0].childNodes[0];

      }
    }*/
  