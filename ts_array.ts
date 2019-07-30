window.onload = async () => {
    const numbers = [12, 56, 43, 34];
    traverseArray1(numbers);
    traverseArray2(numbers);
    traverseArray3(numbers);
    traverseArray4(numbers);
    sortArray(numbers);
    combineArray();
};

const traverseArray1 = (numbers: number[]): void => {
    for(let i = 0; i < numbers.length; i++) {
        console.log(`${i} = ${numbers[i]}`)
    }
};

const traverseArray2 = (numbers: number[]): void => {
    numbers.forEach((value, i) => {
        console.log(`${i} = ${value}`)
    });
};

// iterate over iterable type, such as array, map, set, DOM node collections etc
const traverseArray3 = (numbers: Iterable<number>): void => {
    for(const value of numbers) {
        console.log(`${value}`)
    }
};

// iterate over the properties of an object (the object keys)
const traverseArray4 = (numbers: Object): void => {
    for(const name in numbers) {
        console.log(`${name} = ${numbers[name]}`)
    }
};

const sortArray = (numbers: number[]): void => {
    //sort alters the current array
    const sorted = numbers.sort();
    console.log(numbers);
    console.log(sorted);
    console.log(sorted === numbers);
    const sorted2 = numbers.sort((a, b) => b - a);
    console.log(sorted2);
};

const combineArray = (): void => {
    const num1 = [1, 2, 3];
    const num2 = [4, 5, 6];
    const num3 = [7, 8, 9];

    // will not alert the original arrays
    const numbers1 = (<number[]>[]).concat(num1, num2, num3);   // slowest?
    const numbers2 = [...num1, ...num2, ...num3];   // best approach
    const numbers3 = [];
    numbers3.push(...num1, ...num2, ...num3);
    console.log(numbers1);
    console.log(numbers2);
    console.log(numbers3);
};