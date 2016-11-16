'use strict';

goog.provide('Blockly.Blocks.webduino');
goog.require('Blockly.Blocks');

Blockly.Blocks.colour.HUE = 120;
Blockly.Blocks.colour.HUESON = 70;

/* 
      .o8                                        
     "888                                        
 .oooo888   .ooooo.  ooo. .oo.  .oo.    .ooooo.  
d88' `888  d88' `88b `888P"Y88bP"Y88b  d88' `88b 
888   888  888ooo888  888   888   888  888   888 
888   888  888    .o  888   888   888  888   888 
`Y8bod88P" `Y8bod8P' o888o o888o o888o `Y8bod8P' 
*/
Blockly.Blocks['led'] = {
  /**
   * Block for device.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
  "type": "device",
  "message0": "Device %1",
  "args0": [
    {
      "type": "field_input",
      "name": "TYPE",
      "text": "LED"
    }
  ],
      "previousStatement": null,
      "nextStatement": null,
  "colour": Blockly.Blocks.texts.HUE,
});
  }
};

Blockly.Blocks['switch'] = {
  /**
   * Block for device.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
  "type": "device",
  "message0": "Device %1",
  "args0": [
    {
      "type": "field_input",
      "name": "TYPE",
      "text": "SWITCH"
    }
  ],
      "previousStatement": null,
      "nextStatement": null,
  "colour": Blockly.Blocks.texts.HUE,
});
  }
};

Blockly.Blocks['relay'] = {
  /**
   * Block for device.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
  "type": "device",
  "message0": "Device %1",
  "args0": [
    {
      "type": "field_input",
      "name": "TYPE",
      "text": "RELAY"
    }
  ],
      "previousStatement": null,
      "nextStatement": null,
  "colour": Blockly.Blocks.texts.HUE,
});
  }
};

Blockly.Blocks['button'] = {
  /**
   * Block for device.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
  "type": "device",
  "message0": "Device %1",
  "args0": [
    {
      "type": "field_input",
      "name": "TYPE",
      "text": "BUTTON"
    }
  ],
      "previousStatement": null,
      "nextStatement": null,
  "colour": Blockly.Blocks.texts.HUE,
});
  }
};

Blockly.Blocks['pir'] = {
  /**
   * Block for device.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
  "type": "device",
  "message0": "Device %1",
  "args0": [
    {
      "type": "field_input",
      "name": "TYPE",
      "text": "PIR"
    }
  ],
      "previousStatement": null,
      "nextStatement": null,
  "colour": Blockly.Blocks.texts.HUE,
});
  }
};

Blockly.Blocks['textgen'] = {
  /**
   * Block for device.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
  "type": "device",
  "message0": "TextGen %1",
  "args0": [
    {
      "type": "field_input",
      "name": "TYPE",
      "text": "TextGen"
    }
  ],
      "previousStatement": null,
      "nextStatement": null,
  "colour": Blockly.Blocks.texts.HUE,
});
  }
};
Blockly.Blocks['probe'] = {
  /**
   * Block for device.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
  "type": "device",
  "message0": "Probe %1",
  "args0": [
    {
      "type": "field_input",
      "name": "TYPE",
      "text": "Probe"
    }
  ],
      "previousStatement": null,
      "nextStatement": null,
  "colour": Blockly.Blocks.texts.HUE,
});
  }
};

Blockly.Blocks['text_print_delay'] = {
  /**
   * Block for adding delay time between statements.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "Delay %1 s",
      "args0": [
        {
          "type": "input_value",
          "name": "TIMES",
          "check": "Number",
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.texts.HUE,

    });
  }
};


Blockly.Blocks['text_print_timeout'] = {
  /**
   * Block for timeout of statements.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "Timeout %1 s %2 %3",
      "args0": [
        {
          "type": "input_value",
          "name": "TIMES",
          "check": "Number",
        }, 
        {
          "type": "input_dummy",
        },    
        {
          "type":"input_statement",
          "name": "elements",
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.texts.HUE,

    });
  }
};

Blockly.Blocks['controls_repeat_for'] = {
  /**
   * Block for repeat n times (external number).
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "For %1 Times %2  %3",
      "args0": [
        {
          "type": "input_value",
          "name": "TIMES",
          "check": "Number",
        },
        {
          "type": "input_dummy",
        },       
        {
          "type":"input_statement",
          "name": "elements",
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.loops.HUE,
    });
  }
};

Blockly.Blocks['controls_repeat_while'] = {
  /**
   * Block for While loop with condition and dody area.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "While Condition %1 %2 Body %3 %4",
      "args0": [
      {
      "type": "input_dummy"
      },
      {
      "type": "input_statement",
      "name": "condition"
      },
      {
      "type": "input_dummy"
      },
      {
      "type": "input_statement",
      "name": "body"
      }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.loops.HUE,
    });
  }
};


Blockly.Blocks['controls_repeat_until'] = {
  /**
   * Block for Until loop with condition and dody area.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "Until Body %1 %2 Condition %3 %4",
      "args0": [
      {
      "type": "input_dummy"
      },
      {
      "type": "input_statement",
      "name": "body"
      },
      {
      "type": "input_dummy"
      },
      {
      "type": "input_statement",
      "name": "condition"
      }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.loops.HUE,
    });
  }
};


Blockly.Blocks['controls_and'] = {
  /**
   * Block for "and" logic.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "AND %1 ",
      "args0": [
        {
          "type":"input_statement",
          "name": "elements",
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.loops.HUE
    });
//    this.appendStatementInput('')
       // .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
  }
};

Blockly.Blocks['controls_or'] = {
  /**
   * Block for "or" logic.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "OR %1 ",
      "args0": [
        {
          "type":"input_statement",
          "name": "elements",
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.loops.HUE,
      "tooltip": Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,
      "helpUrl": Blockly.Msg.CONTROLS_REPEAT_HELPURL
    });
//    this.appendStatementInput('')
       // .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
  }
};

Blockly.Blocks['controls_branch'] = {
  /**
   * Block for "or" logic.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "Branch %1 ",
      "args0": [
        {
          "type":"input_statement",
          "name": "elements",
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.loops.HUE,
      "tooltip": Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,
      "helpUrl": Blockly.Msg.CONTROLS_REPEAT_HELPURL
    });
//    this.appendStatementInput('')
       // .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
  }
};


Blockly.Blocks['demo_show_text'] = {
  init: function () {
    this.appendValueInput("show_")
      .appendField(Blockly.Msg.DEMO_SHOW, "顯示：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_text_size'] = {
  init: function () {
    this.appendValueInput("size_")
      .appendField(Blockly.Msg.DEMO_TEXT_SIZE, "文字大小");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_text_lineheight'] = {
  init: function () {
    this.appendValueInput("lineheight_")
      .appendField(Blockly.Msg.DEMO_TEXT_LINEHEIGHT, "文字行高");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_text_color'] = {
  init: function () {
    this.appendValueInput("color_")
      .appendField(Blockly.Msg.DEMO_TEXT_COLOR, "文字顏色");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_light_click'] = {
  init: function () {
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.DEMO_LIGHT_CLICK, "點擊燈泡，執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_light_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEMO_LIGHT_STATE, "設定燈泡狀態為：")
      .appendField(new Blockly.FieldDropdown([
        ["on", "on"],
        ["off", "off"]
      ]), "state_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUESON);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_light_ifelse'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEMO_LIGHT_IFELSE, "燈泡現在的狀態是")
      .appendField(new Blockly.FieldDropdown([
        ["on", "on"],
        ["off", "off"]
      ]), "state_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUESON);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_light_toggle'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEMO_LIGHT_TOGGLE, "燈泡狀態切換");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUESON);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_button_click'] = {
  init: function () {
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.DEMO_BUTTON_CLICK, "點選")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.DEMO_BUTTON_BTN1, "1"],
        [Blockly.Msg.DEMO_BUTTON_BTN2, "2"],
        [Blockly.Msg.DEMO_BUTTON_BTN3, "3"],
        [Blockly.Msg.DEMO_BUTTON_BTN4, "4"],
        [Blockly.Msg.DEMO_BUTTON_BTN5, "5"]
      ]), "name_")
      .appendField(Blockly.Msg.DEMO_BUTTON_CLICK_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_image_url'] = {
  init: function () {
    this.appendValueInput("url_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.DEMO_IMAGE_URL, "圖片網址");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_image_size'] = {
  init: function () {
    this.appendValueInput("w_")
      .appendField(Blockly.Msg.DEMO_IMAGE_WIDTH, "圖片寬度");
    this.appendValueInput("h_")
      .appendField(Blockly.Msg.DEMO_IMAGE_HEIGHT, "高度");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};


Blockly.Blocks['demo_image_rotate'] = {
  init: function () {
    this.appendValueInput("deg_")
      .appendField(Blockly.Msg.DEMO_IMAGE_ROTATE, "圖片旋轉角度：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_image_opacity'] = {
  init: function () {
    this.appendValueInput("opacity_")
      .appendField(Blockly.Msg.DEMO_IMAGE_OPACITY, "圖片透明度：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_image_position'] = {
  init: function () {
    this.appendValueInput("position_")
      .appendField(Blockly.Msg.DEMO_IMAGE_POS, "圖片")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.DEMO_IMAGE_X, "x"],
        [Blockly.Msg.DEMO_IMAGE_Y, "y"]
      ]), "direction_")
      .appendField(Blockly.Msg.DEMO_IMAGE_MOVE, "移動：");
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEMO_IMAGE_PIXEL, "像素");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_area_input'] = {
  init: function () {
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.DEMO_AREA_COLOR_INPUT, "選擇顏色，執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_area_input_color'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEMO_AREA_COLOR_CHOOSE, "選擇的顏色");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUESON);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_area_color'] = {
  init: function () {
    this.appendValueInput("color_")
      .appendField(Blockly.Msg.DEMO_AREA_COLOR, "設定區域顏色：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUESON);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_range_set'] = {
  init: function () {
    this.appendValueInput("min_")
      .appendField(Blockly.Msg.DEMO_RANGE_MIN, "拉霸設定，最小值");
    this.appendDummyInput();
    this.appendValueInput("max_")
      .appendField(Blockly.Msg.DEMO_RANGE_MAX, "最大值");
    this.appendDummyInput();
    this.appendValueInput("step_")
      .appendField(Blockly.Msg.DEMO_RANGE_STEP, "間距");
    this.appendDummyInput();
    this.appendValueInput("value_")
      .appendField(Blockly.Msg.DEMO_RANGE_DEFAULT, "預設值");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.DEMO_RANGE_INPUT, "調整拉霸，執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_range_show'] = {
  init: function () {
    this.appendValueInput("show_")
      .appendField(Blockly.Msg.DEMO_RANGE_SHOW, "數值顯示：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUESON);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_range_input_value'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEMO_RANGE_VALUE, "拉霸的數值");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUESON);
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#tm39n9
Blockly.Blocks['demo_youtube'] = {
  init: function () {
    this.appendValueInput("name_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEMO_YOUTUBE_DEFAULT)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.DEMO_YOUTUBE_DEFAULT_1, "1"],
        [Blockly.Msg.DEMO_YOUTUBE_DEFAULT_2, "2"]
      ]), "type_")
      .appendField(Blockly.Msg.DEMO_YOUTUBE_DEFAULT_ID)
      .appendField(new Blockly.FieldTextInput("..."), "id_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#kqjbv8
Blockly.Blocks['demo_youtube_volume'] = {
  init: function () {
    this.appendValueInput("volume_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SET)
      .appendField(new Blockly.FieldVariable("youtube"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_VOLUME);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#tih6od
Blockly.Blocks['demo_youtube_speed'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SET)
      .appendField(new Blockly.FieldVariable("youtube"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SPEED)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_VERYSLOW, "0.25"],
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SLOW, "0.5"],
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_NORMAL, "1"],
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_FAST, "1.5"],
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SUPERFAST, "2"]
      ]), "speed_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#tcfvai
Blockly.Blocks['demo_youtube_control'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SET)
      .appendField(new Blockly.FieldVariable("youtube"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_STATUS)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SETPLAY, "1"],
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SETPAUSE, "2"],
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SETSTOP, "0"]
      ]), "status_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#metxhc
Blockly.Blocks['demo_youtube_status'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("youtube"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_STATUS)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_STATUSPLAY, "1"],
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_STATUSPAUSE, "2"],
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_STATUSCUE, "5"],
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_STATUSSTOP, "0"],
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_STATUSSTART, "-1"]
      ]), "status_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(70);
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#vcm5tv
Blockly.Blocks['demo_youtube_id'] = {
  init: function () {
    this.appendValueInput("id_")
      .appendField(Blockly.Msg.DEMO_YOUTUBE_CHANGEID)
      .appendField(new Blockly.FieldVariable("youtube"), "name_")
      .appendField(Blockly.Msg.DEMO_YOUTUBE_CHANGEID_ID);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#vcm5tv
Blockly.Blocks['demo_youtube_listcontrol'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEMO_YOUTUBE_PLAY)
      .appendField(new Blockly.FieldVariable("youtube"), "name_")
      .appendField(Blockly.Msg.DEMO_YOUTUBE_LIST)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.DEMO_YOUTUBE_LIST_PRE, ".previousVideo()"],
        [Blockly.Msg.DEMO_YOUTUBE_LIST_NEXT, ".nextVideo()"]
      ]), "preOrNext_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(180);
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#wnw8t9
Blockly.Blocks['demo_youtube_listnum'] = {
  init: function () {
    this.appendValueInput("num_")
      .setCheck("Number")
      .appendField(Blockly.Msg.DEMO_YOUTUBE_PLAY)
      .appendField(new Blockly.FieldVariable("youtube"), "name_")
      .appendField(Blockly.Msg.DEMO_YOUTUBE_LIST_LISTNUM);
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEMO_YOUTUBE_LIST_NUM);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setColour(180);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#who4oo
Blockly.Blocks['demo_youtube_currenttime'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("youtube"), "name_")
      .appendField(Blockly.Msg.DEMO_YOUTUBE_CURRENTTIME);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setColour(70);
    this.setHelpUrl('http://www.example.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#fg9c8k
Blockly.Blocks['demo_youtube_seekto'] = {
  init: function () {
    this.appendValueInput("sec_")
      .setCheck("Number")
      .appendField(Blockly.Msg.DEMO_YOUTUBE_SET)
      .appendField(new Blockly.FieldVariable("youtube"), "name_")
      .appendField(Blockly.Msg.DEMO_YOUTUBE_SEEKTO);
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEMO_YOUTUBE_SEC);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['demo_youtube_callback'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SET)
      .appendField(new Blockly.FieldVariable("youtube"), "val_")
      .appendField(Blockly.Msg.DEMO_YOUTUBE_DEFAULT_1)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SETSTOP, 0],
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SETPAUSE, 2],
        [Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SETPLAY, 1]
      ]), "event_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SETPLAY);
    this.appendStatementInput("do_")
      .setCheck(null)
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_DO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('http://www.example.com/');
  }
};


//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#85c65d
Blockly.Blocks['demo_tracking'] = {
  init: function () {
    this.appendValueInput("var_")
      .appendField(Blockly.Msg.DEMO_TRACKING_SET, "設定影像追蹤");
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEMO_TRACKING, "追蹤")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.DEMO_TRACKING_FACE, "face"],
        [Blockly.Msg.DEMO_TRACKING_COLOR, "color"]
      ]), "type_");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.DEMO_TRACKING_DO, "追蹤成功時，將會執行");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_tracking_action'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("track"), "name_")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.DEMO_TRACKING_RUN, "run"],
        [Blockly.Msg.DEMO_TRACKING_STOP, "stop"]
      ]), "action_")
      .appendField(Blockly.Msg.DEMO_TRACKING_TRACK, "追蹤");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_tracking_face'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("track"), "name_")
      .appendField(Blockly.Msg.DEMO_TRACKING_FACESETTING, "人臉 追蹤設定 ( 非必要 )");
    this.appendDummyInput()
      .appendField("EdgesDensity")
      .appendField(new Blockly.FieldDropdown([
        ["0.1", "0.1"],
        ["0.2", "0.2"],
        ["0.3", "0.3"],
        ["0.4", "0.4"],
        ["0.5", "0.5"]
      ]), "ed_")
      .appendField(" StepSize")
      .appendField(new Blockly.FieldDropdown([
        ["0.5", "0.5"],
        ["1", "1"],
        ["1.5", "1.5"],
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"]
      ]), "ss_")
      .appendField("  InitialScale")
      .appendField(new Blockly.FieldDropdown([
        ["1", "1"],
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"]
      ]), "is_");
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_tracking_val'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEMO_TRACKING_VAL, "追蹤數值")
      .appendField(new Blockly.FieldDropdown([
        ["x", "x"],
        ["y", "y"],
        ["width", "width"],
        ["height", "height"],
        [Blockly.Msg.DEMO_TRACKING_VALTOTAL, "total"],
        [Blockly.Msg.DEMO_TRACKING_VALCOLOR, "color"]
      ]), "val_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUESON);
    this.setHelpUrl('https://webduino.io');
  }
};

// controller
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#6tauc6
Blockly.Blocks['demo_controller'] = {
  init: function () {
    this.appendStatementInput("do_")
      .setCheck(null)
      .appendField(Blockly.Msg.DEMO_CONTROLLER_BTN, "遙控器按鍵")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.DEMO_CONTROLLER_BTNCLICK, "1"],
        [Blockly.Msg.DEMO_CONTROLLER_BTNDOWN, "2"],
        [Blockly.Msg.DEMO_CONTROLLER_BTNUP, "3"]
      ]), "event_")
      .appendField(new Blockly.FieldDropdown([
        ["○", ".btn-power"],
        ["1", ".btn-num1"],
        ["2", ".btn-num2"],
        ["3", ".btn-num3"],
        ["4", ".btn-num4"],
        ["5", ".btn-num5"],
        ["6", ".btn-num6"],
        ["7", ".btn-num7"],
        ["8", ".btn-num8"],
        ["9", ".btn-num9"],
        ["0", ".btn-num0"],
        ["#", ".btn-num11"],
        ["*", ".btn-num12"],
        ["▲", ".btn-up"],
        ["◀", ".btn-left"],
        ["▶", ".btn-right"],
        ["▼", ".btn-down"],
        ["●", ".btn-center"],
        ["◀◀", ".btn-pre"],
        ["■", ".btn-stop"],
        ["▶", ".btn-play"],
        ["❙ ❙", ".btn-pause"],
        ["▶▶", ".btn-next"],
        [Blockly.Msg.DEMO_CONTROLLER_BTNRED, ".btn-color1"],
        [Blockly.Msg.DEMO_CONTROLLER_BTNGREEN, ".btn-color2"],
        [Blockly.Msg.DEMO_CONTROLLER_BTNBLUE, ".btn-color3"],
        [Blockly.Msg.DEMO_CONTROLLER_BTNYELLOW, ".btn-color4"]
      ]), "btn_")
      .appendField(Blockly.Msg.DEMO_CONTROLLER_BTNDO, "執行");
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setHelpUrl('https://webduino.io');
  }
};


Blockly.Blocks['demo_controller_show'] = {
  init: function () {
    this.appendValueInput("show_")
      .setCheck(null)
      .appendField(Blockly.Msg.DEMO_CONTROLLER_SCREEN, "遙控器螢幕，顯示");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_controller_range'] = {
  init: function () {
    this.appendValueInput("min_")
      .setCheck("Number")
      .appendField(Blockly.Msg.DEMO_CONTROLLER_RANGEMIN, "遙控器拉霸，最小值");
    this.appendValueInput("max_")
      .setCheck("Number")
      .appendField(Blockly.Msg.DEMO_CONTROLLER_RANGEMAX, "最大值");
    this.appendValueInput("step_")
      .setCheck("Number")
      .appendField(Blockly.Msg.DEMO_CONTROLLER_RANGESTEP, "間距");
    this.appendValueInput("default_")
      .setCheck("Number")
      .appendField(Blockly.Msg.DEMO_CONTROLLER_RANGEDEFAULT, "預設值");
    this.appendStatementInput("range_")
      .appendField(Blockly.Msg.DEMO_CONTROLLER_RANGEDO, "調整拉霸時，執行");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_controller_range_value'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEMO_CONTROLLER_RANGE_VALUE, "遙控器拉霸的數值");
    this.setOutput(true, "Number");
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUESON);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['demo_controller_showcolor'] = {
  init: function () {
    this.appendValueInput("color_")
      .setCheck(null)
      .appendField(Blockly.Msg.DEMO_CONTROLLER_SCREENSHOW, "遙控器 螢幕")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.DEMO_CONTROLLER_SCREENBG, "background"],
        [Blockly.Msg.DEMO_CONTROLLER_SCREENTEXT, "color"]
      ]), "type_")
      .appendField(Blockly.Msg.DEMO_CONTROLLER_SCREENCOLOR, "顏色");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setColour(Blockly.Blocks.colour.HUE);
    this.setHelpUrl('https://webduino.io');
  }
};

/*
.88b  d88.  .d88b.  d8888b. d888888b db      d88888b 
88'YbdP`88 .8P  Y8. 88  `8D   `88'   88      88'     
88  88  88 88    88 88oooY'    88    88      88ooooo 
88  88  88 88    88 88~~~b.    88    88      88~~~~~ 
88  88  88 `8b  d8' 88   8D   .88.   88booo. 88.     
YP  YP  YP  `Y88P'  Y8888P' Y888888P Y88888P Y88888P 
*/


Blockly.Blocks['mobile_deviceorientation_event'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEMO_CONTROLLER_MOBILE_DEVICEORIENTATION, "行動裝置，偵測")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.DEMO_CONTROLLER_MOBILE_TYPE1, "1"],
        [Blockly.Msg.DEMO_CONTROLLER_MOBILE_TYPE2, "2"]
      ]), "type_");
    this.appendStatementInput("do_")
      .setCheck(null)
      .appendField(Blockly.Msg.DEMO_CONTROLLER_MOBILE_DEVICEORIENTATION_DO, "執行");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setColour(190);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['mobile_deviceorientation_event_val'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.DEMO_CONTROLLER_MOBILE_DEVICEORIENTATION_ALPHA, "alpha"],
        [Blockly.Msg.DEMO_CONTROLLER_MOBILE_DEVICEORIENTATION_BETA, "beta"],
        [Blockly.Msg.DEMO_CONTROLLER_MOBILE_DEVICEORIENTATION_GAMMA, "gamma"]
      ]), "val_")
      .appendField(Blockly.Msg.DEMO_CONTROLLER_MOBILE_DEVICEORIENTATION_VAL1, "的數值 ( 小數點")
      .appendField(new Blockly.FieldDropdown([
        ["0", '1'],
        ["1", '10'],
        ["2", '100']
      ]), "round_")
      .appendField(Blockly.Msg.DEMO_CONTROLLER_MOBILE_DEVICEORIENTATION_VAL2, "位 )");
    this.setOutput(true, null);
    this.setTooltip('');
    this.setColour(210);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['mobile_devicemotion_event_val'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.DEMO_CONTROLLER_MOBILE_ACCELERATION_X, "x"],
        [Blockly.Msg.DEMO_CONTROLLER_MOBILE_ACCELERATION_Y, "y"],
        [Blockly.Msg.DEMO_CONTROLLER_MOBILE_ACCELERATION_Z, "z"]
      ]), "val_")
      .appendField(Blockly.Msg.DEMO_CONTROLLER_MOBILE_ACCELERATION, "軸加速度的數值 ( 小數點")
      .appendField(new Blockly.FieldDropdown([
        ["0", '1'],
        ["1", '10'],
        ["2", '100']
      ]), "round_")
      .appendField(Blockly.Msg.DEMO_CONTROLLER_MOBILE_ACCELERATION_VAL2, "位 )");
    this.setOutput(true, null);
    this.setTooltip('');
    this.setColour(210);
    this.setHelpUrl('https://webduino.io');
  }
};


