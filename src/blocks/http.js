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


export const blocks_http = Blockly.common.createBlockDefinitionsFromJsonArray([
    doGetMainWrapper, doPostMainWrapper
]);
