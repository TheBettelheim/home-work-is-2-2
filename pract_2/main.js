function absoluteValue(number) {
    if (number < 0) {
        return -number;
    } else {
        return number;
    }
}

let num = -3;
console.log(`Модуль числа ${num} равен ${absoluteValue(num)}.`);