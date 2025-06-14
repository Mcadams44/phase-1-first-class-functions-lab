// Code your solution in this file!

// 1. Return first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Array of selector functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Fare multiplier generator
const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

// 5. Double fares
const fareDoubler = createFareMultiplier(2);

// 6. Triple fares
const fareTripler = createFareMultiplier(3);

// 7. Driver selector
const selectDifferentDrivers = function(drivers, driverSelector) {
  return driverSelector(drivers);
};