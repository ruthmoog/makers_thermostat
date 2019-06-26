function Thermostat() {
  this.temp = 20;
};

Thermostat.prototype.getCurrentTemp = function() {
  return this.temp;
};

Thermostat.prototype.up = function() {
  return this.temp ++
};