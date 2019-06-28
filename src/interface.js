$(document).ready(function() {
  var thermostat = new Thermostat();
  indicateEnergyUsage();


  $("#energy_use").click(function() {
    indicateEnergyUsage();
    var hi = thermostat.energyUsage();
    alert(`Energy usage is calculated as: ${hi}`);
  });

  function indicateEnergyUsage() {
    var status = thermostat.energyUsage();
    $("#energy_use")
      .removeClass()
      .addClass(`${status}`);
  }
});
