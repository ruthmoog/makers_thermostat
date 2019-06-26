'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });
 
  it ('starts at 20 degrees', function(){
    expect(thermostat.getCurrentTemp()).toEqual(20);
  });

  describe('up', function() {
    it ('the temp is increased by 1 degree', function() {
      thermostat.up();
      expect(thermostat.getCurrentTemp()).toEqual(21);
    });
  });
});
