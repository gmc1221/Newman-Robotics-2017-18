/**
 * @fileoverview FTC robot blocks related to Position.
 * @author lizlooney@google.com (Liz Looney)
 */

// The following are generated dynamically in HardwareUtil.fetchJavaScriptForHardware():
// positionIdentifier
// The following are defined in vars.js:
// createNonEditableField
// getPropertyColor
// functionColor

Blockly.Blocks['position_getProperty'] = {
  init: function() {
    var PROPERTY_CHOICES = [
        ['DistanceUnit', 'DistanceUnit'],
        ['X', 'X'],
        ['Y', 'Y'],
        ['Z', 'Z'],
        ['AcquisitionTime', 'AcquisitionTime'],
    ];
    this.setOutput(true, null);
    this.appendDummyInput()
        .appendField(createNonEditableField('Position'))
        .appendField('.')
        .appendField(new Blockly.FieldDropdown(PROPERTY_CHOICES), 'PROP');
    this.appendValueInput('POSITION')
        .appendField('position')
        .setCheck('Position')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setColour(getPropertyColor);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    var TOOLTIPS = [
        ['DistanceUnit', 'The DistanceUnit of the given Position object.'],
        ['X', 'The X of the given Position object.'],
        ['Y', 'The Y of the given Position object.'],
        ['Z', 'The Z of the given Position object.'],
        ['AcquisitionTime', 'The AcquisitionTime of the given Position object.'],
    ];
    this.setTooltip(function() {
      var key = thisBlock.getFieldValue('PROP');
      for (var i = 0; i < TOOLTIPS.length; i++) {
        if (TOOLTIPS[i][0] == key) {
          return TOOLTIPS[i][1];
        }
      }
      return '';
    });
  }
};

Blockly.JavaScript['position_getProperty'] = function(block) {
  var property = block.getFieldValue('PROP');
  var position = Blockly.JavaScript.valueToCode(
      block, 'POSITION', Blockly.JavaScript.ORDER_NONE);
  var code = positionIdentifier + '.get' + property + '(' + position + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// Functions

Blockly.Blocks['position_create'] = {
  init: function() {
    this.setOutput(true, 'Position');
    this.appendDummyInput()
        .appendField('new')
        .appendField(createNonEditableField('Position'));
    this.setColour(functionColor);
    this.setTooltip('Create a new Position object.');
  }
};

Blockly.JavaScript['position_create'] = function(block) {
  var code = positionIdentifier + '.create()';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['position_create_withArgs'] = {
  init: function() {
    this.setOutput(true, 'Position');
    this.appendDummyInput()
        .appendField('new')
        .appendField(createNonEditableField('Position'));
    this.appendValueInput('DISTANCE_UNIT')
        .appendField('distanceUnit')
        .setCheck('DistanceUnit')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('X')
        .appendField('x')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('Y')
        .appendField('y')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('Z')
        .appendField('z')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('ACQUISITION_TIME')
        .appendField('acquisitionTime')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setColour(functionColor);
    this.setTooltip('Create a new Position object.');
  }
};

Blockly.JavaScript['position_create_withArgs'] = function(block) {
  var distanceUnit = Blockly.JavaScript.valueToCode(
      block, 'DISTANCE_UNIT', Blockly.JavaScript.ORDER_NONE);
  var x = Blockly.JavaScript.valueToCode(
      block, 'X', Blockly.JavaScript.ORDER_NONE);
  var y = Blockly.JavaScript.valueToCode(
      block, 'Y', Blockly.JavaScript.ORDER_NONE);
  var z = Blockly.JavaScript.valueToCode(
      block, 'Z', Blockly.JavaScript.ORDER_NONE);
  var acquisitionTime = Blockly.JavaScript.valueToCode(
      block, 'ACQUISITION_TIME', Blockly.JavaScript.ORDER_NONE);
  var code = positionIdentifier + '.create_withArgs(' + distanceUnit + ', ' + x + ', ' +
      y + ', ' + z + ', ' + acquisitionTime + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['position_toDistanceUnit'] = {
  init: function() {
    this.setOutput(true, 'Position');
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('Position'))
        .appendField('.')
        .appendField(createNonEditableField('toDistanceUnit'));
    this.appendValueInput('POSITION')
        .appendField('position')
        .setCheck('Position')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('DISTANCE_UNIT')
        .appendField('distanceUnit')
        .setCheck('DistanceUnit')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setColour(functionColor);
    this.setTooltip('Returns a new Position object created from the given Position ' +
        'object and distance unit.');
  }
};

Blockly.JavaScript['position_toDistanceUnit'] = function(block) {
  var position = Blockly.JavaScript.valueToCode(
      block, 'POSITION', Blockly.JavaScript.ORDER_NONE);
  var distanceUnit = Blockly.JavaScript.valueToCode(
      block, 'DISTANCE_UNIT', Blockly.JavaScript.ORDER_NONE);
  var code = positionIdentifier + '.toDistanceUnit(' + position + ', ' + distanceUnit + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['position_toText'] = {
  init: function() {
    this.setOutput(true, 'String');
    this.appendDummyInput()
        .appendField('call')
        .appendField(createNonEditableField('Position'))
        .appendField('.')
        .appendField(createNonEditableField('toText'));
    this.appendValueInput('POSITION')
        .appendField('position')
        .setCheck('Position')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setColour(functionColor);
    this.setTooltip('Returns a text representation of the given Position object.');
  }
};

Blockly.JavaScript['position_toText'] = function(block) {
  var position = Blockly.JavaScript.valueToCode(
      block, 'POSITION', Blockly.JavaScript.ORDER_NONE);
  var code = positionIdentifier + '.toText(' + position + ')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
