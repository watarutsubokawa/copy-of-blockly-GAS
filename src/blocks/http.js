import * as Blockly from 'blockly/core';

const doGetMainWrapper = {
    "type": "do_get",
    "tooltip": "when received HTTP get request",
    "helpUrl": "",
    "message0": "When Get %1",
    "args0": [
        {
            "type": "input_statement",
            "name": "STATEMENT"
        }
    ],
    "colour": 45
}

const doPostMainWrapper = {
    "type": "do_post",
    "tooltip": "when received HTTP post request",
    "helpUrl": "",
    "message0": "When Post %1",
    "args0": [
        {
            "type": "input_statement",
            "name": "STATEMENT"
        }
    ],
    "colour": 45
}

const returnText = {
    "type": "return_text_output",
    "tooltip": "return text output",
    "helpUrl": "",
    "message0": "Respond with text %1",
    "args0": [
        {
            "type": "input_value",
            "name": "TEXT",
            "check": "String"
        }
    ],
    "previousStatement": null,
    "colour": 45
}

const getRequestParameter = {
    "type": "request_parameter",
    "tooltip": "use within get or post statement",
    "helpUrl": "",
    "message0": "parameter %1",
    "args0": [
        {
            "type": "input_value",
            "name": "TEXT",
            "check": "String"
        }
    ],
    "output": "String",
    "colour": 45
}

export const blocks_http = Blockly.common.createBlockDefinitionsFromJsonArray([
    doGetMainWrapper, doPostMainWrapper, returnText, getRequestParameter
]);
