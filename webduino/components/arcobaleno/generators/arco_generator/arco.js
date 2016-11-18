function arcoxml_gen() {
  var blk_list=ui_read(); //得到block——list
 
  var pname = document.getElementsByName("pname")[0].value;
  var version = document.getElementsByName("version")[0].value;
  var xmldoc = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  while (xmldoc.childNodes.length>0)
  {
      var b_element = xmldoc.childNodes[0]; //block节点
       xmldoc.removeChild(b_element); //删除节点
  }

  var p_element = document.createElement("project");
  b_element = xmldoc.appendChild(p_element);
  b_element.setAttribute("name", pname);
  b_element.setAttribute("version", version);
  for (var j=0;j<blk_list.length;j++)
  {

      var list_element = document.createElement("list");
      list_element = b_element.appendChild(list_element);
      for (var i = 0; i < blk_list[j].blklist.length; i++) {
        i = block_arcoxml(list_element, i,blk_list[j]);
        }
  }


  var arco_data = Blockly.Xml.domToText(xmldoc); //实现输出xml
  alert(arco_data);
  var tempxml = Blockly.Xml.textToDom(arco_data);
  var b_element = tempxml.childNodes[0]; //block节点
  b_element = b_element.childNodes[0]; //block节点
  var fileName = window.prompt('What would you like to name your file?', 'ARCOBALENOXML');
  if (fileName) {
    var blob = new Blob([arco_data], {
      type: 'text/xml'
    });
    saveAs(blob, fileName + ".xml");
  }
}

function block_arcoxml(element, itr,list_obj) {
  var b_element = element;
  var itr =itr;

  if (list_obj.blklist[itr].indexOf("controls_repeat_for") >= 0) {

    itr = for_arcoxml(b_element, itr,list_obj);

  } else if (list_obj.blklist[itr].indexOf("text_print_timeout") >= 0) {

    itr = timeout_arcoxml(b_element, itr,list_obj);

  } else if (list_obj.blklist[itr].indexOf("controls_and") >= 0) {
    itr = and_arcoxml(b_element, itr,list_obj); //返回值为and结束后的list中的项
  } else if (list_obj.blklist[itr].indexOf("controls_or") >= 0) {
    itr = or_arcoxml(b_element, itr,list_obj); //返回值为or结束后的list中的项
  } else if (list_obj.blklist[itr].indexOf("controls_branch") >= 0) {
    itr = branch_arcoxml(b_element, itr,list_obj); //返回值为branch结束后的list中的项
  } else if (list_obj.blklist[itr].indexOf("controls_repeat_while") >= 0) //判断是否为while组件
  {
    itr = while_arcoxml(b_element, itr,list_obj);

  } else if (list_obj.blklist[itr].indexOf("controls_repeat_until") >= 0) //判断是否为until组件
  {
    itr = until_arcoxml(b_element, itr,list_obj);

  } else if (list_obj.blklist[itr].indexOf("text_print_delay") >= 0) {
    itr = delay_arcoxml(b_element, itr,list_obj);

  } else //判断是一般组件的时候
  {
    var temp_element = document.createElement("block");
    var next_block = b_element.appendChild(temp_element);
    next_block.setAttribute("s", list_obj.blklist[itr]);

  }

  return itr;
}