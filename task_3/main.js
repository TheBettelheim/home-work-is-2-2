// Объект "product"
let product = {
    name: "Смартфон",
    price: 500,
    inStock: true,
    brand: "Samsung",
    specifications: {
        screenSize: "6.2 дюйма",
        cameraResolution: "12 МП",
        storage: "128 ГБ"
    },
    discount: {
        percentage: 10,
        expirationDate: "2024-12-31"
    }
};

// Объект "customer"
let customer = {
    name: "Станислав",
    budget: 600
};

// Проверка бюджета покупателя
if (customer.budget < product.price) {
    console.log("У вас недостаточно средств для покупки.");
} else {
    // Вывод информации о покупке
    console.log(`Покупатель ${customer.name} приобрел ${product.name} ${product.brand}.`);

    // Вывод технических характеристик товара
    console.log("Технические характеристики:");
    console.log("Диагональ экрана:", product.specifications.screenSize);
    console.log("Разрешение камеры:", product.specifications.cameraResolution);
    console.log("Объем памяти:", product.specifications.storage);

    // Проверка наличия скидки и вывод информации о скидке
    if (product.discount) {
        console.log("Скидка:", product.discount.percentage + "% до " + product.discount.expirationDate);
        // Расчет и вывод цены со скидкой
        let discountedPrice = product.price - (product.price * (product.discount.percentage / 100));
        console.log("Цена со скидкой:", discountedPrice);
    } else {
        // Вывод обычной цены, если скидки нет
        console.log("Цена:", product.price);
    }
}