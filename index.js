const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice (0, 2)
}
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice (2, 4)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(value) {
    return function fareMultiplier (){
            return value*value
    }
}
function fareDoubler (value) {
    return value*2
}
function fareTripler (value) {
    return value*3
}
function selectDifferentDrivers (arrayOfDrivers, value) {
   if (value === returnFirstTwoDrivers) { 
    return arrayOfDrivers.slice (0, 2)
   }
   else if (value === returnLastTwoDrivers) {
    return arrayOfDrivers.slice (2, 4)
   }
}