import * as Blockly from "blockly/core";

const onFormSubmit = {
    "type": "on_form_submit",
    "tooltip": "will be executed when the form become sent",
    "helpUrl": "",
    "message0": "on form submit %1",
    "args0": [
        {
            "type": "input_statement",
            "name": "NAME",
            "check": "String"
        }
    ],
    "colour": 285
}


export const blocks_forms = Blockly.common.createBlockDefinitionsFromJsonArray([
    onFormSubmit
]);
