$(document).ready(function() {
  const thermostat = new Thermostat();
  function updateTemperature() {
    $("#temperature").text(thermostat.temperature());
    $("#temperature").attr("class", thermostat.usage());
  }
  $("#temperature").text(thermostat.temperature());

  $("#temperature-up").on("click", function() {
    thermostat.up();
    updateTemperature();
  });
  $("#temperature-down").on("click", function() {
    thermostat.down();
    $("#temperature").text(thermostat.temperature());
    updateTemperature();
  });
  $("#temperature-reset").on("click", function() {
    thermostat.reset();
    updateTemperature();
  });
  $("#powersaving-on").on("click", function() {
    thermostat.savingModeOn();
    updateTemperature();
    $("#power-saving-status").text("on");
  });
  $("#powersaving-off").on("click", function() {
    thermostat.savingModeOff();
    updateTemperature();
    $("#power-saving-status").text("off");
  });
});

function displayWeather(city) {
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city;
  var token = "&appid=a3d9eb01d4de82b9b8d0849ef604dbed";
  var units = "&units=metric";

  $.get(url + token + units, function(data) {
    $("#current-temperature").text(data.main.temp);
  });
}

displayWeather("London");

$("#select-city").submit(function(event) {
  event.preventDefault();
  var city = $("#current-city").val();
  displayWeather(city);
});
