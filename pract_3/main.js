function calculate_circle_area(radius) {
    return Math.PI * radius * radius;
}

let radius = prompt("Введите радиус круга:");
radius = parseFloat(radius); 

if (isNaN(radius)) {
    console.log("Ошибка: Введено некорректное значение.");
} else {
    let area = calculate_circle_area(radius);
    console.log(`Площадь круга с радиусом ${radius} равна ${area}.`);
}