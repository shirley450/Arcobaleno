function general_blk_check(abr_list) //总体check缩进后的list
{
  var erorr_num = 0;
  var find = 0;
  //先查重
  for (var j = 0; j < abr_list.length; j++) {
    var blk_list = abr_list[j].blklist;
    for (var i = 0; i < blk_list.length - 1; i++) {
      for (var w = i + 1; w < blk_list.length; w++) {
        if (blk_list[i] == blk_list[w]) {
          alert("Error:" + blk_list[i] + " can not be put several times at the list!");
          erorr_num++;

        }
      }

    }
  }

  for (var j = 0; j < abr_list.length; j++) {
    var abr_blk_list = abr_list[j].blklist;
    //第一个组件，只能是1，4是不可以的，其他都需要查找上面是否也有组件
    var temp_type_name = Arco.block.ui_type_match(abr_blk_list[0]);
    if (temp_type_name == "4") {
      alert("Error:" + abr_blk_list[0] + " can not be put at the top of the list!");
      erorr_num++;
    } else if (temp_type_name == "1") {
      if (abr_blk_list[0].indexOf("controls_and") < 0 && abr_blk_list[0].indexOf("controls_or") < 0) {
        blk_begin.push(abr_blk_list[0]);
      }
    } else {
      for (var i = 0; i < abr_list.length; i++) {
        if (i != j) {
          for (var w = 1; w < abr_list[i].blklist.length; w++) {
            if (abr_blk_list[0] == abr_list[i].blklist[w]) {
              find = 1;
            }
          }
        }
      }
      if ((find == 0 && temp_type_name == "3") || (find == 0 && temp_type_name == "7") || (find == 0 && temp_type_name == "5")) {

        blk_begin.push(abr_blk_list[0]);

      } else if (find == 1) {
        find = 0;
      } else if ((find == 0 && temp_type_name == "2")) {
        alert("Error:" + abr_blk_list[0] + " can not be put on the top of the list!");
        erorr_num++;
      }
    }
  }

  //中间组件，只能是2、3、6、7
  for (var j = 0; j < abr_list.length; j++) {
    var abr_blk_list = abr_list[j].blklist;
    for (var i = 1; i < abr_blk_list.length - 1; i++) {
      var temp_type_name = Arco.block.ui_type_match(abr_blk_list[i]);
      if (temp_type_name != "2" && temp_type_name != "3" && temp_type_name != "7" && temp_type_name != "6") {
        alert("Error:" + abr_blk_list[i] + " can not be put at the middle of the list!");
        erorr_num++;
      }
    }
  }

  //最后一个组件，只能是4、5、6、7,for,while,until和branch,除了4都需要查
  for (var j = 0; j < abr_list.length; j++) {
    var abr_blk_list = abr_list[j].blklist;
    var temp_type_name = Arco.block.ui_type_match(abr_blk_list[abr_blk_list.length - 1]);
    if (temp_type_name == "4") {
      blk_end.push(abr_blk_list[abr_blk_list.length - 1]);
    } else if (temp_type_name == "5" || temp_type_name == "6" || temp_type_name == "7") {
      for (var i = 0; i < abr_list.length - 1; i++) {
        if (i != j) {
          for (var w = 1; w < abr_list[j].blklist.length; w++) {
            if (abr_blk_list[abr_blk_list.length - 1] == abr_list[j].blklist[w - 1]) {
              find = 1;
            }
          }
        }
      }

      if (find == 0) {
        if (abr_blk_list[abr_blk_list.length - 1].indexOf("controls_repeat_for") < 0 && abr_blk_list[abr_blk_list.length - 1].indexOf("controls_repeat_while") < 0 && abr_blk_list[abr_blk_list.length - 1].indexOf("controls_repeat_until") < 0 && abr_blk_list[abr_blk_list.length - 1].indexOf("controls_branch") < 0) {
          blk_end.push(abr_blk_list[abr_blk_list.length - 1]);
        }
      } else if (find == 1) {
        find = 0;
      }

    } else {
      alert("Error:" + abr_blk_list[abr_blk_list.length - 1] + " can not be put at the bottom of the list!");
      erorr_num++;
    }
  }
  return erorr_num;

}

function blk_check(abr_list) {

  var erorr_num = 0;
  //遍历abr_list,每一项进入相应函数
  for (var j = 0; j < abr_list.length; j++) {
    var abr_blk_list = abr_list[j].blklist;
    for (var i = 0; i < abr_blk_list.length; i++) {
      if (abr_blk_list[i].indexOf("controls_and") >= 0) {
        var en_add = check_and(abr_blk_list[i], j);
        erorr_num = erorr_num + en_add;
      } else if (abr_blk_list[i].indexOf("controls_or") >= 0) {
        var en_add = check_or(abr_blk_list[i], j);
        erorr_num = erorr_num + en_add;
      } else if (abr_blk_list[i].indexOf("controls_repeat_for") >= 0) {
        var en_add = check_for(abr_blk_list[i], j);
        erorr_num = erorr_num + en_add;
      } else if (abr_blk_list[i].indexOf("controls_repeat_while") >= 0) {
        var en_add = check_while(abr_blk_list[i], j);
        erorr_num = erorr_num + en_add;
      } else if (abr_blk_list[i].indexOf("controls_repeat_until") >= 0) {
        var en_add = check_until(abr_blk_list[i], j);
        erorr_num = erorr_num + en_add;
      } else if (abr_blk_list[i].indexOf("controls_branch") >= 0) {
        var en_add = check_branch(abr_blk_list[i], j);
        erorr_num = erorr_num + en_add;
      }
    }
  }

  return erorr_num;
}

