import * as Blockly from "blockly/core";

const onFormSubmit = {
    "type": "on_form_submit",
    "tooltip": "will be executed when sending the form",
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

const getNthAnswer = {
    "type": "form_get_Nth_answer",
    "tooltip": "returns answer of the form",
    "helpUrl": "",
    "message0": "%1 th answer %2",
    "args0": [
        {
            "type": "field_number",
            "name": "INDEX",
            "value": 1,
            "min": 1,
            "precision": 1
        },
        {
            "type": "input_dummy",
            "name": "NAME"
        }
    ],
    "output": "String",
    "colour": 285
}


export const blocks_forms = Blockly.common.createBlockDefinitionsFromJsonArray([
    onFormSubmit, getNthAnswer
]);
