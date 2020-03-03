// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = (drivers) => {return drivers.slice(-2)}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(mult) {
    const fareMultiplier = (num) => {return num * mult};
    return fareMultiplier;
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driveFunc) {
    return driveFunc(drivers);
}