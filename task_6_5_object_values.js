// Задание 6.5 - Извлечение всех значений из объекта

const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const arrValues = [];

// Проходим по всем ключам объекта
for (let key in obj) {
    const value = obj[key];

    // Если значение - массив, добавляем каждый элемент
    if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            arrValues.push(value[i]);
        }
    } else {
        // Если не массив, добавляем само значение
        arrValues.push(value);
    }
}

console.log(arrValues);
// Вывод: ["some", "text", 1, 2, 3, 4, 5, "there"]