Blockly.Blocks['mobile_deviceorientation_event_remove'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEMO_CONTROLLER_MOBILE_DEVICEORIENTATION_REMOVE, "停止偵測")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.DEMO_CONTROLLER_MOBILE_TYPE1, "1"],
        [Blockly.Msg.DEMO_CONTROLLER_MOBILE_TYPE2, "2"]
      ]), "type_");;
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setColour(190);
    this.setHelpUrl('https://webduino.io');
  }
};


/*
                                .   oooo        
                              .o8   `888        
ooo. .oo.  .oo.    .oooo.   .o888oo  888 .oo.   
`888P"Y88bP"Y88b  `P  )88b    888    888P"Y88b  
 888   888   888   .oP"888    888    888   888  
 888   888   888  d8(  888    888 .  888   888  
o888o o888o o888o `Y888""8o   "888" o888o o888o 
*/

Blockly.Blocks['math_round_digit'] = {
  init: function () {
    this.appendValueInput("round_")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_MATH_ROUND, "round"],
        [Blockly.Msg.WEBDUINO_MATH_ROUND_UP, "floor"],
        [Blockly.Msg.WEBDUINO_MATH_ROUND_DOWN, "ceil"]
      ]), "type_")
      .appendField(Blockly.Msg.WEBDUINO_MATH_ROUND_TO, "到小數點")
      .appendField(new Blockly.FieldDropdown([
        ["0", "0"],
        ["1", "1"],
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"]
      ]), "digit_")
      .appendField(Blockly.Msg.WEBDUINO_MATH_ROUND_NUM, "位");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('https://webduino.io');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#goxzmb
