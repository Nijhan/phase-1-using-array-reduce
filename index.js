const batteryBatches =[4.5,5, 3,4,4,6,5,7,3,6];

const totalBatteries = batteryBatches.reduce((accumulator, currentValue)=> {
    return accumulator+currentValue;
}, 0);
console.log(totalBatteries.toFixed(1));

