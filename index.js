const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    const fare = (fare) => fare * integer
    return fare
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare)

const fareTripler = (fare) => createFareMultiplier(3)(fare)

function selectDifferentDrivers(drivers, selector) {
    return selector(drivers)
}