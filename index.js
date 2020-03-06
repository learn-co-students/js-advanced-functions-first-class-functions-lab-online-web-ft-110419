function returnFirstTwoDrivers(drivers) {
    const func = function() {
        let firstTwo = [];
        firstTwo = drivers.slice(0, 2);
        return firstTwo
    }
    return func()
}

function returnLastTwoDrivers(drivers) {
    const func = function() {
        let lastTwo = [];
        lastTwo = drivers.slice(-2);
        return lastTwo
    }
    return func()
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer
    }
}

function fareDoubler(fare) {
    const doubled = createFareMultiplier(2)(fare);
    return doubled
}

function fareTripler(fare) {
    const tripled = createFareMultiplier(3)(fare);
    return tripled
}

function selectDifferentDrivers(drivers, func) {
    return func(drivers)
}
