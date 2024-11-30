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

const sendRequest = {
    "type": "send_request",
    "tooltip": "Send HTTP request",
    "helpUrl": "",
    "message0": "Request: %1 %2 URL: %3",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "PROTOCOL",
            "options": [
                [
                    "post",
                    "'post'"
                ],
                [
                    "get",
                    "'get'"
                ]
            ]
        },
        {
            "type": "input_dummy",
            "name": "NAME"
        },
        {
            "type": "input_value",
            "name": "URL",
            "check": "String"
        }
    ],
    "output": "String",
    "colour": 45
}

const sendWebhookMessage = {
    "type": "send_webhook_message",
    "tooltip": "send webhook message",
    "helpUrl": "",
    "message0": "Webhook Message: %1 URL: %2",
    "args0": [
        {
            "type": "input_value",
            "name": "MESSAGE",
            "check": "String"
        },
        {
            "type": "input_value",
            "name": "URL",
            "check": "String"
        }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 45
}


export const blocks_http = Blockly.common.createBlockDefinitionsFromJsonArray([
    doGetMainWrapper, doPostMainWrapper, returnText, getRequestParameter, sendRequest, sendWebhookMessage
]);
