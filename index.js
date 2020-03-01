// Code your solution in this file!
const returnFirstTwoDrivers = (drivers => [drivers[0], drivers[1]])

const returnLastTwoDrivers = (drivers => [drivers[drivers.length-2], drivers[drivers.length-1]])

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
	return (fare => int*fare)
}

const fareDoubler = (fare => createFareMultiplier(2)(fare))

const fareTripler = (fare => createFareMultiplier(3)(fare))

function selectDifferentDrivers (drivers, callback){
	return callback(drivers)
}