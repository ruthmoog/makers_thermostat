"use strict";

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("on initiation", function() {
    it("is set to 20 degrees C", function() {
      expect(thermostat.getCurrentTemp()).toEqual(20);
    });

    it("has a minimum temperature of 10 degrees C", function() {
      for (var i = 0; i < 11; i++) {
        thermostat.down();
      }
      expect(thermostat.getCurrentTemp()).toEqual(10);
    });
  });

  describe("temperature controls", function() {
    describe("up", function() {
      it("temperature is increased by 1 degree", function() {
        thermostat.up();
        expect(thermostat.getCurrentTemp()).toEqual(21);
      });
    });

    describe("down", function() {
      it("temperature is descreased by 1 degree", function() {
        thermostat.down();
        expect(thermostat.getCurrentTemp()).toEqual(19);
      });
    });

    describe("reset", function() {
      it("resets the temperature to 20 degrees C", function() {
        thermostat.up();
        thermostat.reset();
        expect(thermostat.getCurrentTemp()).toEqual(20);
      });
    });
  });

  describe("power saving mode", function() {
    it("returns the status of the mode", function() {
      expect(thermostat._powerSavingMode).toEqual(true);
    });

    describe("when switched on", function() {
      it("has a maximum temperature of 25 degrees C", function() {
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.getCurrentTemp()).toEqual(25);
      });

      it("can be switched off", function() {
        thermostat.powerSavingModeOff();
        expect(thermostat.isPowerSavingModeOn()).toEqual(false);
      });
    });

    describe("when switched off", function() {
      it("has a maximum temperature of 32 degrees C", function() {
        thermostat.powerSavingModeOff();
        for (var i = 0; i < 13; i++) {
          thermostat.up();
        }
        expect(thermostat.getCurrentTemp()).toEqual(32);
      });

      it("can be switched on", function() {
        thermostat.powerSavingModeOff();
        expect(thermostat.isPowerSavingModeOn()).toEqual(false);
        thermostat.powerSavingModeOn();
        expect(thermostat.isPowerSavingModeOn()).toEqual(true);
      });
    });
  });

  describe("energy usage", function() {
    it("returns 'low-usage' when temp is below 18C", function() {
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });

    it("returns 'medium-usage' when temp is between 18C and 24C inclusive", function() {
      for (var i = 0; i < 4; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });

    it("returns 'high-usage' when temp is 25C or above", function() {
      for (var i = 0; i < 7; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });
  });
});
