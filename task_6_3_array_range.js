// Задание 6.3 - Создание массива от 0 до введённого числа

// Для Node.js используем readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Введите число: ', (answer) => {
    const num = Number(answer);

    // Создаём массив от 0 до num
    const arr = [];
    for (let i = 0; i <= num; i++) {
        arr.push(i);
    }

    console.log(arr);
    rl.close();
});

// Альтернативный вариант для браузера (закомментирован):
// const userInput = prompt('Введите число:');
// const num = Number(userInput);
// const arr = [];
// for (let i = 0; i <= num; i++) {
//     arr.push(i);
// }
// console.log(arr);
