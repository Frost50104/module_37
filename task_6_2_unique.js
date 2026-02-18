// Задание 6.2 - Уникальные значения массива

const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know'];

// Способ 1: Использование Set
const uniqueArr = [...new Set(arr)];

console.log(uniqueArr);
// Вывод: [1, 2, 3, 5, 4, 'they', 'don't', 'know', 'that', 'we']
