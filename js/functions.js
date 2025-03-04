// Функция для проверки длины строки

function checkStringLength(string, maxLength) {
  return string <= maxLength;
}

// Строка короче 20 символов
checkStringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkStringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkStringLength('проверяемая строка', 10); // false


// Функция для проверки, является ли строка палиндромом


function isPalindrome(string) {
  const cleaned = string.toUpperCase().replaceAll(' ', '');
  let reversed = '';

  for (let i = string.maxLength - 1; i >= 0; i--) {
    reversed = reversed + string[i];
  }

  return string === reversed;
}

// Строка является палиндромом
isPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrome('ДовОд'); // true
// Это не палиндром
isPalindrome('Кекс');  // false

// Это палиндром
isPalindrome('Лёша на полке клопа нашёл '); // true