Blockly.Blocks['math_value_conversion'] = {
  init: function () {
    this.appendValueInput("source_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WEBDUINO_MATH_SCALE, "尺度轉換，數值來源");
    this.appendValueInput("omin_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WEBDUINO_MATH_SCALE_OMIN, "(原始) 最小值");
    this.appendValueInput("omax_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WEBDUINO_MATH_SCALE_OMAX, "(原始) 最大值");
    this.appendValueInput("cmin_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WEBDUINO_MATH_SCALE_CMIN, "(轉換後) 最小值");
    this.appendValueInput("cmax_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WEBDUINO_MATH_SCALE_CMAX, "(轉換後) 最大值");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('https://webduino.io');
  }
};


Blockly.Blocks['number_to_string'] = {
  init: function () {
    this.appendValueInput("number_")
      .setCheck("Number")
      .appendField(Blockly.Msg.NUMBER_CONVERT, "轉換為")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.NUMBER_BINARY, "2"],
        [Blockly.Msg.NUMBER_OCTAL, "8"],
        [Blockly.Msg.NUMBER_DECTIMAL, ""],
        [Blockly.Msg.NUMBER_HEX, "16"]
      ]), "string_")
      .appendField(Blockly.Msg.NUMBER_STRING, "字串");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(160);
    this.setHelpUrl('https://webduino.io');
  }
};


/*
                             o8o              
                             `"'              
ooo. .oo.  .oo.    .oooo.   oooo  ooo. .oo.   
`888P"Y88bP"Y88b  `P  )88b  `888  `888P"Y88b  
 888   888   888   .oP"888   888   888   888  
 888   888   888  d8(  888   888   888   888  
o888o o888o o888o `Y888""8o o888o o888o o888o 
*/

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#vnzmgi

Blockly.Blocks['console'] = {
  init: function () {
    this.appendValueInput('console')
      .appendField(Blockly.Msg.CUSTOM_JS_CONSOLE, 'console');
    this.setColour(0);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('https://blockly-demo.appspot.com/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#rrm4nf

Blockly.Blocks['getdate'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CUSTOM_JS_Date, "現在的日期")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.CUSTOM_JS_Date_1, "ymd"],
        [Blockly.Msg.CUSTOM_JS_Date_2, "dmy"],
        [Blockly.Msg.CUSTOM_JS_Date_3, "mdy"],
        [Blockly.Msg.CUSTOM_JS_Date_4, "y"],
        [Blockly.Msg.CUSTOM_JS_Date_5, "m"],
        [Blockly.Msg.CUSTOM_JS_Date_6, "d"]
      ]), "date_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(20);
    this.setHelpUrl('https://webduino.io');
  }
};
Blockly.Blocks['gettime'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CUSTOM_JS_Time, "現在的時間")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.CUSTOM_JS_Time_1, "hms"],
        [Blockly.Msg.CUSTOM_JS_Time_2, "h"],
        [Blockly.Msg.CUSTOM_JS_Time_3, "m"],
        [Blockly.Msg.CUSTOM_JS_Time_4, "s"]
      ]), "time_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(20);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['board_server'] = {
  init: function () {
    this.appendValueInput("server_")
      .appendField(Blockly.Msg.WEBDUINO_BOARD_SERVER)
      .appendField(":");
    this.setInputsInline(true);
    this.setColour(250);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#bq2fue
Blockly.Blocks['board_ready'] = {
  init: function () {
    this.appendValueInput("device_")
      .setCheck("String")
      .appendField(Blockly.Msg.WEBDUINO_BOARD, "開發板")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_BOARD_WIFI, "1"],
        [Blockly.Msg.WEBDUINO_BOARD_SERIAL, "2"],
        [Blockly.Msg.WEBDUINO_BOARD_BLUETOOTH, "3"],
        [Blockly.Msg.WEBDUINO_BOARD_WEBSOCKET, "4"]
      ]), "type_")
      .appendField(":");
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BOARD_SAMPLING, "  類比取樣")
      .appendField(new Blockly.FieldDropdown([
        ["20 ms", "20"],
        ["50 ms", "50"],
        ["75 ms", "75"],
        ["100 ms", "100"],
        ["250 ms", "250"],
        ["500 ms", "500"],
        ["1 sec", "1000"]
      ]), "rate_")
      .appendField(Blockly.Msg.WEBDUINO_BOARD_CHAIN, "串聯")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "check_")
      .appendField(Blockly.Msg.WEBDUINO_BOARD_MULTI, "協同控制")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "multi_");
    this.appendStatementInput("callbacks_");
    this.setTooltip('');
    this.setColour(290);
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#tzhs2o
Blockly.Blocks['board_error'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BOARD_IF_ERROR);
    this.appendStatementInput("callbacks_")
      .appendField(Blockly.Msg.WEBDUINO_BOARD_ERROR_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ophu3b
Blockly.Blocks['all_board_ready'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BOARD_CHAIN_OK, "當開發板串連完成");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_BOARD_CHAIN_DO, "執行：");
    this.setTooltip('');
    this.setColour(0);
    this.setHelpUrl('https://webduino.io');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#oihtmu
