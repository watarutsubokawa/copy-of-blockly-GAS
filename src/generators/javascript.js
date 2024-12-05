import {Order} from 'blockly/javascript';

export const forBlock = Object.create(null);

// === CATEGORY: TEXT ===
forBlock['write_to_console'] = function(block, generator) {
  const value_name = generator.valueToCode(block, 'NAME', Order.ATOMIC);

  return `console.log(${value_name});\n`;
};

// === CATEGORY: HTTP ===
forBlock['do_get'] = function(block, generator) {
  const statement_statement = generator.statementToCode(block, 'STATEMENT');

  return `function doGet(__request_param){\n${statement_statement}}\n`;
}

forBlock['do_post'] = function(block, generator) {
  const statement_statement = generator.statementToCode(block, 'STATEMENT');

  return `function doPost(__request_param){\n${statement_statement}}\n`;
}

forBlock['return_text_output'] = function(block, generator) {
  const value_text = generator.valueToCode(block, 'TEXT', Order.ATOMIC);

  return `return ContentService.createTextOutput(${value_text});\n`;
}

forBlock['request_parameter'] = function(block, generator) {
  const value_text = generator.valueToCode(block, 'TEXT', Order.ATOMIC);

  return [`__request_param.parameter[${value_text}]`, Order.NONE];
}


forBlock['send_request'] = function(block, generator) {
  const value_url = generator.valueToCode(block, 'URL', Order.ATOMIC);
  const value_protocol = block.getFieldValue('PROTOCOL');

  return [`UrlFetchApp.fetch(${value_url}, {method: ${value_protocol}}).getContentText('utf-8')`, Order.NONE];
}

forBlock['send_webhook_message'] = function(block, generator) {
  const value_message = generator.valueToCode(block, 'MESSAGE', Order.ATOMIC);
  const value_url = generator.valueToCode(block, 'URL', Order.ATOMIC);
  return `UrlFetchApp.fetch(${value_url}, {method: 'post', headers: {'Content-Type': 'application/json; charset=UTF-8'}, payload: JSON.stringify( {text: ${value_message}} ) });\n`.replaceAll('&amp;', '&');
}

forBlock['form_on_submit'] = function(block, generator) {
  const value_id = generator.valueToCode(block, 'ID', Order.ATOMIC);
  const statement_statement = generator.statementToCode(block, 'STATEMENT');

  return `
function registerFormEvent() {
  ScriptApp.newTrigger('onFormSubmit').forForm(FormApp.openById(${value_id})).onFormSubmit().create();
}
function onFormSubmit(__event_param) {
  ${statement_statement}
}
`;
}

forBlock['form_get_Nth_answer'] = function(block, generator) {
  const number_index = block.getFieldValue('INDEX');

  return [`__event_param.response.getItemResponses()[${number_index-1}].getResponse()`, Order.NONE];
}