function check_and(blkname, list_ind) {
  var and_name = blkname;
  var name_split = and_name.split("ID");
  var list_ind = list_ind;
  var and_begin = blk_ind_info.andblk[list_ind].begin[name_split[1]];
  var and_end = blk_ind_info.andblk[list_ind].end[name_split[1]];
  var erorr_num = 0;
  var find = 0;
  //and在最开始,如果and里的组件没有源组件的属性，需要abr_list的其他的列中的blk是不是有上面有blk
  for (var j = and_begin; j <= and_end; j++) {
    var temp_type_name = Arco.block.ui_type_match(notimeout_list[list_ind].blklist[j]);
    if (temp_type_name == "1") {
      blk_begin.push(notimeout_list[list_ind].blklist[j]);
    } else if (temp_type_name == "2" || temp_type_name == "6" || temp_type_name == "3" || temp_type_name == "5" || temp_type_name == "7") //and组件里含有源组件的属性的组件类型1,3,5,7，需要查找的是2、6
    {

      for (var i = 0; i < abr_list.length; i++) {
        if (i != list_ind) {
          for (var w = 1; w < abr_list[i].blklist.length; w++) {
            if (abr_list[i].blklist[w] == notimeout_list[list_ind].blklist[j]) {
              find = 1;
            } else if (abr_list[i].blklist[w].indexOf("controls_branch") >= 0) {
              var branch_name_split = abr_list[i].blklist[w].split("ID");
              var branch_begin = blk_ind_info.branchblk[i].begin[branch_name_split[1]];
              var branch_end = blk_ind_info.branchblk[i].end[branch_name_split[1]];
              for (var t = branch_begin; t <= branch_end; t++) {
                if (notimeout_list[i].blklist[t] == notimeout_list[list_ind].blklist[j]) {
                  find = 1;
                }
              }
            }
          }
        }
      }
      if ((find == 0 && temp_type_name == "2") || (find == 0 && temp_type_name == "6")) {
        alert("Error:" + notimeout_list[list_ind].blklist[j] + " can not be put on the top of the list!");
        erorr_num++;
      } else if (find == 1) {
        find = 0;
      } else if ((find == 0 && temp_type_name == "3") || (find == 0 && temp_type_name == "5") || (find == 0 && temp_type_name == "7")) {
        blk_begin.push(notimeout_list[list_ind].blklist[j]);
        find = 0;
      }

    } else if (temp_type_name == "4") {
      alert("Error:" + notimeout_list[list_ind].blklist[j] + " can not be put on the top of the list!");
      erorr_num++;
    }
  }
  return erorr_num;
}

function check_or(blkname, list_ind) {
  var or_name = blkname;
  var name_split = or_name.split("ID");
  var list_ind = list_ind;
  var or_begin = blk_ind_info.orblk[list_ind].begin[name_split[1]];
  var or_end = blk_ind_info.orblk[list_ind].end[name_split[1]];
  var erorr_num = 0;
  var find = 0;
  //or在最开始,如果and里的组件没有源组件的属性，需要abr_list的其他的列中的blk是不是有上面有blk
  for (var j = or_begin; j <= or_end; j++) {
    var temp_type_name = Arco.block.ui_type_match(notimeout_list[list_ind].blklist[j]);
    if (temp_type_name == "1") {
      blk_begin.push(notimeout_list[list_ind].blklist[j]);
    } else if (temp_type_name == "2" || temp_type_name == "6" || temp_type_name == "3" || temp_type_name == "5" || temp_type_name == "7") //and组件里含有源组件的属性的组件类型1,3,5,7，需要查找的是2、6
    {

      for (var i = 0; i < abr_list.length; i++) {
        if (i != list_ind) {
          for (var w = 1; w < abr_list[i].blklist.length; w++) {
            if (abr_list[i].blklist[w] == notimeout_list[list_ind].blklist[j]) {
              find = 1;
            } else if (abr_list[i].blklist[w].indexOf("controls_branch") >= 0) {
              var branch_name_split = abr_list[i].blklist[w].split("ID");
              var branch_begin = blk_ind_info.branchblk[i].begin[branch_name_split[1]];
              var branch_end = blk_ind_info.branchblk[i].end[branch_name_split[1]];
              for (var t = branch_begin; t <= branch_end; t++) {
                if (notimeout_list[i].blklist[t] == notimeout_list[list_ind].blklist[j]) {
                  find = 1;
                }
              }
            }
          }
        }
      }
      if ((find == 0 && temp_type_name == "2") || (find == 0 && temp_type_name == "6")) {
        alert("Error:" + notimeout_list[list_ind].blklist[j] + " can not be put on the top of the list!");
        erorr_num++;
      } else if (find == 1) {
        find = 0;
      } else if ((find == 0 && temp_type_name == "3") || (find == 0 && temp_type_name == "5") || (find == 0 && temp_type_name == "7")) {
        blk_begin.push(notimeout_list[list_ind].blklist[j]);
        find = 0;
      }

    } else if (temp_type_name == "4") {
      alert("Error:" + notimeout_list[list_ind].blklist[j] + " can not be put on the top of the list!");
      erorr_num++;
    }
  }
  return erorr_num;

}