Blockly.Blocks['board_query_pin_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_QUERY_PIN, "偵測腳位");
    this.appendValueInput("pin")
      .setCheck("Number");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_PIN_DO, "執行");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(120);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['board_pin_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_PIN_STATE, "腳位狀態");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(160);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['pin_get'] = {
  init: function () {
    this.appendValueInput("pin")
      .appendField(Blockly.Msg.WEBDUINO_PIN, "Pin")
      .setCheck("Number");
    this.setOutput(true);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['pin_num'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3~", "3"],
        ["4", "4"],
        ["5~", "5"],
        ["6~", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9~", "9"],
        ["10~", "10"],
        ["11~", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "pin_");
    this.setOutput(true);
    this.setColour(230);
    this.setOutput(true, "Number");
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['pin_board'] = {
  init: function () {
    this.appendValueInput("pin_")
      .setCheck(["Number", "pin_num"])
      .appendField(Blockly.Msg.WEBDUINO_BOARD, "Board")
      .appendField(new Blockly.FieldDropdown(this.getBoardsDropdown), "board_");
    this.setOutput(true);
    this.setColour(270);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  },
  getBoardsDropdown: function () {
    var nameMap = {
        '1': Blockly.Msg.WEBDUINO_BOARD_WIFI,
        '2': Blockly.Msg.WEBDUINO_BOARD_SERIAL,
        '3': Blockly.Msg.WEBDUINO_BOARD_BLUETOOTH,
        '4': Blockly.Msg.WEBDUINO_BOARD_WEBSOCKET
      },
      xml = Blockly.Xml.workspaceToDom(Code.workspace),
      boards = xml.querySelectorAll("block[type=board_ready]"),
      menus = [];

    if (boards.length < 1) {
      return [
        ['', '']
      ];
    }

    for (var i = 0; i < boards.length; i++) {
      var item = boards[i],
        type = item.querySelector('field[name=type_]').textContent,
        param = item.querySelector('value[name=device_]').textContent;

      switch (type) {
      case '1':
        menus.push(['(' + nameMap['1'] + ') ' + param, "{transport: 'mqtt', device: '" + param + "'}"]);
        break;

      case '2':
        menus.push(['(' + nameMap['2'] + ') ' + param, "{transport: 'serial', path: '" + param + "'}"]);
        break;

      case '3':
        menus.push(['(' + nameMap['3'] + ') ' + param, "{transport: 'bluetooth', address: '" + param + "'}"]);
        break;

      case '4':
        menus.push(['(' + nameMap['4'] + ') ' + param, "{transport: 'websocket', url: '" + param + "'}"]);
        break;
      }
    }

    return menus;
  }
};

Blockly.Blocks['pin_set_mode'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_PIN_SET, "Set")
      .appendField(new Blockly.FieldVariable("pin"), "pin_")
      .appendField(Blockly.Msg.WEBDUINO_PIN_MODE, "Mode")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_PIN_DIN, "0"],
        [Blockly.Msg.WEBDUINO_PIN_DOUT, "1"],
        [Blockly.Msg.WEBDUINO_PIN_AIN, "2"],
        [Blockly.Msg.WEBDUINO_PIN_AOUT, "3"]
      ]), "mode_");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['pin_read'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_PIN_READ)
      .appendField(new Blockly.FieldVariable("pin"), "pin_")
      .appendField(Blockly.Msg.WEBDUINO_PIN_VALUE);
    this.setOutput(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['pin_write'] = {
  init: function () {
    this.appendValueInput("value_")
      .appendField(Blockly.Msg.WEBDUINO_PIN_WRITE)
      .appendField(new Blockly.FieldVariable("pin"), "pin_")
      .appendField(Blockly.Msg.WEBDUINO_PIN_VALUE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['led_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_LED, "Led")
      .appendField(Blockly.Msg.WEBDUINO_LED_PIN, "pin")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3~", "3"],
        ["4", "4"],
        ["5~", "5"],
        ["6~", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9~", "9"],
        ["10~", "10"],
        ["11~", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "pin_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['led_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable(" "), "led_")
      .appendField(Blockly.Msg.WEBDUINO_LED_SET_STATE, "set state")
      .appendField(new Blockly.FieldDropdown([
        ["on", "on"],
        ["off", "off"]
      ]), "state_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['led_toggle'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable(" "), "led_")
      .appendField(Blockly.Msg.WEBDUINO_LED_TOGGLE, "toggle");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['led_intensity'] = {
  init: function () {
    this.appendValueInput("intensity_")
      .setCheck("Number")
      .appendField(new Blockly.FieldVariable("led"), "led_")
      .appendField(Blockly.Msg.WEBDUINO_LED_INTENSITY, "強度 (0-1)：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};


//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#u7a4oh
Blockly.Blocks['led_callback'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("led"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_LED_STATE_IS, " 的狀態為：")
      .appendField(new Blockly.FieldDropdown([
        ["on", "on"],
        ["off", "off"]
      ]), "state_");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_LED_STATE_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};


Blockly.Blocks['led_blink'] = {
  init: function () {
    this.appendValueInput("time_")
      .setCheck("Number")
      .appendField(new Blockly.FieldVariable("led"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_LED_BLINK, "閃爍，閃爍時間");
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_LED_BLINK_SEC, "秒");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};


Blockly.Blocks['led_blink_callback'] = {
  init: function () {
    this.appendValueInput("time_")
      .setCheck("Number")
      .appendField(new Blockly.FieldVariable("led"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_LED_BLINK, "閃爍，閃爍時間");
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_LED_BLINK_SEC, "秒");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_LED_BLINK_DO, "每次閃爍執行");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['rgbled_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_RGBLED, "RGBLed")
      .appendField(Blockly.Msg.WEBDUINO_RGBLED_RED, "red")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3~", "3"],
        ["4", "4"],
        ["5~", "5"],
        ["6~", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9~", "9"],
        ["10~", "10"],
        ["11~", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "red_")
      .appendField(Blockly.Msg.WEBDUINO_RGBLED_GREEN, "green")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3~", "3"],
        ["4", "4"],
        ["5~", "5"],
        ["6~", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9~", "9"],
        ["10~", "10"],
        ["11~", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "green_")
      .appendField(Blockly.Msg.WEBDUINO_RGBLED_BLUE, "blue")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3~", "3"],
        ["4", "4"],
        ["5~", "5"],
        ["6~", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9~", "9"],
        ["10~", "10"],
        ["11~", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "blue_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['rgbled_new_cathode'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_RGBLED_CATHODE, "RGBLed")
      .appendField(Blockly.Msg.WEBDUINO_RGBLED_RED, "red")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3~", "3"],
        ["4", "4"],
        ["5~", "5"],
        ["6~", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9~", "9"],
        ["10~", "10"],
        ["11~", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "red_")
      .appendField(Blockly.Msg.WEBDUINO_RGBLED_GREEN, "green")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3~", "3"],
        ["4", "4"],
        ["5~", "5"],
        ["6~", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9~", "9"],
        ["10~", "10"],
        ["11~", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "green_")
      .appendField(Blockly.Msg.WEBDUINO_RGBLED_BLUE, "blue")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3~", "3"],
        ["4", "4"],
        ["5~", "5"],
        ["6~", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9~", "9"],
        ["10~", "10"],
        ["11~", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "blue_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['rgbled_setcolor'] = {
  init: function () {
    this.appendValueInput("color_")
      .appendField(new Blockly.FieldVariable(" "), "rgbled_")
      .appendField(Blockly.Msg.WEBDUINO_RGBLED_SETCOLOR, "set color");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['rgbled_setcolor_callback'] = {
  init: function () {
    this.appendValueInput("color_")
      .appendField(new Blockly.FieldVariable(" "), "rgbled_")
      .appendField(Blockly.Msg.WEBDUINO_RGBLED_SETCOLOR, "set color");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_LED_STATE_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['fish_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_FISH);
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['fish_angle'] = {
  init: function () {
    this.appendValueInput("secs_")
      .appendField(new Blockly.FieldVariable(" "), "fish_")
      .appendField(new Blockly.FieldDropdown([
        ["➚ " + Blockly.Msg.WEBDUINO_FISH_SOAR, "soar"],
        ["➘ " + Blockly.Msg.WEBDUINO_FISH_SINK, "sink"]
      ]), "angle_")
      .appendField(Blockly.Msg.WEBDUINO_FISH_MOVE_FOR);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_FISH_MOVE_SEC);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['fish_move'] = {
  init: function () {
    this.appendValueInput("secs_")
      .appendField(new Blockly.FieldVariable(" "), "fish_")
      .appendField(new Blockly.FieldDropdown([
        ["↑ " + Blockly.Msg.WEBDUINO_FISH_MOVE, ""],
        ["↺ " + Blockly.Msg.WEBDUINO_FISH_LEFT, "1"],
        ["↻ " + Blockly.Msg.WEBDUINO_FISH_RIGHT, "2"]
      ]), "direction_")
      .appendField(Blockly.Msg.WEBDUINO_FISH_MOVE_FOR);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_FISH_MOVE_SEC);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_FISH_MOVE_SPEED)
      .appendField(new Blockly.FieldDropdown([
        ["1", "1"],
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"]
      ]), "speed_");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['timer'] = {
  init: function () {
    this.appendValueInput("secs_")
      .appendField(Blockly.Msg.WEBDUINO_TIMER_AFTER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_TIMER_SECOND);
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_TIMER_DO, "do");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['interval'] = {
  init: function () {
    this.appendValueInput("secs_")
      .appendField(Blockly.Msg.WEBDUINO_INTERVAL_EVERY);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_INTERVAL_SECOND);
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_INTERVAL_DO);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['delay'] = {
  init: function () {
    this.appendValueInput("secs_")
      .appendField(Blockly.Msg.WEBDUINO_DELAY);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_DELAY_SECONDS);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['ultrasonic_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_NEW_TRIG, "UltraSonic,  Trig:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "trig_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_NEW_ECHO, "  Echo:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "echo_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#s2p7t7
Blockly.Blocks['ultrasonic_get'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("ultrasonic"), "var_");
    this.appendValueInput("time")
      .setCheck("Number")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_GET_DISTANCE, "get distance over every ");
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_GET_TIME, "ms ( 1/1000 sec )");
    this.appendStatementInput("do")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_GET_DO, "do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['ultrasonic_get_promise'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("ultrasonic"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_GET);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#vv8fx4
Blockly.Blocks['ultrasonic_distance'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("ultrasonic"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_DISTANCE, "'s distance");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(35);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['ultrasonic_stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("ultrasonic"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_ULTRASONIC_STOP, "停止擷取距離");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#nrzdoq
Blockly.Blocks['button_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BUTTON_NEW, "Button ,  pin:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "pin_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#hj3nxn
Blockly.Blocks['button_event'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BUTTON_EVENT_WHEN, "當")
      .appendField(new Blockly.FieldVariable("button"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_BUTTON_EVENT_WAS, "進行")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_BUTTON_EVENT_PRESSED, "pressed"],
        [Blockly.Msg.WEBDUINO_BUTTON_EVENT_RELEASED, "released"],
        [Blockly.Msg.WEBDUINO_BUTTON_EVENT_LONGPRESS, "longPress"]
      ]), "event_")
      .appendField(Blockly.Msg.WEBDUINO_BUTTON_EVENT_TO, "時");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_BUTTON_EVENT_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ninxcs
Blockly.Blocks['pir_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_PIR, "PIR ,  pin:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "pin_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#vzwp59
Blockly.Blocks['pir_status'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_PIR_WHEN, "當")
      .appendField(new Blockly.FieldVariable("pir"), "item_")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_PIR_STATUS_DETECTED, "detected"],
        [Blockly.Msg.WEBDUINO_PIR_STATUS_ENDED, "ended"]
      ]), "status_")
      .appendField(Blockly.Msg.WEBDUINO_PIR_DETECTED, "偵測到人體紅外線變化");
    this.appendStatementInput("var_")
      .appendField(Blockly.Msg.WEBDUINO_PIR_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['sound_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SOUND, "Sound ,  pin:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "pin_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['sound_status'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SOUND_WHEN, "當")
      .appendField(new Blockly.FieldVariable("sound"), "item_")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_SOUND_STATUS_DETECTED, "detected"],
        [Blockly.Msg.WEBDUINO_SOUND_STATUS_ENDED, "ended"]
      ]), "status_")
      .appendField(Blockly.Msg.WEBDUINO_SOUND_DETECTED, "偵測到聲音變化");
    this.appendStatementInput("var_")
      .appendField(Blockly.Msg.WEBDUINO_SOUND_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['shock_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SHOCK_NEW, "Shock ,  pin:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "pin_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['shock_event'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SHOCK_EVENT_WHEN, "當")
      .appendField(new Blockly.FieldVariable("shock"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_SHOCK_EVENT_WAS, "狀態為")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_SHOCK_EVENT_HIGH, "high"],
        [Blockly.Msg.WEBDUINO_SHOCK_EVENT_LOW, "low"]
      ]), "event_")
      .appendField(Blockly.Msg.WEBDUINO_SHOCK_EVENT_TO, "時");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_SHOCK_EVENT_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['dht_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_DHT_NEW, "DHT ,  pin:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"]
      ]), "pin_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['dht_get'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("dht"), "var_");
    this.appendValueInput("time")
      .setCheck("Number")
      .appendField(Blockly.Msg.WEBDUINO_DHT_GET, "get temperature and humidity over every ");
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_DHT_GET_TIME, "ms ( 1/1000 sec )");
    this.appendStatementInput("do")
      .appendField(Blockly.Msg.WEBDUINO_DHT_GET_DO, "do");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['dht_get_number'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("dht"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_DHT_GET_NOW, "測得目前的")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_DHT_GET_T, "temperature"],
        [Blockly.Msg.WEBDUINO_DHT_GET_H, "humidity"]
      ]), "dht_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(35);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['buzzer_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BUZZER, "Buzzer ,  pin:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "pin_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#76fim8
Blockly.Blocks['buzzer_music'] = {
  init: function () {
    this.appendValueInput("music_name_")
      .appendField(new Blockly.FieldImage("media/notes.png", 12, 14, "即將停用"))
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_MUSIC1, "建立音樂，音樂名稱：");
    this.appendStatementInput("music_")
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_MUSIC1_EDIT, "音符與節奏：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('即將停用，請改用 "用 buzzer 播放..."');
    this.setColour(65);
    this.setHelpUrl('http://webduinoio.github.io/samples/content/buzzer-piano/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#5k77h6
Blockly.Blocks['buzzer_notes_tempos'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_MUSIC1_TONE, "音符：")
      .appendField(new Blockly.FieldDropdown([
        ["C", "C"],
        ["CS", "CS"],
        ["D", "D"],
        ["DS", "DS"],
        ["E", "E"],
        ["F", "F"],
        ["FS", "FS"],
        ["G", "G"],
        ["GS", "GS"],
        ["A", "A"],
        ["AS", "AS"],
        ["B", "B"],
        [Blockly.Msg.WEBDUINO_BUZZER_MUSIC1_NO, "0"]
      ]), "tone_")
      .appendField(new Blockly.FieldDropdown([
        ["1", "1"],
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"]
      ]), "pitch_")
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_MUSIC1_TEMPOS, "   節奏 ( 幾分之1秒 )：")
      .appendField(new Blockly.FieldDropdown([
        ["1", "1"],
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"]
      ]), "tempos_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(35);
    this.setHelpUrl('http://webduinoio.github.io/samples/content/buzzer-piano/');
  }
};


Blockly.Blocks['buzzer_music_play'] = {
  init: function () {
    this.appendStatementInput("music_")
      .setCheck(null)
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_USE, "使用")
      .appendField(new Blockly.FieldVariable("buzzer"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_PLAY, "播放：");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://webduinoio.github.io/samples/content/buzzer-piano/');
  }
};


Blockly.Blocks['buzzer_single'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/notes.png", 12, 14, "即將停用"))
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_SINGLE, "使用")
      .appendField(new Blockly.FieldVariable("buzzer"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_SINGLE_TONE, "播放單音，音符")
      .appendField(new Blockly.FieldDropdown([
        ["C", "C"],
        ["CS", "CS"],
        ["D", "D"],
        ["DS", "DS"],
        ["E", "E"],
        ["F", "F"],
        ["FS", "FS"],
        ["G", "G"],
        ["GS", "GS"],
        ["A", "A"],
        ["AS", "AS"],
        ["B", "B"]
      ]), "tone_")
      .appendField(new Blockly.FieldDropdown([
        ["1", "1"],
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"]
      ]), "pitch_")
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_SINGLE_TEMPOS, "節奏")
      .appendField(new Blockly.FieldDropdown([
        ["1", "1"],
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"]
      ]), "tempos_");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('即將停用，請改用 "用 buzzer 播放..."');
    this.setColour(65);
    this.setHelpUrl('http://webduinoio.github.io/samples/content/buzzer-piano/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#vnhdso
Blockly.Blocks['buzzer_play'] = {
  init: function () {
    this.appendValueInput("play_music_")
      .appendField(new Blockly.FieldImage("media/notes.png", 12, 14, "即將停用"))
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_USE, "使用")
      .appendField(new Blockly.FieldVariable("buzzer"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_PLAY, "播放：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('即將停用，請改用 "用 buzzer 播放..."');
    this.setColour(65);
    this.setHelpUrl('http://webduinoio.github.io/samples/content/buzzer-piano/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#t2cidp
Blockly.Blocks['buzzer_event'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_LET, "讓")
      .appendField(new Blockly.FieldVariable("buzzer"), "var_")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_BUZZER_EVENT_STOP, ".stop()"],
        [Blockly.Msg.WEBDUINO_BUZZER_EVENT_PAUSE, ".pause()"],
        [Blockly.Msg.WEBDUINO_BUZZER_EVENT_RESUMEPLAY, ".play()"]
      ]), "event_")
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_EVENT_PLAY, "播放");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://webduinoio.github.io/samples/content/buzzer-piano/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#du7e52
Blockly.Blocks['buzzer_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_CHECK, "判斷")
      .appendField(new Blockly.FieldVariable("buzzer"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_STATE, "的狀態為：")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_BUZZER_STATE_STOP, "stopped"],
        [Blockly.Msg.WEBDUINO_BUZZER_STATE_PAUSE, "paused"],
        [Blockly.Msg.WEBDUINO_BUZZER_STATE_PLAYING, "playing"]
      ]), "state_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://webduinoio.github.io/samples/content/buzzer-piano/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#tgex67
Blockly.Blocks['buzzer_music_array'] = {
  init: function () {
    this.appendValueInput("notes_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_MUSIC2_NOTES, "音符：");
    this.appendValueInput("tempos_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_MUSIC2_TEMPOS, "節奏：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(35);
    this.setHelpUrl('http://webduinoio.github.io/samples/content/buzzer-piano/');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#vv3u4z
Blockly.Blocks['buzzer_load_music'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_BUZZER_CHOOSE_MUSIC, "選擇資料庫音樂：")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_BUZZER_CHOOSE_MUSIC1, "m1"],
        [Blockly.Msg.WEBDUINO_BUZZER_CHOOSE_MUSIC4, "m4"],
        [Blockly.Msg.WEBDUINO_BUZZER_CHOOSE_MUSIC2, "m2"],
        [Blockly.Msg.WEBDUINO_BUZZER_CHOOSE_MUSIC3, "m3"],
        [Blockly.Msg.WEBDUINO_BUZZER_CHOOSE_MUSIC5, "m5"]
      ]), "music_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(35);
    this.setHelpUrl('http://webduinoio.github.io/samples/content/buzzer-piano/');
  }
};

Blockly.Blocks['relay_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_RELAY, "Relay ,  pin:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "pin_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['relay_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable(" "), "relay_")
      .appendField(Blockly.Msg.WEBDUINO_RELAY_SET_STATE, "set state")
      .appendField(new Blockly.FieldDropdown([
        ["on", "on"],
        ["off", "off"]
      ]), "state_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['servo_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SERVO, "Servo ,  pin:")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "pin_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['servo_angle'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SERVO_TEXT, "伺服馬達")
      .appendField(new Blockly.FieldVariable("servo"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_SERVO_ANGLE, "  旋轉角度：")
      .appendField(new Blockly.FieldAngle("90"), "angle_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['servo_angle_set'] = {
  init: function () {
    this.appendValueInput("angle_")
      .appendField(Blockly.Msg.WEBDUINO_SERVO_TEXT, "伺服馬達")
      .appendField(new Blockly.FieldVariable("servo"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_SERVO_ANGLE, "  旋轉角度：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#qyqz9n
Blockly.Blocks['data_firebase'] = {
  init: function () {
    this.appendValueInput("name_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_NAME, "使用 firebase 資料庫");
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_URL, "網址：")
      .appendField(new Blockly.FieldTextInput("https://<YOUR-FIREBASE-APP>.firebaseio.com"), "url_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(200);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['data_firebase_write_container'] = {
  init: function () {
    this.setColour(100);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_ADDCOLUMN, '增加資料欄位');
    this.appendStatementInput('STACK');
    this.setTooltip('');
    this.contextMenu = false;
  }
};

Blockly.Blocks['data_firebase_write_item'] = {
  init: function () {
    this.setColour(100);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_COLUMN, '欄位');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.contextMenu = false;
  }
};

Blockly.Blocks['data_firebase_write'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("myFirebase"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_WRITEDATA, "寫入資料");
    this.setColour(160);
    this.appendValueInput('data_0')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('資料 1 名稱:')
      .appendField(new Blockly.FieldTextInput("..."), "name_0")
      .appendField('值:');
    this.appendValueInput('data_1')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('資料 2 名稱:')
      .appendField(new Blockly.FieldTextInput("..."), "name_1")
      .appendField('值:');
    this.setTooltip('');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setMutator(new Blockly.Mutator(['data_firebase_write_item']));
    this.setHelpUrl('https://webduino.io');
    this.itemCount_ = 2;
  },
  mutationToDom: function (workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  domToMutation: function (container) {
    for (var x = 0; x < this.itemCount_; x++) {
      this.removeInput('data_' + x);
    }
    this.itemCount_ = parseInt(container.getAttribute('items'), 10);
    for (var x = 0; x < this.itemCount_; x++) {
      var input = this.appendValueInput('data_' + x)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.WEBDUINO_FIREBASE_WRITEDATACOLUMN + (x + 1) + Blockly.Msg.WEBDUINO_FIREBASE_WRITEDATANAME)
        .appendField(new Blockly.FieldTextInput("..."), "name_" + x)
        .appendField(Blockly.Msg.WEBDUINO_FIREBASE_WRITEDATAVAL);
    }
  },
  decompose: function (workspace) {
    var containerBlock = Blockly.Block.obtain(workspace, 'data_firebase_write_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 0; x < this.itemCount_; x++) {
      var optionBlock = Blockly.Block.obtain(workspace, 'data_firebase_write_item');
      optionBlock.initSvg();
      connection.connect(optionBlock.previousConnection);
      connection = optionBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function (containerBlock) {
    for (var x = this.itemCount_ - 1; x >= 0; x--) {
      this.removeInput('data_' + x);
    }
    this.itemCount_ = 0;
    var optionBlock = containerBlock.getInputTargetBlock('STACK');
    while (optionBlock) {
      var input = this.appendValueInput('data_' + this.itemCount_)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.WEBDUINO_FIREBASE_WRITEDATACOLUMN + (this.itemCount_ + 1) + Blockly.Msg.WEBDUINO_FIREBASE_WRITEDATANAME)
        .appendField(new Blockly.FieldTextInput(optionBlock.nameData_ || "..."), "name_" + this.itemCount_)
        .appendField(Blockly.Msg.WEBDUINO_FIREBASE_WRITEDATAVAL);
      if (optionBlock.dataData_) {
        input.connection.connect(optionBlock.dataData_);
      }
      this.itemCount_++;
      optionBlock = optionBlock.nextConnection &&
        optionBlock.nextConnection.targetBlock();
    }
  },
  saveConnections: function (containerBlock) {
    var optionBlock = containerBlock.getInputTargetBlock('STACK');
    var x = 0;
    while (optionBlock) {
      var name = this.getFieldValue('name_' + x);
      var data = this.getInput('data_' + x);
      optionBlock.nameData_ = name;
      optionBlock.dataData_ = data && data.connection.targetConnection;
      x++;
      optionBlock = optionBlock.nextConnection &&
        optionBlock.nextConnection.targetBlock();
    }
  },
  newQuote_: Blockly.Blocks['text'].newQuote_
};

Blockly.Blocks['data_firebase_data'] = {
  init: function () {
    this.appendValueInput("data_")
      .appendField(new Blockly.FieldTextInput("..."), "attr_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_IS, "為");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(100);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['data_firebase_read'] = {
  init: function () {
    this.appendValueInput("read_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_READ, "取出")
      .appendField(new Blockly.FieldVariable("myFirebase"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_ATTR, "的屬性")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_FIREBASE_DATAALL, '1'],
        [Blockly.Msg.WEBDUINO_FIREBASE_DATALAST, '2']
      ]), "type_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_S, "的")
      .appendField(new Blockly.FieldTextInput("..."), "attr_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_TO, "到");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_DO, "執行");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(160);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['data_firebase_readonce'] = {
  init: function () {
    this.appendValueInput("read_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_READONCE, "取出")
      .appendField(new Blockly.FieldVariable("myFirebase"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_ATTRONCE, "的屬性")
      .appendField(new Blockly.FieldTextInput("..."), "attr_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_TO, "到");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_DO, "執行");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(160);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['data_firebase_clear'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_FIREBASE_CLEAR, "清空資料庫")
      .appendField(new Blockly.FieldVariable("myFirebase"), "name_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(160);
    this.setHelpUrl('https://webduino.io');
  }
};

//object
Blockly.Blocks['add_object'] = {
  init: function () {
    this.setColour(100);
    this.appendDummyInput()
      .appendField('增加物件');
    this.appendStatementInput('STACK');
    this.setTooltip('');
    this.contextMenu = false;
  }
};

Blockly.Blocks['add_object_item'] = {
  init: function () {
    this.setColour(100);
    this.appendDummyInput()
      .appendField('物件');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.contextMenu = false;
  }
};

Blockly.Blocks['new_object'] = {
  init: function () {
    this.setColour(130);
    this.appendDummyInput()
      .appendField('建立物件')
    this.appendValueInput('data_0')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('名稱')
      .appendField(new Blockly.FieldTextInput("..."), "name_0")
      .appendField(' , 值');
    this.appendValueInput('data_1')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField('名稱')
      .appendField(new Blockly.FieldTextInput("..."), "name_1")
      .appendField(' , 值');
    this.setTooltip('');
    this.setOutput(true, null);
    this.setMutator(new Blockly.Mutator(['add_object_item']));
    this.setHelpUrl('https://webduino.io');
    this.itemCount_ = 2;
  },
  mutationToDom: function (workspace) {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  domToMutation: function (container) {
    for (var x = 0; x < this.itemCount_; x++) {
      this.removeInput('data_' + x);
    }
    this.itemCount_ = parseInt(container.getAttribute('items'), 10);
    for (var x = 0; x < this.itemCount_; x++) {
      var input = this.appendValueInput('data_' + x)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('名稱')
        .appendField(new Blockly.FieldTextInput("..."), "name_" + x)
        .appendField(' , 值');
    }
  },
  decompose: function (workspace) {
    var containerBlock = Blockly.Block.obtain(workspace, 'add_object');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 0; x < this.itemCount_; x++) {
      var optionBlock = Blockly.Block.obtain(workspace, 'add_object_item');
      optionBlock.initSvg();
      connection.connect(optionBlock.previousConnection);
      connection = optionBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function (containerBlock) {
    for (var x = this.itemCount_ - 1; x >= 0; x--) {
      this.removeInput('data_' + x);
    }
    this.itemCount_ = 0;
    var optionBlock = containerBlock.getInputTargetBlock('STACK');
    while (optionBlock) {
      var input = this.appendValueInput('data_' + this.itemCount_)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('名稱')
        .appendField(new Blockly.FieldTextInput(optionBlock.nameData_ || "..."), "name_" + this.itemCount_)
        .appendField(' , 值');
      if (optionBlock.dataData_) {
        input.connection.connect(optionBlock.dataData_);
      }
      this.itemCount_++;
      optionBlock = optionBlock.nextConnection &&
        optionBlock.nextConnection.targetBlock();
    }
  },
  saveConnections: function (containerBlock) {
    var optionBlock = containerBlock.getInputTargetBlock('STACK');
    var x = 0;
    while (optionBlock) {
      var name = this.getFieldValue('name_' + x);
      var data = this.getInput('data_' + x);
      optionBlock.nameData_ = name;
      optionBlock.dataData_ = data && data.connection.targetConnection;
      x++;
      optionBlock = optionBlock.nextConnection &&
        optionBlock.nextConnection.targetBlock();
    }
  },
  newQuote_: Blockly.Blocks['text'].newQuote_
};



//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#85nm6w
Blockly.Blocks[Blockly.Msg.WEBDUINO_TESTCAR_NEW, 'car_test_new'] = {
  init: function () {
    this.appendValueInput("var_")
      .appendField(Blockly.Msg.WEBDUINO_TESTCAR, "自走車");
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_TESTCAR_PINRF, "腳位設定：右前")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "rf_")
      .appendField(Blockly.Msg.WEBDUINO_TESTCAR_PINRB, "右後")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "rb_")
      .appendField(Blockly.Msg.WEBDUINO_TESTCAR_PINLF, "左前")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "lf_")
      .appendField(Blockly.Msg.WEBDUINO_TESTCAR_PINLB, "左後")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "lb_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(200);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['car_test_move'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_TESTCAR, "自走車")
      .appendField(new Blockly.FieldVariable("car"), "var_")
      .appendField(Blockly.Msg.WEBDUINO_TESTCAR_ACTION, " 動作")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_TESTCAR_GOFRONT, "goFront"],
        [Blockly.Msg.WEBDUINO_TESTCAR_GOBACK, "goBack"],
        [Blockly.Msg.WEBDUINO_TESTCAR_GOLEFT, "goLeft"],
        [Blockly.Msg.WEBDUINO_TESTCAR_GORIGHT, "goRight"],
        [Blockly.Msg.WEBDUINO_TESTCAR_BACKLEFT, "backLeft"],
        [Blockly.Msg.WEBDUINO_TESTCAR_BACKRIGHT, "backRight"],
        [Blockly.Msg.WEBDUINO_TESTCAR_TURNRIGHT, "turnRight"],
        [Blockly.Msg.WEBDUINO_TESTCAR_TURNLEFT, "turnLeft"],
        [Blockly.Msg.WEBDUINO_TESTCAR_STOP, "stop"]
      ]), "move_");
    this.setColour(200);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#e4r57n
Blockly.Blocks['temp_data_set'] = {
  init: function () {
    this.appendValueInput("name_")
      .setCheck("String")
      .appendField(Blockly.Msg.WEBDUINO_TEMP_SET, "設定暫存")
      .appendField(new Blockly.FieldDropdown([
        ["cookie", "1"],
        ["localStorage", "2"],
        ["sessionStorage", "3"]
      ]), "type_")
      .appendField(Blockly.Msg.WEBDUINO_TEMP_SET_NAME, "   名稱：");
    this.appendValueInput("value_")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WEBDUINO_TEMP_SET_VALUE, "值：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(200);
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#h7r3gt
Blockly.Blocks['temp_data_get'] = {
  init: function () {
    this.appendValueInput("name_")
      .setCheck("String")
      .appendField(Blockly.Msg.WEBDUINO_TEMP_GET, "讀取暫存")
      .appendField(new Blockly.FieldDropdown([
        ["cookie", "1"],
        ["localStorage", "2"],
        ["sessionStorage", "3"]
      ]), "type_")
      .appendField(Blockly.Msg.WEBDUINO_TEMP_GET_NAME, "名稱：");
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_TEMP_GET_VALUE, "的值");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(200);
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#shuqaz
Blockly.Blocks['sound_recognition'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_RECONGNITION, "開始語音辨識 ( 不支援 iOS )");
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_RECONGNITION_LANG, "辨識語言：")
      .appendField(new Blockly.FieldDropdown([
        ["中文", "cmn-Hant-TW"],
        ["English", "en-US"]
      ]), "lang_")
      .appendField(Blockly.Msg.WEBDUINO_RECONGNITION_INTER, "   即時辨識：")
      .appendField(new Blockly.FieldDropdown([
        ["on", "on"],
        ["off", "off"]
      ]), "interimResults_")
      .appendField(Blockly.Msg.WEBDUINO_RECONGNITION_MOBILE, "( 行動裝置勾選 off )");
    this.appendStatementInput("recognition_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(100);
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#svda94
Blockly.Blocks['sound_recognition_check'] = {
  init: function () {
    this.appendValueInput("text_")
      .setCheck(["String", "Array"])
      .appendField(Blockly.Msg.WEBDUINO_RECONGNITION_IF, "如果辨識的文字包含：");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_RECONGNITION_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(60);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['sound_recognition_stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_RECONGNITION_STOP, "stop"],
        [Blockly.Msg.WEBDUINO_RECONGNITION_START, "start"]
      ]), "status_")
      .appendField(Blockly.Msg.WEBDUINO_RECONGNITION_TEXT, "語音辨識");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setColour(100);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['sound_recognition_text'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_RECONGNITION_CONTENT, "辨識的文字");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(60);
    this.setHelpUrl('https://webduino.io');
  }
};

// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#rbw7g9
Blockly.Blocks['translate_speech'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/news.png", 12, 12, "*"))
      .appendField(Blockly.Msg.WEBDUINO_SPEECH_APPID, "語音 appID:")
      .appendField(new Blockly.FieldTextInput(""), "id_");
    this.appendValueInput("speech_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WEBDUINO_SPEECH_SET, "語音：")
      .appendField(new Blockly.FieldDropdown([
        ["中文", "zh-TW"],
        ["廣東話", "zh-HK"],
        ["日文", "ja-JP"],
        ["English", "en-US"]
      ]), "lang_")
      .appendField(Blockly.Msg.WEBDUINO_SPEECH_SEX, "   性別：")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_SPEECH_MALE, "male"],
        [Blockly.Msg.WEBDUINO_SPEECH_FEMALE, "female"]
      ]), "sex_")
      .appendField(Blockly.Msg.WEBDUINO_SPEECH, "   發音：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('https://webduino.io');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#saanvb
Blockly.Blocks['speak'] = {
  init: function () {
    this.appendValueInput("text_")
      .setCheck(null)
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_TEXT, "朗讀文字");
    this.appendValueInput("setting_")
      .setCheck(null)
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_SETTING, "參數設定");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('http://www.example.com/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#9786of
Blockly.Blocks['speak_callback'] = {
  init: function () {
    this.appendValueInput("text_")
      .setCheck(null)
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_TEXT, "朗讀文字");
    this.appendValueInput("setting_")
      .setCheck(null)
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_SETTING, "參數設定");
    this.appendStatementInput("do_")
      .setCheck(null)
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_WHEN, "當朗讀")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_SPEAK_END, "0"],
        [Blockly.Msg.WEBDUINO_SPEAK_START, "1"]
      ]), "type_")
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_DO, "執行");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('http://www.example.com/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ecanpb
Blockly.Blocks['speak_event'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_SPEAK_RESUME, "resume"],
        [Blockly.Msg.WEBDUINO_SPEAK_PAUSE, "pause"],
        [Blockly.Msg.WEBDUINO_SPEAK_CANCEL, "cancel"]
      ]), "event_")
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_READ, "朗讀");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
    this.setColour(230);
    this.setHelpUrl('http://www.example.com/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#pr6kpx
Blockly.Blocks['speak_setting_sample'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_LANG, "朗讀語言")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_SPEAK_TW, "zh-TW"],
        [Blockly.Msg.WEBDUINO_SPEAK_US, "en-US"],
        [Blockly.Msg.WEBDUINO_SPEAK_JP, "ja-JP"]
      ]), "lang_")
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_VOLUME, " 音量")
      .appendField(new Blockly.FieldDropdown([
        ["1", "1"],
        ["0.9", "0.9"],
        ["0.8", "0.8"],
        ["0.7", "0.7"],
        ["0.6", "0.6"],
        ["0.5", "0.5"],
        ["0.4", "0.4"],
        ["0.3", "0.3"],
        ["0.2", "0.3"],
        ["0.1", "0.1"],
        ["0", "0"]
      ]), "volume_")
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_PITCH, " 音調")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_SPEAK_P20, "2"],
        [Blockly.Msg.WEBDUINO_SPEAK_P15, "1.5"],
        [Blockly.Msg.WEBDUINO_SPEAK_P10, "1"],
        [Blockly.Msg.WEBDUINO_SPEAK_P05, "0.5"],
        [Blockly.Msg.WEBDUINO_SPEAK_P01, "0.1"]
      ]), "pitch_")
      .appendField(Blockly.Msg.WEBDUINO_SPEAK_RATE, " 速度")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_SPEAK_R20, "2"],
        [Blockly.Msg.WEBDUINO_SPEAK_R15, "1.5"],
        [Blockly.Msg.WEBDUINO_SPEAK_R10, "1"],
        [Blockly.Msg.WEBDUINO_SPEAK_R07, "0.7"],
        [Blockly.Msg.WEBDUINO_SPEAK_R05, "0.5"]
      ]), "rate_");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setTooltip('');
    this.setColour(270);
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['status_repeat'] = {
  init: function () {
    this.appendValueInput("times_")
      .appendField(new Blockly.FieldImage("media/notes.png", 12, 14, "即將停用"))
      .setCheck("Number")
      .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT, "狀態切換，重複");
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_STATUS_NUM, "次");
    this.setColour(100);
    this.itemCount_ = 2;
    this.updateShape_();
    this.setMutator(new Blockly.Mutator(['status_repeat_join_item']));
    this.setTooltip('即將停用，請改用 "迴圈" 與 "等待"');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setHelpUrl('https://webduino.io');
  },
  mutationToDom: function () {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  domToMutation: function (xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  decompose: function (workspace) {
    var containerBlock = Blockly.Block.obtain(workspace,
      'status_repeat_join_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'status_repeat_join_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    for (var i = 0; i < this.itemCount_; i++) {
      if (connections[i]) {
        this.getInput('ADD' + i).connection.connect(connections[i]);
      }
    }
  },
  saveConnections: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
  },
  updateShape_: function () {
    var v = [];
    if (this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else {
      var i = 0;
      while (this.getInput('ADD' + i)) {
        v[i] = this.getInput('ADD' + i).fieldRow[1].text_;
        this.removeInput('ADD' + i);
        i++;
      }
    }
    if (this.itemCount_ == 0) {} else {
      for (var i = 0; i < this.itemCount_; i++) {
        if (v[i]) {
          this.appendStatementInput('ADD' + i)
            .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_STATUSNUM + (i + 1) + Blockly.Msg.WEBDUINO_STATUS_REPEAT_DELAY)
            .appendField(new Blockly.FieldTextInput(v[i]), "time" + i)
            .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_SECS, "秒：");
        } else {
          this.appendStatementInput('ADD' + i)
            .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_STATUSNUM + (i + 1) + Blockly.Msg.WEBDUINO_STATUS_REPEAT_DELAY)
            .appendField(new Blockly.FieldTextInput("1"), "time" + i)
            .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_SECS, "秒：");
        }
      }
    }
  },
  newQuote_: Blockly.Blocks['text'].newQuote_
};

Blockly.Blocks['status_repeat_join_container'] = {
  init: function () {
    this.setColour(100);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_ADD, '加入狀態');
    this.appendStatementInput('STACK');
    this.setTooltip('');
    this.contextMenu = false;
  }
};

