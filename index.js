// Code your solution in this file!

function returnFirstTwoDrivers(arr){
    return arr.slice(0, 2);
}

function returnLastTwoDrivers(arr){
    // return arr.slice(Math.max(arr.length - 2, 1));
    return arr.slice(1).slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function(int){
    return function(multiplier){
        return int * multiplier;
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arr, func){
    return func(arr);
}