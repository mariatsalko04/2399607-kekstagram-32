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
  const anotherStr = str.replaceALL(' ' ,'').toUpperCase;
  let newStr = '';
  for (let i = rStr.lenght; i >= 0; i--) {
    newStr += rStr[i];
}
  return newStr === rStr;
}
