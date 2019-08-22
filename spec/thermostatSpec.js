"use strict";

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", () => {
    expect(thermostat.temperature()).toEqual(20);
  });

  it("increases the temperature with up function", () => {
    thermostat.up();
    expect(thermostat.temperature()).toEqual(21);
  });
  it("descreases the temperature with down function", () => {
    thermostat.down();
    expect(thermostat.temperature()).toEqual(19);
  });
  it("minimum temperature is 10 degrees", () => {
    expect(() => {
      thermostat.down(15);
    }).toThrowError("default temperature is 10");
  });
  it("sets maximum temperature to 25 degrees if saving mode is on", () => {
    thermostat.savingModeOn();
    expect(() => {
      thermostat.up(20);
    }).toThrowError("cannot increase: maximum temperature is 25 degrees");
  });
  it("sets maximum temperature to 32 degrees if saving mode is off", () => {
    thermostat.savingModeOff();
    expect(() => {
      thermostat.up(13);
    }).toThrowError("cannot increase: maximum temperature is 32 degrees");
  });
  it("saving mode is on by default", () => {
    expect(thermostat.savingMode()).toEqual(true);
  });
  it("resets the temperature to 20", () => {
    thermostat.reset();
    expect(thermostat.temperature()).toEqual(20);
  });
  it("low-usage", () => {
    thermostat.down(3);
    expect(thermostat.usage()).toEqual("low-usage");
  });
  it("medium-usage", () => {
    expect(thermostat.usage()).toEqual("medium-usage");
  });
  it("high-usage", () => {
    thermostat.savingModeOff();
    thermostat.up(10);
    expect(thermostat.usage()).toEqual("high-usage");
  });
});
