console.log('Week 3 - Day 1 HW')

console.log('Tuwaiq Academy   JS')


// Exercise (1) ------------------------------
console.log('Exercise (1) ------------------------------');

let numbers = [1, 2, 3, 5, 8, 13];
let numbers2 = [2, 4, 8, 16, 32, 64];
let numbers3 = [3, 6, 9, 12, 15, 18];

function printArray(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

printArray(numbers);
printArray(numbers2);
printArray(numbers3);


// Exercise (2) ------------------------------
console.log('Exercise (2) ------------------------------');

function getBelowTen(arr) {

    let newArr = []
    newArr = arr.filter(element => {
        return element < 10
    });
    return newArr;
}

console.log(getBelowTen(numbers));
console.log(getBelowTen(numbers2));
console.log(getBelowTen(numbers3));


// Exercise (3) ------------------------------
console.log('Exercise (3) ------------------------------');

function multiplyAllByFive(arr) {
    let output = arr.map((element, i) => {
        return element * 5
    })
    return output
}

console.log(multiplyAllByFive(numbers));
console.log(multiplyAllByFive(numbers2));
console.log(multiplyAllByFive(numbers3));


// Exercise (4) ------------------------------
console.log('Exercise (4) ------------------------------');

function getFifteen(arr) {
    let output = arr.find( (element, i) => {
        return element <= 15
    })
    return output
}

console.log(getFifteen(numbers));
console.log(getFifteen(numbers2));
console.log(getFifteen(numbers3));


// Exercise (5) ------------------------------
console.log('Exercise (5) ------------------------------');

function mulAllValues(arr) {
    let newArray = []
    arr.forEach( (element, i) => {
        newArray.push(element * element);
    })
    return newArray
}

console.log(mulAllValues(numbers));
console.log(mulAllValues(numbers2));
console.log(mulAllValues(numbers3));



