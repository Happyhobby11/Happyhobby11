let amount = 3700000

function stampDuty(amount) {
    if(amount < 2000000){
        return amount * 0.015
    } else if (amount < 2176470){
        return 30000 + 0.2 * (amount - 2000000)
    } else if (amount < 3000000){
        return amount * 0.03
    } else if (amount < 3290330){
        return 90000 + 0.2 * (amount - 3000000)
    } else if (amount < 4000000){
        return amount * 0.045
    } else if (amount < 4428580){
        return 180000 + 0.2 * (amount - 4000000)
    } else if (amount < 6000000){
        return amount * 0.06
    } else if (amount < 6720000){
        return 360000 + 0.2 * (amount - 6000000)
    } else if (amount < 20000000){
        return amount * 0.075
    } else if (amount < 21739130){
        return 1500000 + 0.2 * (amount - 20000000)
    } else {
        return amount * 0.085
    }
}

console.log(stampDuty(amount))