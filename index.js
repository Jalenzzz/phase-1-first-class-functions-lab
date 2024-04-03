const returnFirstTwoDrivers = (names) => {
    return names.slice(0, 2);
}

const returnLastTwoDrivers = (names) => {
    return names.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function multiplyFare(fare){
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, selectionFunction) {
    return selectionFunction(arrayOfDrivers); 
}