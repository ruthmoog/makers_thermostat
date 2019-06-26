'use strict';

function Thermostat() {
  this.MIN_TEMP = 10;
  this.temp = 20;
};

Thermostat.prototype.isMinTemp = function() {
  return this.temp === this.MIN_TEMP;
};

Thermostat.prototype.getCurrentTemp = function() {
  return this.temp;
};

Thermostat.prototype.up = function() {
  return this.temp += 1
};

Thermostat.prototype.down = function() {
  if (this.isMinTemp()) {
    return;
  }
  this.temp -= 1;
};
