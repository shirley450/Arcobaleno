

function for_arcoxml(element, itr,list_obj) {
  var b_element = element;
  var itr = itr;
  var temp_element = document.createElement("block");
  var next_block = b_element.appendChild(temp_element);
  next_block.setAttribute("s", list_obj.blklist[itr]);
  var name_split = list_obj.blklist[itr].split("ID");
  var abr_elements = document.createElement("elements");
  abr_elements = next_block.appendChild(abr_elements);
  abr_elements.setAttribute("s", "abr");
  var textnode = document.createTextNode(list_obj.blkvallist[itr]);
  abr_elements.appendChild(textnode);
  var statement_elements = document.createElement("elements");
  statement_elements = next_block.appendChild(statement_elements);
  statement_elements.setAttribute("s", "statement");
  itr = itr + 2;
  var end_for = list_obj.blklist.length;
  for (var j = itr; j < end_for; j++) {
    if (list_obj.blklist[j] == ("for_statement" + "ID" + name_split[1])) {
      itr = j;
      j = end_for;
    } else {
      j = block_arcoxml(statement_elements, j,list_obj); //block_xml之后，返回的itr值
    }
  }
  return itr;

}

function while_arcoxml(element, itr,list_obj) {
  var b_element = element;
  var itr = itr;
  var name_split = list_obj.blklist[itr].split("ID");
  var temp_element = document.createElement("block");
  var next_block = b_element.appendChild(temp_element);
  next_block.setAttribute("s", list_obj.blklist[itr]);
  var condition_elements = document.createElement("elements"); //condition的节点
  condition_elements = next_block.appendChild(condition_elements);
  condition_elements.setAttribute("s", "condition");
  var body_elements = document.createElement("elements"); //body的节点
  body_elements = next_block.appendChild(body_elements);
  body_elements.setAttribute("s", "body");
  itr = itr + 2; //指针下移到condition节点下面的第一个block
  var end_while = list_obj.blklist.length;
  for (var j = itr; j < end_while; j++) {
    if (list_obj.blklist[j] == ("con_statement" + "ID" + name_split[1])) {
      itr = j;
      j = end_while;
    } else {
      j = block_arcoxml(condition_elements, j,list_obj); //block_xml之后，返回的itr值
    }
  }

  itr = itr + 2; //移到body_statement中第一个
  for (var j = itr; j < end_while; j++) {
    if (list_obj.blklist[j] == ("body_statement" + "ID" + name_split[1])) {
      itr = j;
      j = end_while;
    } else {
      j = block_arcoxml(body_elements, j,list_obj); //block_xml之后，返回的itr值
    }
  }
  return itr;

}

function until_arcoxml(element, itr,list_obj) {
  var b_element = element;
  var itr = itr;
  var name_split = list_obj.blklist[itr].split("ID");
  var temp_element = document.createElement("block");
  var next_block = b_element.appendChild(temp_element);
  next_block.setAttribute("s", list_obj.blklist[itr]);
  var body_elements = document.createElement("elements"); //body的节点
  body_elements = next_block.appendChild(body_elements);
  body_elements.setAttribute("s", "body");
  var condition_elements = document.createElement("elements"); //condition的节点
  condition_elements = next_block.appendChild(condition_elements);
  condition_elements.setAttribute("s", "condition");

  itr = itr + 2; //指针下移到body节点下面的第一个block
  var end_until = list_obj.blklist.length;
  for (var j = itr; j < end_until; j++) {
    if (list_obj.blklist[j] == ("body_statement" + "ID" + name_split[1])) {
      itr = j;
      j = end_until;
    } else {
      j = block_arcoxml(body_elements, j); //block_xml之后，返回的itr值
    }
  }

  itr = itr + 2; //移到body_statement中第一个
  for (var j = itr; j < end_until; j++) {
    if (list_obj.blklist[j] == ("con_statement" + "ID" + name_split[1])) {
      itr = j;
      j = end_until;
    } else {
      j = block_arcoxml(condition_elements, j,list_obj); //block_xml之后，返回的itr值
    }
  }
  return itr;

}

