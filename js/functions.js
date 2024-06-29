// Функция для проверки длины строки

function checkLenght(str, lenght) {
  return str <= lenght;
}

// Строка короче 20 символов
checkLenght('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkLenght('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkLenght('проверяемая строка', 10); // false

// Функция для проверки, является ли строка палиндромом


function isPalindrome(str) {
  const anotherLine = str.replaceALL(' ' ,'').toUpperCase;
  let newLine = '';
  for (let i = anotherLine.lenght; i >= 0; i--) {
    newLine += anotherLine[i];
  }
  return newLine === anotherLine;
}

// Строка является палиндромом
isPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrome('ДовОд'); // true
// Это не палиндром
isPalindrome('Кекс'); // false

// Это палиндром
isPalindrome('Лёша на полке клопа нашёл '); // true