function check_branch(blkname, list_ind) {
  var branch_name = blkname;
  var name_split = branch_name.split("ID");
  var list_ind = list_ind;
  var branch_begin = blk_ind_info.branchblk[list_ind].begin[name_split[1]];
  var branch_end = blk_ind_info.branchblk[list_ind].end[name_split[1]];
  var erorr_num = 0;
  var find = 0;
  //branch在最后,或者中间夹着and/or,
  if (branch_end == notimeout_list[list_ind].blklist.length - 2) //branch在最后
  {

    for (var i = branch_begin; i <= branch_end; i++) {
      var temp_type_name = Arco.block.ui_type_match(notimeout_list[list_ind].blklist[i]);
      if (temp_type_name == "4") {
        blk_end.push(notimeout_list[list_ind].blklist[i]);
      } else if (temp_type_name == "5" && temp_type_name == "6" && temp_type_name == "7") {
        for (var j = 0; j < abr_list.length - 1; j++) {
          if (list_ind != j) {
            for (var w = 1; w < abr_list[j].blklist.length; w++) {
              if (notimeout_list[list_ind].blklist[i] == abr_list[j].blklist[w - 1]) {
                find = 1;
              }
            }
          }
        }

        if (find == 0) {
          if (notimeout_list[list_ind].blklist[i].indexOf("controls_repeat_for") < 0 && notimeout_list[list_ind].blklist[i].indexOf("controls_repeat_while") < 0 && notimeout_list[list_ind].blklist[i].indexOf("controls_repeat_until") < 0 && notimeout_list[list_ind].blklist[i].indexOf("controls_branch") < 0) {
            blk_end.push(notimeout_list[list_ind].blklist[i]);
          }
        } else if (find == 1) {
          find = 0;
        }
      } else {
        alert("Error:" + notimeout_list[list_ind].blklist[i] + " can not be put at the bottom of the list!");
        erorr_num++;
      }
    }
  } else { //branch不在最后
    if (notimeout_list[list_ind].blklist[branch_begin].indexOf("controls_and") >= 0 || notimeout_list[list_ind].blklist[branch_begin].indexOf("controls_or") >= 0) {
      for (var i = branch_begin + 2; i <= branch_end - 1; i++) {
        var temp_type_name = Arco.block.ui_type_match(notimeout_list[list_ind].blklist[i]);
        if (temp_type_name != "2" && temp_type_name != "3" && temp_type_name != "6" && temp_type_name != "7") {
          alert("Error:" + notimeout_list[list_ind].blklist[i] + " can not be put in the middle of the list!");
          erorr_num++;
        }
      }

    } else {
      alert("Error:" + notimeout_list[list_ind].blklist[branch_begin] + " can not be put in the middle of the branch!");
      erorr_num++;
    }

  }

  return erorr_num;

}

function check_for(blkname, list_ind) {
  var for_name = blkname;
  var name_split = for_name.split("ID");
  var list_ind = list_ind;
  var for_begin = blk_ind_info.forblk[list_ind].begin[name_split[1]];
  var for_end = blk_ind_info.forblk[list_ind].end[name_split[1]];
  var erorr_num = 0;
  var find=0;

  //for只能放中间组件属性2、3、6、7，如果后面没有blk，则需要查最后一个为终端组件属性4、5、6、7
  if (for_end == notimeout_list[list_ind].blklist.length - 2) //for在最后
  {
    var temp_type_name = Arco.block.ui_type_match(notimeout_list[list_ind].blklist[for_end]);
    if (temp_type_name == "4" ) {
      blk_end.push(notimeout_list[list_ind].blklist[for_end]);
    }  else if (temp_type_name == "5" || temp_type_name == "6" || temp_type_name == "7") {
      for (var i = 0; i < abr_list.length - 1; i++) {
        if (i != list_ind) {
          for (var w = 1; w < abr_list[i].blklist.length; w++) {
            if (notimeout_list[list_ind].blklist[for_end]== abr_list[j].blklist[w - 1]) {
              find = 1;
            }
          }
        }
      }
      if (find == 0) {
        if (notimeout_list[list_ind].blklist[for_end].indexOf("controls_repeat_for") < 0 && notimeout_list[list_ind].blklist[for_end].indexOf("controls_repeat_while") < 0 && notimeout_list[list_ind].blklist[for_end].indexOf("controls_repeat_until") < 0 && notimeout_list[list_ind].blklist[for_end].indexOf("controls_branch") < 0) {
          blk_end.push(notimeout_list[list_ind].blklist[for_end]);
        }
      } else if (find == 1) {
        find = 0;
      }


    }else  {
      alert("Error:" + notimeout_list[list_ind].blklist[for_end] + " can not be put at the bottom of the list!");
      erorr_num++;
    }



    for (var i = for_begin; i < for_end; i++) {
      var temp_type_name = Arco.block.ui_type_match(notimeout_list[list_ind].blklist[i]);
      if (temp_type_name != "2" && temp_type_name != "3" && temp_type_name != "6" && temp_type_name != "7") {
        alert("Error:" + notimeout_list[list_ind].blklist[i] + " can not be put in the middle of the list!");
        erorr_num++;
      }
    }
  } else { //for不在最后
    for (var i = for_begin; i <= for_end; i++) {
      var temp_type_name = Arco.block.ui_type_match(notimeout_list[list_ind].blklist[i]);
      if (temp_type_name != "2" && temp_type_name != "3" && temp_type_name != "6" && temp_type_name != "7") {
        alert("Error:" + notimeout_list[list_ind].blklist[i] + " can not be put in the middle of the list!");
        erorr_num++;
      }
    }
  }

  return erorr_num;

}

