import * as Blockly from 'blockly/core';

const writeToConsole = {
  "type": "write_to_console",
  "tooltip": "",
  "helpUrl": "",
  "message0": "Write %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 225
}

export const blocks_text = Blockly.common.createBlockDefinitionsFromJsonArray([
  writeToConsole
]);
