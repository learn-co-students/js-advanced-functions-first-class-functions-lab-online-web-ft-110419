// Code your solution in this file!

function returnFirstTwoDrivers(arr) {
    let newArr = [arr[0], arr[1]]
    return newArr
}

function returnLastTwoDrivers(arr) {
    let newArr = [arr[2], arr[3]]
    return newArr
}

const createFareMultiplier = (a) => {
    const fareQuintupler = (b) => a * b
    return fareQuintupler
}

const fareDoubler = (a) => a * 2

const fareTripler = (a) => a * 3

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const selectDifferentDrivers = (arrayOfDrivers, fn) => {
    return fn(arrayOfDrivers)
}