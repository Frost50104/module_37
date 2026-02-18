// Задание 6.1 - Проверка палиндрома

function checkPalindrome(word) {
    // Приводим к нижнему регистру и убираем пробелы
    const normalized = word.toLowerCase().replace(/\s/g, '');
    // Переворачиваем строку
    const reversed = normalized.split('').reverse().join('');

    // Сравниваем
    if (normalized === reversed) {
        console.log(`Слово ${word} является палиндромом`);
    } else {
        console.log(`Слово ${word} не является палиндромом`);
    }
}

// Примеры использования
checkPalindrome('Довод');
checkPalindrome('Сантимент');
checkPalindrome('А роза упала на лапу Азора');
