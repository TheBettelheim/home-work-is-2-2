// Задание 1: Двумерный массив
let twoDimArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Вывод содержимого двумерного массива
console.log("Содержимое двумерного массива:");
for (let row of twoDimArray) {
    console.log(row);
}

// Нахождение суммы всех элементов двумерного массива
let sum = 0;
for (let row of twoDimArray) {
    for (let element of row) {
        sum += element;
    }
}
console.log("Сумма всех элементов:", sum);

// Подсчет количества элементов в каждом вложенном массиве
console.log("Количество элементов в каждом вложенном массиве:");
for (let row of twoDimArray) {
    console.log(row.length);
}