function branch_arcoxml(element, itr,list_obj) {
  var b_element = element;
  var itr = itr;
  var name_split = list_obj.blklist[itr].split("ID");
  var temp_element = document.createElement("block");
  var next_block = b_element.appendChild(temp_element);
  next_block.setAttribute("s", list_obj.blklist[itr]);
  var statement_elements = document.createElement("elements");
  statement_elements = next_block.appendChild(statement_elements);
  statement_elements.setAttribute("s", "statement");
  itr = itr + 2; //指针下移到statement
  var end_branch = list_obj.blklist.length;
  for (var j = itr; j < end_branch; j++) {
    if (list_obj.blklist[j] == ("branch_statement" + "ID" + name_split[1])) {
      itr = j;
      j = end_branch;

    } else {
      j = block_arcoxml(statement_elements, j,list_obj); //block_xml之后，返回的itr值
    }
  }
  return itr;
}

function and_arcoxml(element, itr,list_obj) {
  var b_element = element;
  var itr = itr;
  var name_split = list_obj.blklist[itr].split("ID");
  var temp_element = document.createElement("block");
  var next_block = b_element.appendChild(temp_element);
  next_block.setAttribute("s", list_obj.blklist[itr]);
  var statement_elements = document.createElement("elements");
  statement_elements = next_block.appendChild(statement_elements);
  statement_elements.setAttribute("s", "statement");
  itr = itr + 2; //指针下移到statement
  var end_for = list_obj.blklist.length;
  for (var j = itr; j < end_for; j++) {
    if (list_obj.blklist[j] == ("and_statement" + "ID" + name_split[1])) {
      itr = j;
      j = end_for;

    } else {
      j = block_arcoxml(statement_elements, j,list_obj); //block_xml之后，返回的itr值
    }
  }
  return itr;
}

function or_arcoxml(element, itr,list_obj) {
  var b_element = element;
  var itr = itr;
  var name_split = list_obj.blklist[itr].split("ID");
  var temp_element = document.createElement("block");
  var next_block = b_element.appendChild(temp_element);
  next_block.setAttribute("s", list_obj.blklist[itr]);
  var statement_elements = document.createElement("elements");
  statement_elements = next_block.appendChild(statement_elements);
  statement_elements.setAttribute("s", "statement");
  itr = itr + 2; //指针下移到statement
  var end_for = list_obj.blklist.length;
  for (var j = itr; j < end_for; j++) {
    if (list_obj.blklist[j] == ("or_statement" + "ID" + name_split[1])) {
      itr = j;
      j = end_for;

    } else {
      j = block_arcoxml(statement_elements, j,list_obj); //block_xml之后，返回的itr值
    }
  }
  return itr;

}

function delay_arcoxml(element, itr,list_obj) {
  var b_element = element;
  var itr = itr;
  var temp_element = document.createElement("block");
  var next_block = b_element.appendChild(temp_element);
  next_block.setAttribute("s", list_obj.blklist[itr]);
  var num_elements = document.createElement("elements");
  num_elements = next_block.appendChild(num_elements);
  num_elements.setAttribute("s", "abr");
  var textnode = document.createTextNode(list_obj.blkvallist[itr]);
  num_elements.appendChild(textnode);
  return itr;
}

function timeout_arcoxml(element, itr,list_obj) {
  var b_element = element;
  var itr = itr;
  var name_split = list_obj.blklist[itr].split("ID");
  var temp_element = document.createElement("block");
  var next_block = b_element.appendChild(temp_element);
  next_block.setAttribute("s", list_obj.blklist[itr]);
  var abr_elements = document.createElement("elements");
  abr_elements = next_block.appendChild(abr_elements);
  abr_elements.setAttribute("s", "abr");
  var textnode = document.createTextNode(list_obj.blkvallist[itr]);
  abr_elements.appendChild(textnode);

  var statement_elements = document.createElement("elements");
  statement_elements = next_block.appendChild(statement_elements);
  statement_elements.setAttribute("s", "statement");
  itr = itr + 2; //指针下移到statement
  var end_for = list_obj.blklist.length;
  for (var j = itr; j < end_for; j++) {
    if (list_obj.blklist[j] == ("timeout_statement" + "ID" + name_split[1])) {
      itr = j;
      j = end_for;
    } else {
      j = block_arcoxml(statement_elements, j,list_obj); //block_xml之后，返回的itr值
    }
  }
  return itr;

}