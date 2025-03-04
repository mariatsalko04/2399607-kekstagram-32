// Функция для проверки длины строки

function checkLength(line, maxlength) {
  return line <= maxlength;
}

// Строка короче 20 символов
checkLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkLength('проверяемая строка', 10); // false


// Функция для проверки, является ли строка палиндромом


function isPalindrome(line) {
  const anotherLine = line.replaceALL(' ' ,'').toUpperCase;
  let newLine = '';
  for (let i = anotherLine.length; i >= 0; i--) {
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
