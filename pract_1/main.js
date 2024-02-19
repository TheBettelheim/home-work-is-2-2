// создание объекта
let sportsEvent = {
    sport: "Футбол",
    location: "Стадион",
    date: "2024-07-15",
    participants: ["Команда1", "Команда2"]
};

// вывод свойств объекта
console.log("Информация о спортивном событии:");
for (let key in sportsEvent) {
    console.log(`${key}: ${sportsEvent[key]}`);
}

// проверка поулярности
if (sportsEvent.sport === "Футбол") {
    console.log("Футбол является самым популярным спортом в мире");
} else {
    console.log("Этот вид спорта встречается не так часто.");
}