Blockly.Blocks['status_repeat_join_item'] = {
  init: function () {
    this.setColour(100);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_STATUS, '狀態');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.contextMenu = false;
  }
};



Blockly.Blocks['status_repeat_forever'] = {
  init: function () {
    this.appendValueInput("name_")
      .appendField(new Blockly.FieldImage("media/notes.png", 12, 14, "即將停用"))
      .appendField(Blockly.Msg.WEBDUINO_STATUS_FOREVER, "狀態重複切換")
      .appendField(Blockly.Msg.WEBDUINO_STATUS_FOREVER_NAME, "名稱：");
    this.appendDummyInput();
    this.setColour(100);
    this.itemCount_ = 2;
    this.updateShape_();
    this.setMutator(new Blockly.Mutator(['status_repeat_join_item']));
    this.setTooltip('即將停用，請改用 "迴圈" 與 "等待"');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setHelpUrl('https://webduino.io');
  },
  mutationToDom: function () {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  domToMutation: function (xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  decompose: function (workspace) {
    var containerBlock = Blockly.Block.obtain(workspace,
      'status_repeat_join_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = Blockly.Block.obtain(workspace, 'status_repeat_join_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  compose: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var connections = [];
    while (itemBlock) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    for (var i = 0; i < this.itemCount_; i++) {
      if (connections[i]) {
        this.getInput('ADD' + i).connection.connect(connections[i]);
      }
    }
  },
  saveConnections: function (containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
        itemBlock.nextConnection.targetBlock();
    }
  },
  updateShape_: function () {
    var v = [];
    if (this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else {
      var i = 0;
      while (this.getInput('ADD' + i)) {
        v[i] = this.getInput('ADD' + i).fieldRow[1].text_;
        this.removeInput('ADD' + i);
        i++;
      }
    }
    if (this.itemCount_ == 0) {} else {
      for (var i = 0; i < this.itemCount_; i++) {
        if (v[i]) {
          this.appendStatementInput('ADD' + i)
            .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_STATUSNUM + (i + 1) + Blockly.Msg.WEBDUINO_STATUS_REPEAT_DELAY)
            .appendField(new Blockly.FieldTextInput(v[i]), "time" + i)
            .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_SECS, "秒：");
        } else {
          this.appendStatementInput('ADD' + i)
            .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_STATUSNUM + (i + 1) + Blockly.Msg.WEBDUINO_STATUS_REPEAT_DELAY)
            .appendField(new Blockly.FieldTextInput("1"), "time" + i)
            .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_SECS, "秒：");
        }
      }
    }
  },
  newQuote_: Blockly.Blocks['text'].newQuote_
};

