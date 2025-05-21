const reviews = [
    "Вызвал Виктора на шумных соседей. Соседей больше нет, рекомендую!",
    "Тараканы сбежали, соседи тоже! Не ожидал такой бонус!",
    "После обработки мыши начали переезжать к конкурентам. Отличная работа!",
    "Виктор избавил меня от тараканов, а потом помог разобраться с налоговой! Мастер на все руки!",
    "Позвонил для дезинфекции, а в итоге получил консультацию по жизни. Теперь я успешный человек!"
];

function getRandomReview() {
    return reviews[Math.floor(Math.random() * reviews.length)];
}

function updateReview() {
    document.getElementById("review-container").innerHTML = `<p>${getRandomReview()}</p>`;
}

setInterval(updateReview, 5000);
updateReview();

