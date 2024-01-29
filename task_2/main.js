let temperature = prompt("Введите текущую температуру:");
if (temperature >30) {
    console.log("Вы можете надеть легкую одежду")
} else if (temperature >20) {
    console.log("Нужно надеть теплую одежду")
} else if (temperature <=20) {
    console.log("Сегодня холодно и нужно надеть зимнюю одежду")
} else {
    console.log("Температура в пределах нормы.")
}