Blockly.Blocks['status_repeat_stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("media/notes.png", 12, 14, "即將停用"))
      .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_STOP, "停止")
      .appendField(new Blockly.FieldVariable("timer"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_STATUS_REPEAT_STOPCONTENT, "的重複切換");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('即將停用，請改用 "迴圈" 與 "等待"');
    this.setColour(100);
    this.setHelpUrl('https://webduino.io');
  }
};



Blockly.Blocks['max7219_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_MATRIX, "Max7219")
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_DIN, "din")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "din_")
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_CS, "cs")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "cs_")
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_CLK, "clk")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "clk_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://webduinoio.github.io/demo/max7219/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#vymr8o
Blockly.Blocks['max7219_draw'] = {
  init: function () {
    this.appendValueInput("code_")
      .setCheck("String")
      .appendField(new Blockly.FieldVariable("matrix"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_CODE, "顯示圖形，圖形代碼：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('http://webduinoio.github.io/demo/max7219/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#nxgvz5
Blockly.Blocks['max7219_animate'] = {
  init: function () {
    this.appendValueInput("times_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldVariable("matrix"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_TIMES, "顯示動畫，切換時間 (毫秒)：");
    this.appendValueInput("list_")
      .setCheck("Array")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_LIST, "動畫代碼 (列表)：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://webduinoio.github.io/demo/max7219/');
  }
};

Blockly.Blocks['max7219_animate_horse'] = {
  init: function () {
    this.appendValueInput("times_")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldVariable("matrix"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_HORSE, "跑馬燈")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_MATRIX_LEFT, "left"],
        [Blockly.Msg.WEBDUINO_MATRIX_RIGHT, "right"]
      ]), "state_")
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_SPEED, "，速度 (格/毫秒)：");
    this.appendValueInput("code_")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_HORSEODE, "代碼 (最少十六碼)：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://webduinoio.github.io/demo/max7219/');
  }
};

