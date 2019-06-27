"use strict";

function Thermostat() {
  this.MIN_TEMP = 10;
  this.MAX_TEMP_ON = 25;
  this.temp = 20;
  this._powerSavingMode = true;
}

Thermostat.prototype.isMinTemp = function() {
  return this.temp === this.MIN_TEMP;
};

Thermostat.prototype.getCurrentTemp = function() {
  return this.temp;
};

Thermostat.prototype.up = function() {
  if (this.temp == this.MAX_TEMP_ON) {
    return;
  }
  return (this.temp += 1);
};

Thermostat.prototype.down = function() {
  if (this.isMinTemp()) {
    return;
  }
  this.temp -= 1;
};
