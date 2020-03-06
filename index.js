// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    let firstTwo = drivers.slice(0, 2)
    return firstTwo
}

const returnLastTwoDrivers = function(drivers) {
    let lastTwo = drivers.slice(2)
    return lastTwo
}
/* selectingDrivers — This is an array containing two elements: the two functions that we 
previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()). */
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
/* createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, 
and returns a function that will multiply a fare for a ride accordingly. 
If createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare 
as an argument and quadruples the fare.*/
const createFareMultiplier = function(num) {
    return function(int) {
        return num * int
    }
}
/* fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it. */
const fareDoubler = function(num){
    return num * 2
}
/* fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.*/
const fareTripler = function(num){
    return num * 3
}
/* selectDifferentDrivers() — This function takes two arguments, an array of drivers 
and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. 
Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.
let selectDifferentDrivers */
function selectDifferentDrivers(drivers, driversFunction) {
    if (driversFunction === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    } else {
        return returnLastTwoDrivers(drivers)
    }
}