Blockly.Blocks['max7219_stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_STOP, "停止")
      .appendField(new Blockly.FieldVariable("matrix"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_ANIMATE, "動畫");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['max7219_off'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_CLOSE, "關閉")
      .appendField(new Blockly.FieldVariable("matrix"), "name_");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#p3cgep
Blockly.Blocks['max7219_88'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m1")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m2")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m3")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m4")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m5")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m6")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m7")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m8");
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m9")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m10")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m11")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m12")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m13")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m14")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m15")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m16");
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m17")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m18")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m19")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m20")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m21")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m22")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m23")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m24");
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m25")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m26")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m27")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m28")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m29")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m30")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m31")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m32");
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m33")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m34")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m35")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m36")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m37")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m38")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m39")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m40");
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m41")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m42")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m43")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m44")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m45")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m46")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m47")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m48");
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m49")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m50")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m51")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m52")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m53")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m54")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m55")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m56");
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m57")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m58")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m59")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m60")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m61")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m62")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m63")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "m64");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(35);
    this.setHelpUrl('https://webduino.io');
  }
};


Blockly.Blocks['max7219_val_alphabet'] = {
  init: function () {
    this.appendValueInput("value_")
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_ALPHABET2, "英文字母 (A~Z,a~z)")
      .setCheck("String");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(35);
    this.setHelpUrl('https://webduino.io');
  }
};


Blockly.Blocks['max7219_val_num'] = {
  init: function () {
    this.appendValueInput("value_")
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_NUM2, "數字 (0~99)");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(35);
    this.setHelpUrl('https://webduino.io');
  }
};


