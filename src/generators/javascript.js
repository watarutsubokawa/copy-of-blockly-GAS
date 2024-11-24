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

  return `function doGet(__get_request_param){\n${statement_statement}}\n`;
}

forBlock['do_post'] = function(block, generator) {
  const statement_statement = generator.statementToCode(block, 'STATEMENT');

  return `function doPost(__post_request_param){\n${statement_statement}}\n`;
}