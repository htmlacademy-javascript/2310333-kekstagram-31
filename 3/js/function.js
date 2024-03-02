//Тест на переполнение формы:

/*function stringLength(string, maxLength) {
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

console.log(wtf('Сегодня 20 февраля 2024 года, за окном -2.5 градуса. Агент 007 провалил задание, т.к. не понял как по-другому вернуть NaN при нечисловой строке'));


//Вариант решения задания с тренажёра:

let qualificationDistance = 200;
let attempts = [120, 150, 160, 201, 203, 180, 202];
let qualified = false;
let averageBest = 0;
let attemptQuantitys = 3;


for (let i = 0; i <= attempts.length - 2; i++) {
  let bestAttempt = attempts[i];

  for (let j = i + 1; j <= attempts.length - 1; j++){
    if (bestAttempt > attempts[j]) {
      bestAttempt = attempts[j];
      let swap = attempts[i];
      attempts[i] = bestAttempt;
      attempts[j] = swap;
    }
  }
}

console.log(attempts);

let attemptsSum = 0;

for (let i = 1; i <= attemptQuantitys; i++) {
  attemptsSum += attempts[attempts.length - i]
}

averageBest = attemptsSum / attemptQuantitys;

if (averageBest > qualificationDistance) {
  qualified = true;
}
*/

const Ids = {};

Ids[1] = true;

console.log(Ids);