Blockly.Blocks['max7219_val_img'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_MATRIX_IMG, "圖案")
      .appendField(new Blockly.FieldDropdown([
        ["↑", "080c0effff0e0c08"],
        ["↓", "103070ffff707010"],
        ["←", "183c7eff18181818"],
        ["→", "18181818ff7e3c18"],
        ["♥", "0c1e3e7c3e1e0c00"],
        ["♡", "0c12224422120c00"],
        ["▲", "4060707870604000"],
        ["▼", "0818387838180800"],
        ["►", "00fe7c3810000000"],
        ["◄", "0010387cfe000000"],
        ["△", "4060504850604000"],
        ["▽", "4060504850604000"],
        ["○", "3c4281818181423c"],
        ["◑", "384482fefe7c3800"],
        ["◐", "387cfefe82443800"],
        ["￥", "00292a2cf82c2a29"],
        ["Χ", "8142241818244281"],
        ["✓", "18306030180c0600"],
        ["□", "007e424242427e00"],
        ["▣", "007e425a5a427e00"],
        ["◇", "0814224122140800"],
        ["♀", "004e51f1514e0000"],
        ["♂", "70d888d87905030f"],
        ["♪", "40e0e0e07f030604"],
        ["✈", "3c18db7e3c181800"],
        ["卍", "701212fe90901c00"],
        ["卐", "1c9090fe12127000"],
        ["︱", "0000007f00000000"],
        ["—", "0808080808080800"],
        ["╱", "4020100804020100"],
        ["＼", "0102040810204000"],
        ["大", "8444241f24448400"],
        ["中", "3c2424ff24243c00"],
        ["小", "209880fe00182000"],
        ["米", "925438fe38549200"],
        ["正", "82f282fe92929200"],
        ["囧", "ff89f79191f789ff"]
      ]), "img_");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(35);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['photocell_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_PHOTOCELL, "光敏電阻，類比腳位：")
      .appendField(new Blockly.FieldDropdown([
        ["A0", "0"],
        ["A1", "1"],
        ["A2", "2"],
        ["A3", "3"],
        ["A4", "4"],
        ["A5", "5"]
      ]), "pin_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#xqkech
Blockly.Blocks['photocell_detected'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("photocell"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_PHOTOCELL_DETECTED, "開始偵測");
    this.appendStatementInput("detected_")
      .appendField(Blockly.Msg.WEBDUINO_PHOTOCELL_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#syxm8m
Blockly.Blocks['photocell_val'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("photocell"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_PHOTOCELL_VAL, "偵測的數值");
    this.setOutput(true);
    this.setColour(35);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#pdtd2m
Blockly.Blocks['photocell_stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("photocell"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_PHOTOCELL_STOP, "停止偵測");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['soil_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_SOIL, "土壤濕度偵測，類比腳位：")
      .appendField(new Blockly.FieldDropdown([
        ["A0", "0"],
        ["A1", "1"],
        ["A2", "2"],
        ["A3", "3"],
        ["A4", "4"],
        ["A5", "5"]
      ]), "pin_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#xqkech
Blockly.Blocks['soil_detected'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("soil"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_SOIL_DETECTED, "開始偵測");
    this.appendStatementInput("detected_")
      .appendField(Blockly.Msg.WEBDUINO_SOIL_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#syxm8m
Blockly.Blocks['soil_val'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("soil"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_SOIL_VAL, "偵測的數值");
    this.setOutput(true);
    this.setColour(35);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#pdtd2m
Blockly.Blocks['soil_stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("soil"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_SOIL_STOP, "停止偵測");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};


Blockly.Blocks['irrecv_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_IRRECV, "紅外線接收，腳位：")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "pin_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['irrecv_on'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("irrecv"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_IRRECV_ON, "開始接收");
    this.appendStatementInput("on_")
      .appendField(Blockly.Msg.WEBDUINO_IRRECV_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['irrecv_val'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("irrecv"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_IRRECV_CODE, "接收的代碼");
    this.setOutput(true);
    this.setColour(35);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['irrecv_off'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("irrecv"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_IRRECV_OFF, "停止接收");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};


Blockly.Blocks['irled_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_IRLED, "紅外線發射，腳位：")
      .appendField(new Blockly.FieldDropdown([
        ["9", "9"]
      ]), "pin_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['irled_launch'] = {
  init: function () {
    this.appendValueInput("code_")
      .setCheck("String")
      .appendField(new Blockly.FieldVariable("irled"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_IRLED_LAUNCHCODE, "發射代碼 ( 十六進位 )：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};


Blockly.Blocks['adxl345_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_ADXL345, "三軸加速度計，SDA")
      .appendField(new Blockly.FieldDropdown([
        ["A4", "4"]
      ]), "sda_")
      .appendField(Blockly.Msg.WEBDUINO_ADXL345_SCL, "  SCL")
      .appendField(new Blockly.FieldDropdown([
        ["A5", "5"]
      ]), "scl_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['adxl345_on'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("adxl"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_ADXL345_ON, "開始偵測");
    this.appendStatementInput("on_")
      .appendField(Blockly.Msg.WEBDUINO_ADXL345_DO, "執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['adxl345_val'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("adxl"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_ADXL345_S, "的")
      .appendField(new Blockly.FieldDropdown([
        ["x", "_x"],
        ["y", "_y"],
        ["z", "_z"],
        ["roll", "_r"],
        ["pitch", "_p"]
      ]), "val_")
      .appendField(Blockly.Msg.WEBDUINO_ADXL345_VAL, "數值");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(35);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['adxl345_off'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("adxl"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_ADXL345_OFF, "停止偵測");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};


Blockly.Blocks['joystick_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("搖桿，X")
      .appendField(new Blockly.FieldDropdown([
        ["A0", "0"],
        ["A1", "1"],
        ["A2", "2"],
        ["A3", "3"],
        ["A4", "4"],
        ["A5", "5"]
      ]), "vrx_")
      .appendField("  Y")
      .appendField(new Blockly.FieldDropdown([
        ["A0", "0"],
        ["A1", "1"],
        ["A2", "2"],
        ["A3", "3"],
        ["A4", "4"],
        ["A5", "5"]
      ]), "vry_")
      .appendField("  SW")
      .appendField(new Blockly.FieldDropdown([
        ["2", "2"],
        ["3", "3"],
        ["4", "4"],
        ["5", "5"],
        ["6", "6"],
        ["7", "7"],
        ["8", "8"],
        ["9", "9"],
        ["10", "10"],
        ["11", "11"],
        ["12", "12"],
        ["13", "13"],
        ["14 ( A0 )", "14"],
        ["15 ( A1 )", "15"],
        ["16 ( A2 )", "16"],
        ["17 ( A3 )", "17"],
        ["18 ( A4 )", "18"],
        ["19 ( A5 )", "19"]
      ]), "sw_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['joystick_on'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("joystick"), "name_")
      .appendField("開始偵測");
    this.appendStatementInput("on_")
      .appendField("執行：");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['joystick_val'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("joystick"), "name_")
      .appendField("的")
      .appendField(new Blockly.FieldDropdown([
        ["X", "_x"],
        ["Y", "_y"],
        ["SW", "_z"]
      ]), "val_")
      .appendField("數值");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(35);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['joystick_off'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("joystick"), "name_")
      .appendField("停止偵測");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};


Blockly.Blocks['document_keyboard'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_KEYBOARD, "開始偵測 鍵盤")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.WEBDUINO_KEYBOARD_KEYDOWN, "onkeydown"],
        [Blockly.Msg.WEBDUINO_KEYBOARD_KEYUP, "onkeyup"]
      ]), "event_")
    this.appendStatementInput("do_");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(5);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['document_keyboard_konami'] = {
  init: function () {
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_KEYBOARD_KONAMI, "當輸入 Konami Code，執行");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(35);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['document_keyboard_stop'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_KEYBOARD_STOP, "停止偵測 鍵盤行為");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(5);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['document_keycode'] = {
  init: function () {
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_KEYBOARD_KEY, "如果是")
      .appendField(new Blockly.FieldDropdown([
        ["A", "65"],
        ["B", "66"],
        ["C", "67"],
        ["D", "68"],
        ["E", "69"],
        ["F", "70"],
        ["G", "71"],
        ["H", "72"],
        ["I", "73"],
        ["J", "74"],
        ["K", "75"],
        ["L", "76"],
        ["M", "77"],
        ["N", "78"],
        ["O", "79"],
        ["P", "80"],
        ["Q", "81"],
        ["R", "82"],
        ["S", "83"],
        ["T", "84"],
        ["U", "85"],
        ["V", "86"],
        ["W", "87"],
        ["X", "88"],
        ["Y", "89"],
        ["Z", "90"],
        [Blockly.Msg.WEBDUINO_KEYBOARD_SPACE, "32"],
        ["enter", "13"],
        [Blockly.Msg.WEBDUINO_KEYBOARD_UP, "38"],
        [Blockly.Msg.WEBDUINO_KEYBOARD_DOWN, "40"],
        [Blockly.Msg.WEBDUINO_KEYBOARD_LEFT, "37"],
        [Blockly.Msg.WEBDUINO_KEYBOARD_RIGHT, "39"],
        ["0", "48"],
        ["1", "49"],
        ["2", "50"],
        ["3", "51"],
        ["4", "52"],
        ["5", "53"],
        ["6", "54"],
        ["7", "55"],
        ["8", "56"],
        ["9", "57"],
        ["shift", "16"],
        ["alt", "18"],
        ["ctrl", "17"],
        ["command(R)", "93"],
        ["command(L)", "91"],
        ["tab", "9"],
        ["+ -", "187"],
        ["- _", "189"],
        ["{ [", "219"],
        ["} ]", "221"],
        ["|", "220"],
        ["; :", "186"],
        ["\' \"", "222"],
        ["< ,", "188"],
        ["> .", "190"],
        ["? /", "191"]
      ]), "keycode_")
      .appendField(Blockly.Msg.WEBDUINO_KEYBOARD_DO, "，執行：");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(35);
    this.setHelpUrl('https://webduino.io');
  }
};


//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#k2cao2
Blockly.Blocks['text_indexof'] = {
  init: function () {
    this.appendValueInput("input_")
      .setCheck("String");
    this.appendValueInput("indexof_")
      .setCheck("String")
      .appendField(Blockly.Msg.TEXTLOGIC_INSIDE, "裡面")
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.TEXTLOGIC_HAS, "!=-1"],
        [Blockly.Msg.TEXTLOGIC_NO, "==-1"]
      ]), "state_")
      .appendField(Blockly.Msg.TEXTLOGIC_TEXT, "文字");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(210);
    this.setHelpUrl('https://webduino.io');
  }
};


Blockly.Blocks['rfid_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("RFID，SDA")
      .appendField(new Blockly.FieldDropdown([
        ["10", "10"]
      ]), "sda_")
      .appendField("  SCK")
      .appendField(new Blockly.FieldDropdown([
        ["13", "13"]
      ]), "sck_")
      .appendField("  MOSI")
      .appendField(new Blockly.FieldDropdown([
        ["11", "11"]
      ]), "mosi_")
      .appendField("  MISO")
      .appendField(new Blockly.FieldDropdown([
        ["12", "12"]
      ]), "miso_");
    this.setOutput(true);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['rfid_enter'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("rfid"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_RFID_ON, "開始偵測");
    this.appendStatementInput("on_")
      .appendField(Blockly.Msg.WEBDUINO_RFID_DO, "執行");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['rfid_uid'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("rfid"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_RFID_UID, "偵測到的代碼");
    this.setOutput(true);
    this.setTooltip('');
    this.setColour(35);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['rfid_if'] = {
  init: function () {
    this.appendValueInput("uid_")
      .appendField(Blockly.Msg.WEBDUINO_RFID_IF, "如果")
      .appendField(new Blockly.FieldVariable("rfid"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_RFID_UIDIS, "偵測到的代碼為");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_RFID_DO, "執行");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(35);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['rfid_leave'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.WEBDUINO_RFID_IF, "如果")
      .appendField(new Blockly.FieldVariable("rfid"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_RFID_OUT, "離開偵測範圍");
    this.appendStatementInput("do_")
      .appendField(Blockly.Msg.WEBDUINO_RFID_DO, "執行");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
    this.setColour(65);
    this.setHelpUrl('https://webduino.io');
  }
};

Blockly.Blocks['rfid_stopread'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("rfid"), "name_")
      .appendField(Blockly.Msg.WEBDUINO_RFID_OFF, "停止偵測");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('https://webduino.io');
  }
};
