function blk_list_check(blk_list, notimeout_list, blk_ind_info, abr_list) {

  //消除timeout项，改写为no_TO_List
  for (var i = 0; i < blk_list.length; i++) {
    var notimeout_obj = new Object();
    notimeout_obj.blklist = new Array();
    notimeout_obj.blkvallist = new Array();
    for (var j = 0; j < blk_list[i].blklist.length; j++) {
      if (blk_list[i].blklist[j].indexOf("text_print_timeout") < 0 && blk_list[i].blklist[j].indexOf("timeout_statement") < 0) {
        notimeout_obj.blklist.push(blk_list[i].blklist[j]);
        notimeout_obj.blkvallist.push(blk_list[i].blkvallist[j]);
      }
    }

    notimeout_list.push(notimeout_obj);
  }

  //找出timeout
  //重写timeout对象的结构，timeout为object，三个元素，一个list的编号，一个begin，一个end
  var timeout_list = new Array();
  var for_list = new Array();
  var while_list = new Array();
  var branch_list = new Array();
  var until_list = new Array();
  var and_list = new Array();
  var or_list = new Array();

  for (var i = 0; i < blk_list.length; i++) {
    var timeout_obj = new Object();
    timeout_obj.ind = i;
    timeout_obj.begin = new Array();
    timeout_obj.end = new Array();
    for (var j = 0; j < blk_list[i].blklist.length; j++) {

      if (blk_list[i].blklist[j].indexOf("text_print_timeout") >= 0) {
        var name_split = blk_list[i].blklist[j].split("ID");
        timeout_obj.begin[name_split[1]] = j + 2;
        //alert("timeout list begin :"+(j+2));
        j=j+1;
      } else if (blk_list[i].blklist[j].indexOf("timeout_statement") >= 0) {
        var name_split = blk_list[i].blklist[j].split("ID");
        timeout_obj.end[name_split[1]] = j - 1;
      }
    }
    timeout_list.push(timeout_obj);

  }

  for (var i = 0; i < notimeout_list.length; i++) //遍历拿到的notimeout_list列表
  {

    var for_obj = new Object();
    for_obj.ind = i;
    for_obj.begin = new Array();
    for_obj.end = new Array();

    var while_obj = new Object();
    while_obj.ind = i;
    while_obj.conbegin = new Array();
    while_obj.conend = new Array();
    while_obj.bodybegin = new Array();
    while_obj.bodyend = new Array();

    var until_obj = new Object();
    until_obj.ind = i;
    until_obj.conbegin = new Array();
    until_obj.conend = new Array();
    until_obj.bodybegin = new Array();
    until_obj.bodyend = new Array();

    var and_obj = new Object();
    and_obj.ind = i;
    and_obj.begin = new Array();
    and_obj.end = new Array();

    var or_obj = new Object();
    or_obj.ind = i;
    or_obj.begin = new Array();
    or_obj.end = new Array();

    var branch_obj = new Object();
    branch_obj.ind = i;
    branch_obj.begin = new Array();
    branch_obj.end = new Array();

    for (var j = 0; j < notimeout_list[i].blklist.length; j++) {
      if (notimeout_list[i].blklist[j].indexOf("controls_repeat_for") >= 0) //包含controls_repeat_for
      {

        var name_split = notimeout_list[i].blklist[j].split("ID"); //以ID进行划分
        j = j + 2; //光标下移到for_statement下面的第一个组件
        for_obj.begin[name_split[1]] = j;

      } else if (notimeout_list[i].blklist[j].indexOf("controls_and") >= 0) {

        var name_split = notimeout_list[i].blklist[j].split("ID"); //以ID进行划分
        j = j + 2; //光标下移到and_statement下面的第一个组件
        and_obj.begin[name_split[1]] = j;

      } else if (notimeout_list[i].blklist[j].indexOf("controls_or") >= 0) {
        var name_split = notimeout_list[i].blklist[j].split("ID"); //以ID进行划分
        j = j + 2; //光标下移到or_statement下面的第一个组件
        or_obj.begin[name_split[1]] = j;

      } else if (notimeout_list[i].blklist[j].indexOf("controls_branch") >= 0) {
        var name_split = notimeout_list[i].blklist[j].split("ID"); //以ID进行划分
        j = j + 2; //光标下移到branch_statement下面的第一个组件
        branch_obj.begin[name_split[1]] = j;

      } else if (notimeout_list[i].blklist[j].indexOf("for_statement") >= 0) //作为for的结束点
      {
        var name_split = notimeout_list[i].blklist[j].split("ID"); //以ID进行划分
        for_obj.end[name_split[1]] = j - 1;

      } else if (notimeout_list[i].blklist[j].indexOf("and_statement") >= 0) {
        var name_split = notimeout_list[i].blklist[j].split("ID"); //以ID进行划分
        and_obj.end[name_split[1]] = j - 1;

      } else if (notimeout_list[i].blklist[j].indexOf("or_statement") >= 0) {
        var name_split = notimeout_list[i].blklist[j].split("ID"); //以ID进行划分
        or_obj.end[name_split[1]] = j - 1;

      } else if (notimeout_list[i].blklist[j].indexOf("branch_statement") >= 0) {
        var name_split = notimeout_list[i].blklist[j].split("ID"); //以ID进行划分
        branch_obj.end[name_split[1]] = j - 1;

      } else if (notimeout_list[i].blklist[j].indexOf("controls_repeat_while") >= 0) {

        var name_split = notimeout_list[i].blklist[j].split("ID"); //以ID进行划分
        while_obj.conbegin[name_split[1]] = j + 4;
        
        j = j + 2; //光标移到条件判断的节点
        if (notimeout_list[i].blklist[j].indexOf("controls_and") >= 0) {
          var inname_split = notimeout_list[i].blklist[j].split("ID"); //以ID进行划分
          j = j + 2; //光标下移到and_statement下面的第一个组件        
          for (var w = j; w < notimeout_list[i].blklist.length; w++) {
            if (notimeout_list[i].blklist[w] == "and_statement" + "ID" + inname_split[1]) {
              w = notimeout_list[i].blklist.length;
            } else {

              j++;
            }

          }
          //光标此时在and_statement处
          while_obj.conend[name_split[1]] = j - 1;
          j = j + 3; //光标移到body_statement下一个组件
          while_obj.bodybegin[name_split[1]] = j;
          for (var w = j; w < notimeout_list[i].blklist.length; w++) {
            if (notimeout_list[i].blklist[w] == "body_statement" + "ID" + name_split[1]) {
              w = notimeout_list[i].blklist.length;
            } else {

              j++;
            }

          }
          while_obj.bodyend[name_split[1]] = j - 1;

        } else if (notimeout_list[i].blklist[j].indexOf("controls_or") >= 0) {
          var inname_split = notimeout_list[i].blklist[j].split("ID"); //以ID进行划分
          j = j + 2; //光标下移到or_statement下面的第一个组件
          for (var w = j; w < notimeout_list[i].blklist.length; w++) {
            if (notimeout_list[i].blklist[w] == "or_statement" + "ID" + inname_split[1]) {
              w = notimeout_list[i].blklist.length;
            } else {

              j++;
            }
          }
          while_obj.conend[name_split[1]] = j - 1;
          j = j + 3; //光标移到body_statement下一个组件
          while_obj.bodybegin[name_split[1]] = j;
          for (var w = j; w < notimeout_list[i].blklist.length; w++) {
            if (notimeout_list[i].blklist[w] == "body_statement" + "ID" + name_split[1]) {
              w = notimeout_list[i].blklist.length;
            } else {

              j++;
            }

          }
          while_obj.bodyend[name_split[1]] = j - 1;

        }

      } else if (notimeout_list[i].blklist[j].indexOf("controls_repeat_until") >= 0) {
        var name_split = notimeout_list[i].blklist[j].split("ID"); //以ID进行划分
        until_obj.bodybegin[name_split[1]] = j + 2;
        j = j + 2; //光标移到条件判断的节点
        for (var w = j; w < notimeout_list[i].blklist.length; w++) {
          if (notimeout_list[i].blklist[w] == "body_statement" + "ID" + name_split[1]) {
            w = notimeout_list[i].blklist.length;
          } else {

            j++;
          }

        }
        until_obj.bodyend[name_split[1]] = j - 1;
        j = j + 2;

        if (notimeout_list[i].blklist[j].indexOf("controls_and") >= 0) {
          var inname_split = notimeout_list[i].blklist[j].split("ID"); //以ID进行划分
          j = j + 2; //光标下移到and_statement下面的第一个组件
          until_obj.conbegin[name_split[1]] = j;

          for (var w = j; w < notimeout_list[i].blklist.length; w++) {
            if (notimeout_list[i].blklist[w] == "and_statement" + "ID" + inname_split[1]) {
              w = notimeout_list[i].blklist.length;
            } else {

              j++;
            }

          }
          //光标此时在and_statement处
          until_obj.conend[name_split[1]] = j - 1;

        } else if (notimeout_list[i].blklist[j].indexOf("controls_or") >= 0) {
          var inname_split = notimeout_list[i].blklist[j].split("ID"); //以ID进行划分
          j = j + 2; //光标下移到or_statement下面的第一个组件
          until_obj.conbegin[name_split[1]] = i;
          for (var w = j; w < notimeout_list[i].blklist.length; w++) {
            if (notimeout_list[i].blklist[w] == "or_statement" + "ID" + inname_split[1]) {
              w = notimeout_list[i].blklist.length;
            } else {

              j++;
            }
          }
          until_obj.conend[name_split[1]] = j - 1;

        }
        j++;

      }

    }
    for_list.push(for_obj);
    and_list.push(and_obj);
    or_list.push(or_obj);
    while_list.push(while_obj);
    until_list.push(until_obj);
    branch_list.push(branch_obj);
  }

  blk_ind_info.forblk = for_list;
  blk_ind_info.andblk = and_list;
  blk_ind_info.orblk = or_list;
  blk_ind_info.whileblk = while_list;
  blk_ind_info.untilblk = until_list;
  blk_ind_info.branchblk = branch_list;
  blk_ind_info.timeoutblk = timeout_list;


  //缩进notimeout_list，改写为abr_list，每一列为一个abr_obj
  for (var i = 0; i < notimeout_list.length; i++) {
    abr_obj = new Object();
    abr_obj.blklist = new Array();
    abr_obj.blkvallist = new Array();
    for (var j = 0; j < notimeout_list[i].blklist.length; j++) {
      if (notimeout_list[i].blklist[j].indexOf("controls_repeat_for") >= 0) {
        var name_split = notimeout_list[i].blklist[j].split("ID"); //以ID进行划分
        abr_obj.blklist.push(notimeout_list[i].blklist[j]);
        abr_obj.blkvallist.push(notimeout_list[i].blkvallist[j]);
        j = j + 2;
        for (var w = j; w < notimeout_list[i].blklist.length; w++) {
          if (notimeout_list[i].blklist[w] == ("for_statement" + "ID" + name_split[1])) {
            w = notimeout_list[i].blklist.length;
          } else {

            j++;
          }

        }

      } else if (notimeout_list[i].blklist[j].indexOf("controls_and") >= 0) {
        var name_split = notimeout_list[i].blklist[j].split("ID"); //以ID进行划分
        abr_obj.blklist.push(notimeout_list[i].blklist[j]);
        abr_obj.blkvallist.push(notimeout_list[i].blkvallist[j]);
        j = j + 2;
        for (var w = j; w < notimeout_list[i].blklist.length; w++) {
          if (notimeout_list[i].blklist[w] == "and_statement" + "ID" + name_split[1]) {
            w = notimeout_list[i].blklist.length;
          } else {

            j++;
          }

        }

      } else if (notimeout_list[i].blklist[j].indexOf("controls_or") >= 0) {
        var name_split = notimeout_list[i].blklist[j].split("ID"); //以ID进行划分
        abr_obj.blklist.push(notimeout_list[i].blklist[j]);
        abr_obj.blkvallist.push(notimeout_list[i].blkvallist[j]);
        j = j + 2;
        for (var w = j; w < notimeout_list[i].blklist.length; w++) {
          if (notimeout_list[i].blklist[w] == "or_statement" + "ID" + name_split[1]) {
            w = notimeout_list[i].blklist.length;
          } else {

            j++;
          }

        }
      } else if (notimeout_list[i].blklist[j].indexOf("controls_branch") >= 0) {
        var name_split = notimeout_list[i].blklist[j].split("ID"); //以ID进行划分
        abr_obj.blklist.push(notimeout_list[i].blklist[j]);
        abr_obj.blkvallist.push(notimeout_list[i].blkvallist[j]);
        j = j + 2;
        for (var w = j; w < notimeout_list[i].blklist.length; w++) {
          if (notimeout_list[i].blklist[w] == "branch_statement" + "ID" + name_split[1]) {
            w = notimeout_list[i].blklist.length;
          } else {

            j++;
          }

        }
      } else if (notimeout_list[i].blklist[j].indexOf("controls_repeat_while") >= 0) {
        var name_split = notimeout_list[i].blklist[j].split("ID"); //以ID进行划分
        abr_obj.blklist.push(notimeout_list[i].blklist[j]);
        abr_obj.blkvallist.push(notimeout_list[i].blkvallist[j]);
        j = j + 4; //光标下移到and_statement下面的第一个组件
        for (var w = j; w < notimeout_list[i].blklist.length; w++) {
          if (notimeout_list[i].blklist[w].indexOf("and_statement") >= 0 || notimeout_list[i].blklist[w].indexOf("or_statement") >= 0) {
            w = notimeout_list[i].blklist.length;
          } else {

            j++;
          }

        }
        //光标此时在and_statement处
        j = j + 3; //光标移到body_statement下一个组件
        for (var w = j; w < notimeout_list[i].blklist.length; w++) {
          if (notimeout_list[i].blklist[w] == "body_statement" + "ID" + name_split[1]) {
            w = notimeout_list[i].blklist.length;
          } else {

            j++;
          }

        }

      } else if (notimeout_list[i].blklist[j].indexOf("controls_repeat_until") >= 0) {
        var name_split = notimeout_list[i].blklist[j].split("ID"); //以ID进行划分
        abr_obj.blklist.push(notimeout_list[i].blklist[j]);
        abr_obj.blkvallist.push(notimeout_list[i].blkvallist[j]);
        j = j + 2;
        for (var w = j; w < notimeout_list[i].blklist.length; w++) {
          if (notimeout_list[i].blklist[w] == "body_statement" + "ID" + name_split[1]) {
            w = notimeout_list[i].blklist.length;
          } else {

            j++;
          }

        }
        j = j + 4;
        for (var w = j; w < notimeout_list[i].blklist.length; w++) {
          if (notimeout_list[i].blklist[w].indexOf("and_statement") >= 0 || notimeout_list[i].blklist[w].indexOf("or_statement") >= 0) {
            w = notimeout_list[i].blklist.length;
          } else {

            j++;
          }

        }
        j++;

      } else {
        abr_obj.blklist.push(notimeout_list[i].blklist[j]);
        abr_obj.blkvallist.push(notimeout_list[i].blkvallist[j]);
      }
    }

    abr_list.push(abr_obj);
  }

  //第一次普查
  for(var i=0;i<abr_list.length;i++)
  {
    alert("abr_list:"+abr_list[i].blklist);
  }
  var g_result=general_blk_check(abr_list);
  var erorr_num=0;
  if(g_result==0){//没有错误
     erorr_num=blk_check(abr_list);
  }else{
    erorr_num=g_result;
  }
  var tm_result=0;
  for(var i=0;i<blk_list.length;i++) {
    for(var j=0;j<blk_list[i].blklist.length;j++){
      if (blk_list[i].blklist[j].indexOf("text_print_timeout")>=0){
        tm_result=tm_result+check_timeout(blk_list[i].blklist[j], i);
      }
    }    
  }
  
  erorr_num=erorr_num+tm_result;
  return erorr_num;
}