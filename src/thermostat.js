"use strict";

function Thermostat() {
  this.MIN_TEMP = 10;
  this.MAX_TEMP_ON = 25;
  this.MAX_TEMP_OFF = 32;
  this.temp = 20;
  this._powerSavingMode = true;
}

Thermostat.prototype.isMinTemp = function() {
  return this.temp === this.MIN_TEMP;
};

Thermostat.prototype.isMaxTemp = function() {
  if (this.isPowerSavingModeOn()) {
    return this.temp === this.MAX_TEMP_ON;
  } else {
    return this.temp === this.MAX_TEMP_OFF;
  }
};

Thermostat.prototype.getCurrentTemp = function() {
  return this.temp;
};

Thermostat.prototype.up = function() {
  if (this.isMaxTemp()) {
    return;
  }
  return (this.temp++);
};

Thermostat.prototype.down = function() {
  if (this.isMinTemp()) {
    return;
  }
  this.temp--;
};

Thermostat.prototype.powerSavingModeOff = function() {
  return this._powerSavingMode = false;
};

Thermostat.prototype.powerSavingModeOn = function() {
  return this._powerSavingMode = true;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return (this._powerSavingMode === true);
};

Thermostat.prototype.reset = function() {
  return (this.temp = 20);
};

Thermostat.prototype.energyUsage = function() {
  if (this.temp < 18) {
    return "low-usage";
  } else if (this.temp < 25) {
    return "medium-usage";
  } else {
    return "high-usage";
  }
};