function check_while(blkname, list_ind) {
  var while_name = blkname;
  var name_split = while_name.split("ID");
  var list_ind = list_ind;
  var erorr_num = 0;
  var find = 0;
  var while_con_begin = blk_ind_info.whileblk[list_ind].conbegin[name_split[1]];
  var while_con_end = blk_ind_info.whileblk[list_ind].conend[name_split[1]];;
  var while_body_begin = blk_ind_info.whileblk[list_ind].bodybegin[name_split[1]];;
  var while_body_end = blk_ind_info.whileblk[list_ind].bodyend[name_split[1]];;
  //while只能在中间和最后
  if (while_body_end == notimeout_list[list_ind].blklist.length - 2) //while在最后
  {
    for (var j = while_con_begin; j <= while_con_end; j++) {
      var temp_type_name = Arco.block.ui_type_match(notimeout_list[list_ind].blklist[j]);
      if (temp_type_name == "1") {
        blk_begin.push(notimeout_list[list_ind].blklist[j]);
      } else if (temp_type_name == "2" || temp_type_name == "6" || temp_type_name == "3" || temp_type_name == "5" || temp_type_name == "7") //and组件里含有源组件的属性的组件类型1,3,5,7，需要查找的是2、6
      {

        for (var i = 0; i < abr_list.length; i++) {
          if (i != list_ind) {
            for (var w = 1; w < abr_list[i].blklist.length; w++) {
              if (abr_list[i].blklist[w] == notimeout_list[list_ind].blklist[j]) {
                find = 1;
              } else if (abr_list[i].blklist[w].indexOf("controls_branch") >= 0) {
                var branch_name_split = abr_list[i].blklist[w].split("ID");
                var branch_begin = blk_ind_info.branchblk[i].begin[branch_name_split[1]];
                var branch_end = blk_ind_info.branchblk[i].end[branch_name_split[1]];
                for (var t = branch_begin; t <= branch_end; t++) {
                  if (notimeout_list[i].blklist[t] == notimeout_list[list_ind].blklist[j]) {
                    find = 1;
                  }
                }
              }
            }
          }
        }
        if ((find == 0 && temp_type_name == "2") || (find == 0 && temp_type_name == "6")) {
          alert("Error:" + notimeout_list[list_ind].blklist[j] + " can not be put on the top of the list!");
          erorr_num++;
        } else if (find == 1) {
          find = 0;
        } else if ((find == 0 && temp_type_name == "3") || (find == 0 && temp_type_name == "5") || (find == 0 && temp_type_name == "7")) {
          blk_begin.push(notimeout_list[list_ind].blklist[j]);
          find = 0;
        }

      } else if (temp_type_name == "4") {
        alert("Error:" + notimeout_list[list_ind].blklist[j] + " can not be put on the top of the list!");
        erorr_num++;
      }
    }
    //查最后一个是不是终端组件
    var temp_type_name = Arco.block.ui_type_match(notimeout_list[list_ind].blklist[while_body_end]);
     if (temp_type_name == "4" ) {
      blk_end.push(notimeout_list[list_ind].blklist[while_body_end]);
    }  else if (temp_type_name == "5" || temp_type_name == "6" || temp_type_name == "7") {
      for (var i = 0; i < abr_list.length - 1; i++) {
        if (i != list_ind) {
          for (var w = 1; w < abr_list[i].blklist.length; w++) {
            if ( notimeout_list[list_ind].blklist[while_body_end]== abr_list[j].blklist[w - 1]) {
              find = 1;
            }
          }
        }
      }
      if (find == 0) {
        if ( notimeout_list[list_ind].blklist[while_body_end].indexOf("controls_repeat_for") < 0 &&  notimeout_list[list_ind].blklist[while_body_end].indexOf("controls_repeat_while") < 0 &&  notimeout_list[list_ind].blklist[while_body_end].indexOf("controls_repeat_until") < 0 &&  notimeout_list[list_ind].blklist[while_body_end].indexOf("controls_branch") < 0) {
          blk_end.push( notimeout_list[list_ind].blklist[while_body_end]);
        }
      } else if (find == 1) {
        find = 0;
      }
    }else  {
      alert("Error:" +  notimeout_list[list_ind].blklist[while_body_end]  + " can not be put at the bottom of the list!");
      erorr_num++;
    }

    for (var i = while_body_begin; i < while_body_end; i++) {
      var temp_type_name = Arco.block.ui_type_match(notimeout_list[list_ind].blklist[i]);
      if (temp_type_name != "2" && temp_type_name != "3" && temp_type_name != "6" && temp_type_name != "7") {
        alert("Error:" + notimeout_list[list_ind].blklist[i] + " can not be put in the middle of the list!");
        erorr_num++;
      }

    }

  } else //while在中间
  {
    for (var j = while_con_begin; j <= while_con_end; j++) {
      var temp_type_name = Arco.block.ui_type_match(notimeout_list[list_ind].blklist[j]);
      if (temp_type_name == "1") {
        blk_begin.push(notimeout_list[list_ind].blklist[j]);
      } else if (temp_type_name == "2" || temp_type_name == "6" || temp_type_name == "3" || temp_type_name == "5" || temp_type_name == "7") //and组件里含有源组件的属性的组件类型1,3,5,7，需要查找的是2、6
      {

        for (var i = 0; i < abr_list.length; i++) {
          if (i != list_ind) {
            for (var w = 1; w < abr_list[i].blklist.length; w++) {
              if (abr_list[i].blklist[w] == notimeout_list[list_ind].blklist[j]) {
                find = 1;
              } else if (abr_list[i].blklist[w].indexOf("controls_branch") >= 0) {
                var branch_name_split = abr_list[i].blklist[w].split("ID");
                var branch_begin = blk_ind_info.branchblk[i].begin[branch_name_split[1]];
                var branch_end = blk_ind_info.branchblk[i].end[branch_name_split[1]];
                for (var t = branch_begin; t <= branch_end; t++) {
                  if (notimeout_list[i].blklist[t] == notimeout_list[list_ind].blklist[j]) {
                    find = 1;
                  }
                }
              }
            }
          }
        }
        if ((find == 0 && temp_type_name == "2") || (find == 0 && temp_type_name == "6")) {
          alert("Error:" + notimeout_list[list_ind].blklist[j] + " can not be put on the top of the list!");
          erorr_num++;
        } else if (find == 1) {
          find = 0;
        } else if ((find == 0 && temp_type_name == "3") || (find == 0 && temp_type_name == "5") || (find == 0 && temp_type_name == "7")) {
          blk_begin.push(notimeout_list[list_ind].blklist[j]);
          find = 0;
        }

      } else if (temp_type_name == "4") {
        alert("Error:" + notimeout_list[list_ind].blklist[j] + " can not be put on the top of the list!");
        erorr_num++;
      }
    }

    for (var i = while_body_begin; i <= while_body_end; i++) {
      var temp_type_name = Arco.block.ui_type_match(notimeout_list[list_ind].blklist[i]);
      if (temp_type_name != "2" && temp_type_name != "3" && temp_type_name != "6" && temp_type_name != "7") {
        alert("Error:" + notimeout_list[list_ind].blklist[i] + " can not be put in the middle of the list!");
        erorr_num++;
      }
    }

  }
  return erorr_num;

}
function check_until(blkname, list_ind) {
  var until_name = blkname;
  var name_split = until_name.split("ID");
  var list_ind = list_ind;
  var erorr_num = 0;
  var find = 0;
  var until_body_begin = blk_ind_info.untilblk[list_ind].bodybegin[name_split[1]];
  var until_body_end = blk_ind_info.untilblk[list_ind].bodyend[name_split[1]];
  var until_con_begin = blk_ind_info.untilblk[list_ind].conbegin[name_split[1]];;
  var until_con_end = blk_ind_info.untilblk[list_ind].conend[name_split[1]];
  //until只能在中间和最后
  if (until_name == abr_list[list_ind].blklist[abr_list[list_ind].blklist.length - 1]) //until在最后
  {
    for (var j = until_con_begin; j <= until_con_end; j++) {
      var temp_type_name = Arco.block.ui_type_match(notimeout_list[list_ind].blklist[j]);
      if (temp_type_name == "1") {
        blk_begin.push(notimeout_list[list_ind].blklist[j]);
      } else if (temp_type_name == "2" || temp_type_name == "6" || temp_type_name == "3" || temp_type_name == "5" || temp_type_name == "7") //and组件里含有源组件的属性的组件类型1,3,5,7，需要查找的是2、6
      {

        for (var i = 0; i < abr_list.length; i++) {
          if (i != list_ind) {
            for (var w = 1; w < abr_list[i].blklist.length; w++) {
              if (abr_list[i].blklist[w] == notimeout_list[list_ind].blklist[j]) {
                find = 1;
              } else if (abr_list[i].blklist[w].indexOf("controls_branch") >= 0) {
                var branch_name_split = abr_list[i].blklist[w].split("ID");
                var branch_begin = blk_ind_info.branchblk[i].begin[branch_name_split[1]];
                var branch_end = blk_ind_info.branchblk[i].end[branch_name_split[1]];
                for (var t = branch_begin; t <= branch_end; t++) {
                  if (notimeout_list[i].blklist[t] == notimeout_list[list_ind].blklist[j]) {
                    find = 1;
                  }
                }
              }
            }
          }
        }
        if ((find == 0 && temp_type_name == "2") || (find == 0 && temp_type_name == "6")) {
          alert("Error:" + notimeout_list[list_ind].blklist[j] + " can not be put on the top of the list!");
          erorr_num++;
        } else if (find == 1) {
          find = 0;
        } else if ((find == 0 && temp_type_name == "3") || (find == 0 && temp_type_name == "5") || (find == 0 && temp_type_name == "7")) {
          blk_begin.push(notimeout_list[list_ind].blklist[j]);
          find = 0;
        }

      } else if (temp_type_name == "4") {
        alert("Error:" + notimeout_list[list_ind].blklist[j] + " can not be put on the top of the list!");
        erorr_num++;
      }
    }
    //检查最后一个是否为终端组件
    var temp_type_name = Arco.block.ui_type_match(notimeout_list[list_ind].blklist[until_body_end]);
    if (temp_type_name == "4" ) {
      blk_end.push(notimeout_list[list_ind].blklist[until_body_end]);
    }  else if (temp_type_name == "5" || temp_type_name == "6" || temp_type_name == "7") {
      for (var i = 0; i < abr_list.length - 1; i++) {
        if (i != list_ind) {
          for (var w = 1; w < abr_list[i].blklist.length; w++) {
            if ( notimeout_list[list_ind].blklist[until_body_end]== abr_list[j].blklist[w - 1]) {
              find = 1;
            }
          }
        }
      }
      if (find == 0) {
        if ( notimeout_list[list_ind].blklist[until_body_end].indexOf("controls_repeat_for") < 0 &&  notimeout_list[list_ind].blklist[until_body_end].indexOf("controls_repeat_while") < 0 &&  notimeout_list[list_ind].blklist[until_body_end].indexOf("controls_repeat_until") < 0 &&  notimeout_list[list_ind].blklist[until_body_end].indexOf("controls_branch") < 0) {
          blk_end.push( notimeout_list[list_ind].blklist[until_body_end]);
        }
      } else if (find == 1) {
        find = 0;
      }
    }else  {
      alert("Error:" +  notimeout_list[list_ind].blklist[until_body_end]  + " can not be put at the bottom of the list!");
      erorr_num++;
    }



    if (temp_type_name != "4" && temp_type_name != "5" && temp_type_name != "6" && temp_type_name != "7") {
      alert("Error:" + notimeout_list[list_ind].blklist[until_body_end] + " can not be put at the bottom of the list!");
      erorr_num++;
    }

    for (var i = until_body_begin; i < until_body_end; i++) {
      var temp_type_name = Arco.block.ui_type_match(notimeout_list[list_ind].blklist[i]);
      if (temp_type_name != "2" && temp_type_name != "3" && temp_type_name != "6" && temp_type_name != "7") {
        alert("Error:" + notimeout_list[list_ind].blklist[i] + " can not be put in the middle of the list!");
        erorr_num++;
      }

    }

  } else //until在中间
  {
    for (var j = until_con_begin; j <= until_con_end; j++) {
      var temp_type_name = Arco.block.ui_type_match(notimeout_list[list_ind].blklist[j]);
      if (temp_type_name == "1") {
        blk_begin.push(notimeout_list[list_ind].blklist[j]);
      } else if (temp_type_name == "2" || temp_type_name == "6" || temp_type_name == "3" || temp_type_name == "5" || temp_type_name == "7") //and组件里含有源组件的属性的组件类型1,3,5,7，需要查找的是2、6
      {

        for (var i = 0; i < abr_list.length; i++) {
          if (i != list_ind) {
            for (var w = 1; w < abr_list[i].blklist.length; w++) {
              if (abr_list[i].blklist[w] == notimeout_list[list_ind].blklist[j]) {
                find = 1;
              } else if (abr_list[i].blklist[w].indexOf("controls_branch") >= 0) {
                var branch_name_split = abr_list[i].blklist[w].split("ID");
                var branch_begin = blk_ind_info.branchblk[i].begin[branch_name_split[1]];
                var branch_end = blk_ind_info.branchblk[i].end[branch_name_split[1]];
                for (var t = branch_begin; t <= branch_end; t++) {
                  if (notimeout_list[i].blklist[t] == notimeout_list[list_ind].blklist[j]) {
                    find = 1;
                  }
                }
              }
            }
          }
        }
        if ((find == 0 && temp_type_name == "2") || (find == 0 && temp_type_name == "6")) {
          alert("Error:" + notimeout_list[list_ind].blklist[j] + " can not be put on the top of the list!");
          erorr_num++;
        } else if (find == 1) {
          find = 0;
        } else if ((find == 0 && temp_type_name == "3") || (find == 0 && temp_type_name == "5") || (find == 0 && temp_type_name == "7")) {
          blk_begin.push(notimeout_list[list_ind].blklist[j]);
          find = 0;
        }

      } else if (temp_type_name == "4") {
        alert("Error:" + notimeout_list[list_ind].blklist[j] + " can not be put on the top of the list!");
        erorr_num++;
      }
    }

    for (var i = until_body_begin; i <= until_body_end; i++) {
      var temp_type_name = Arco.block.ui_type_match(notimeout_list[list_ind].blklist[i]);
      if (temp_type_name != "2" && temp_type_name != "3" && temp_type_name != "6" && temp_type_name != "7") {
        alert("Error:" + notimeout_list[list_ind].blklist[i] + " can not be put in the middle of the list!");
        erorr_num++;
      }
    }

  }
  return erorr_num;

}

