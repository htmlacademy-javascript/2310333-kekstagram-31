//Тест на переполнение формы:

function stringLength(string, maxLength) {
  return string.length <= maxLength;
}

console.log(stringLength(10, 5));


//Тест на определение полиндрома:

function isItPalindrome(string) {

  let stringNoSpaces = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      stringNoSpaces += string[i];
    }
  }

  stringNoSpaces = stringNoSpaces.toLowerCase();

  let stringNoSpacesRevert = '';

  for (let i = (stringNoSpaces.length - 1); i >= 0; i--) {
    stringNoSpacesRevert += stringNoSpaces[i];
  }

  return stringNoSpaces === stringNoSpacesRevert;
}

console.log(isItPalindrome('Анана'));


//Дополнительное задание:

function wtf(string) {

  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] != ' ') {
      let isItNumber = +string[i];
      if (Number.isInteger(isItNumber)) {
        let absoluteNumber = Math.abs(isItNumber);
        result += absoluteNumber;
      }
    }
  }

  if (result === '') {
    return NaN;
  }

  return result;

}

console.log(wtf('Сегодня 20 февраля 2024 года, за окном -2.5 градуса. Агент 007 провалил задание, т.к. yне понял как еще вернуть NaN при нечисловой строке'));

