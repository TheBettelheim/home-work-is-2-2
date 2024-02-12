// Задание 3: Объект с вложенными объектами
let companies = {
    "Компания1": { employees: ["Иван", "Мария", "Алексей"] },
    "Компания2": { employees: ["Петр", "Елена"] }
};

// Вывод имен сотрудников для каждой компании
console.log("Имена сотрудников для каждой компании:");
for (let company in companies) {
    console.log(company + ": " + companies[company].employees.join(", "));
}
