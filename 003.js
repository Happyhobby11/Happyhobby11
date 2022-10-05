const numA = 63
const numB = 27369

function timeConvert(a){
    let secs = a % 60;
    let mins = ((a - secs) % 3600) / 60;
    let hours =  (a - a % 3600)/ 3600;
    return console.log(`${hours}` + "h" + `${mins}` + "m" + `${secs}` + "s");
}

timeConvert(numA)
timeConvert(numB)