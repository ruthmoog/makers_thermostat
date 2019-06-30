$(document).ready(function() {
  var thermostat = new Thermostat();
  indicateTemperature();
  indicateEnergyUsage();

  $("#energy_use").click(function() {
    indicateEnergyUsage();
    var hi = thermostat.energyUsage();
    alert(`Energy usage is calculated as: ${hi}`);
  });
  
  $("#temp_down").click(function() {
    indicateEnergyUsage();
    thermostat.down();
    indicateTemperature();
  });

  $("#temp_up").click(function() {
    indicateEnergyUsage();
    thermostat.up();
    indicateTemperature();
  });
  
  $("#reset").click(function() {
    thermostat.reset();
    indicateTemperature();
    indicateEnergyUsage();

  });

  function indicateEnergyUsage() {
    var status = thermostat.energyUsage();
    $("#energy_use")
    .removeClass()
    .addClass(`${status}`);
  }

  function indicateTemperature() {
    $("h1").text(`${thermostat.temp}`);
  }

});