function check_timeout(blkname, list_ind) {
  var tm_name = blkname;
  var name_split = tm_name.split("ID");
  var list_ind = list_ind;
  var timeout_begin = blk_ind_info.timeoutblk[list_ind].begin[name_split[1]];
  var timeout_end = blk_ind_info.timeoutblk[list_ind].end[name_split[1]];
  //console.log(timeout_begin.toString(), timeout_end.toString());
  var c_and_begin;
  var c_and_end;
  var c_or_begin;
  var c_or_end;
  var c_branch_begin;
  var c_branch_end;
  var c_while_con_begin;
  var c_while_con_end;
  var c_until_con_begin;
  var c_until_con_end;
  var erorr_num = 0;
  //timeout中只可以接for、delay、timeout和一般组件、branch,不可以接while、until
  for (var i = timeout_begin; i <= timeout_end; i++) {
    if (blk_list[list_ind].blklist[i].indexOf("controls_repeat_for") >= 0) {
      var name_split = blk_list[list_ind].blklist[i].split("ID");
      //查找底下为for_statement项
      i = i + 2;
      for (var j = i; j < blk_list[list_ind].blklist.length; j++) {
        if (blk_list[list_ind].blklist[j] == "for_statement" + "ID" + name_split[1]) {
          j = blk_list[list_ind].blklist.length;
        } else {
          i++;
        }
        //i在for_statement处
      }
    } else if (blk_list[list_ind].blklist[i].indexOf("controls_and") >= 0) {
      var name_split = blk_list[list_ind].blklist[i].split("ID");
      //查找底下为and_statement项
      i = i + 2;
      for (var j = i; j < blk_list[list_ind].blklist.length; j++) {
        if (blk_list[list_ind].blklist[j] == "and_statement" + "ID" + name_split[1]) {
          j = blk_list[list_ind].blklist.length;
        } else {
          i++;
        }
      }
      //i在and_statement处
      alert("Error: controls_and can not be put in the timeout!");
      erorr_num++;
    } else if (blk_list[list_ind].blklist[i].indexOf("controls_or") >= 0) {
      var name_split = blk_list[list_ind].blklist[i].split("ID");
      //查找底下为or_statement项
      i = i + 2;
      for (var j = i; j < blk_list[list_ind].blklist.length; j++) {
        if (blk_list[list_ind].blklist[j] == "or_statement" + "ID" + name_split[1]) {
          j = blk_list[list_ind].blklist.length;
        } else {
          i++;
        }
      }
      //i在or_statement处
      alert("Error: controls_or can not be put in the timeout!");
      erorr_num++;
    } else if (blk_list[list_ind].blklist[i].indexOf("text_print_timeout") >= 0) {
      var name_split = blk_list[list_ind].blklist[i].split("ID");
      //查找底下为or_statement项
      i = i + 2;
      for (var j = i; j < blk_list[list_ind].blklist.length; j++) {
        if (blk_list[list_ind].blklist[j] == "branch_statement" + "ID" + name_split[1]) {
          j = blk_list[list_ind].blklist.length;
        } else {
          i++;
        }
      }
      //i在timeout_statement处
    } else if (blk_list[list_ind].blklist[i].indexOf("controls_branch") >= 0) {
      //branch不能是timeout——begin和timeout——end处
      if (timeout_begin == i || blk_list[list_ind].blklist[timeout_end].indexOf("branch_statement") >= 0) {
        alert("Error: controls_branch can not be put in begin or end of the timeout!");
        erorr_num++;
      }
      var name_split = blk_list[list_ind].blklist[i].split("ID");
      //查找底下为branch_statement项
      i = i + 2;
      for (var j = i; j < blk_list[list_ind].blklist.length; j++) {
        if (blk_list[list_ind].blklist[j] == "branch_statement" + "ID" + name_split[1]) {
          j = blk_list[list_ind].blklist.length;
        } else {
          i++;
        }
      }
      //i在branch_statement处
    } else if (blk_list[list_ind].blklist[i].indexOf("controls_repeat_while") >= 0) {
      var name_split = blk_list[list_ind].blklist[i].split("ID");
      //查找底下为con_statement项
      i = i + 2;
      for (var j = i; j < blk_list[list_ind].blklist.length; j++) {
        if (blk_list[list_ind].blklist[j] == "con_statement" + "ID" + name_split[1]) {
          j = blk_list[list_ind].blklist.length;
        } else {
          i++;
        }
        i = i + 2;
        if (blk_list[list_ind].blklist[j] == "body_statement" + "ID" + name_split[1]) {
          j = blk_list[list_ind].blklist.length;
        } else {
          i++;
        }
      }
      //i在body_statement处
      alert("Error: controls_repeat_while can not be put in the timeout!");
      erorr_num++;
    } else if (blk_list[list_ind].blklist[i].indexOf("controls_repeat_until") >= 0) {
      var name_split = blk_list[list_ind].blklist[i].split("ID");
      //查找底下为body_statement项
      i = i + 2;
      for (var j = i; j < blk_list[list_ind].blklist.length; j++) {
        if (blk_list[list_ind].blklist[j] == "body_statement" + "ID" + name_split[1]) {
          j = blk_list[list_ind].blklist.length;
        } else {
          i++;
        }
        i = i + 2;
        if (blk_list[list_ind].blklist[j] == "con_statement" + "ID" + name_split[1]) {
          j = blk_list[list_ind].blklist.length;
        } else {
          i++;
        }
      }
      //i在con_statement处
      alert("Error: controls_repeat_until can not be put in the timeout!");
      erorr_num++;
    }
  }
  //timeout不可以存放在and、or、branch、while的条件中,遍历函数查找各节点
  for (var i = 0; i < blk_list[list_ind].blklist.length; i++) {
    if (blk_list[list_ind].blklist[i].indexOf("controls_repeat_for") >= 0) {
      var name_split = blk_list[list_ind].blklist[i].split("ID");
      //查找底下为for_statement项
      i = i + 2;
      for (var j = i; j < blk_list[list_ind].blklist.length; j++) {
        if (blk_list[list_ind].blklist[j] == "for_statement" + "ID" + name_split[1]) {
          j = blk_list[list_ind].blklist.length;
        } else {
          i++;
        }
        //i在for_statement处
      }
    } else if (blk_list[list_ind].blklist[i].indexOf("controls_and") >= 0) {
      var name_split = blk_list[list_ind].blklist[i].split("ID");
      //查找底下为and_statement项
      i = i + 2;
      c_and_begin = i;
      for (var j = i; j < blk_list[list_ind].blklist.length; j++) {
        if (blk_list[list_ind].blklist[j] == "and_statement" + "ID" + name_split[1]) {
          j = blk_list[list_ind].blklist.length;
        } else {
          i++;
        }
      }
      //i在and_statement处
      c_and_end = i - 1;

      if ((c_and_begin < timeout_begin) && (c_and_end > timeout_end)) {
        alert("Error: timeout can not be put in the controls_and!");
        erorr_num++;
      }

    } else if (blk_list[list_ind].blklist[i].indexOf("controls_or") >= 0) {
      var name_split = blk_list[list_ind].blklist[i].split("ID");
      //查找底下为or_statement项
      i = i + 2;
      c_or_begin = i
      for (var j = i; j < blk_list[list_ind].blklist.length; j++) {
        if (blk_list[list_ind].blklist[j] == "or_statement" + "ID" + name_split[1]) {
          j = blk_list[list_ind].blklist.length;
        } else {
          i++;
        }
      }
      //i在and_statement处
      c_or_end = i - 1;
      if ((c_or_begin < timeout_begin) && (c_or_end > timeout_end)) {
        alert("Error: timeout  can not be put in the controls_or!");
        erorr_num++;
      }

    } else if (blk_list[list_ind].blklist[i].indexOf("controls_branch") >= 0) {
      var name_split = blk_list[list_ind].blklist[i].split("ID");
      //查找底下为or_statement项
      i = i + 2;
      c_branch_begin = i;
      for (var j = i; j < blk_list[list_ind].blklist.length; j++) {
        if (blk_list[list_ind].blklist[j] == "branch_statement" + "ID" + name_split[1]) {
          j = blk_list[list_ind].blklist.length;
        } else {
          i++;
        }
      }
      //i在and_statement处
      c_branch_end = i - 1;

      if ((c_branch_begin < timeout_begin) && (c_branch_end > timeout_end)) {
        alert("Error: timeout can not be put in the controls_branch!");
        erorr_num++;
      }
    } else if (blk_list[list_ind].blklist[i].indexOf("controls_repeat_while") >= 0) {
      var name_split = blk_list[list_ind].blklist[i].split("ID");
      //查找底下为con_statement项
      i = i + 2;
      c_while_con_begin = i;
      for (var j = i; j < blk_list[list_ind].blklist.length; j++) {
        if (blk_list[list_ind].blklist[j] == "con_statement" + "ID" + name_split[1]) {
          j = blk_list[list_ind].blklist.length;
        } else {
          i++;
        }
      }
      c_while_con_end = i - 1;
      i = i + 2;
      for (var j = i; j < blk_list[list_ind].blklist.length; j++) {
        if (blk_list[list_ind].blklist[j] == "body_statement" + "ID" + name_split[1]) {
          j = blk_list[list_ind].blklist.length;
        } else {
          i++;
        }
      }
      //i在body_statement处
      if ((c_while_con_begin < timeout_begin) && (c_while_con_end > timeout_end)) {
        alert("Error: timeout can not be put in the controls_repeat_while!");
        erorr_num++;
      }
    } else if (blk_list[list_ind].blklist[i].indexOf("controls_repeat_until") >= 0) {
      var name_split = blk_list[list_ind].blklist[i].split("ID");
      //查找底下为body_statement项
      i = i + 2;
      for (var j = i; j < blk_list[list_ind].blklist.length; j++) {
        if (blk_list[list_ind].blklist[j] == "body_statement" + "ID" + name_split[1]) {
          j = blk_list[list_ind].blklist.length;
        } else {
          i++;
        }
        i = i + 2;
        c_until_con_begin = i;
        if (blk_list[list_ind].blklist[j] == "con_statement" + "ID" + name_split[1]) {
          j = blk_list[list_ind].blklist.length;
        } else {
          i++;
        }
      }
      //i在con_statement处
      c_until_con_end = i - 1;

      if ((c_until_con_begin < timeout_begin) && (c_until_con_end > timeout_end)) {
        alert("Error: timeout can not be put in the controls_repeat_until!");
        erorr_num++;
      }
    }

    return erorr_num;
  }
}