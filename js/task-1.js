'use strict';
const logItems = function (array) {
    let i = 1;
    for (let key of array) {
        console.log(`${i} - ${key}`);
        i += 1
    }
}


logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);