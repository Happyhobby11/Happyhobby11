// let x = 10;

// while(x >= 0){
//     console.log(x);
//     x--;
// }

let stars = "*****"
let time = 0
let space = "     "
let space2 = ''
let max = 4

// while(time <= max){
//     console.log(space.substring(max - time) + stars.substring(time))
//     time++;
// }

// while(time <= max){
//     console.log(stars);
//     stars = stars.substring(1);
//     time++;
// }

// while(time <= max){
//     console.log(space2 + stars);
//     space2 = space2 + " "
//     stars = stars.substring(1);
//     time++;
// }

let a = 0
while (a < 5) {
    let star2 = '';
    let c = 0;
    while (c < a) {
        star2 = star2 + ' ';
        c = c + 1;
    }
    let b = 5 - a;
    while (b > 0) {
        star2 = star2 + '*';
        b = b - 1;
    }
    console.log(star2);
    a = a + 1;
}