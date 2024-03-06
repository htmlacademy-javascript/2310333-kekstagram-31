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


//========== MODULE5-TASK2 ==============

const getTimePerHour = (time) => {
  const timeArr = time.split(':');
  timeArr[1] = timeArr[1] / 60;
  const timePerHour = timeArr.reduce((accumulator, currentValue) => accumulator + +currentValue,0);
  return timePerHour;
};

const eventsPossibility = (startTime, endTime, startEventTime, iventDuration) => {
  const startTimePerHour = getTimePerHour(startTime);
  const endTimePerHour = getTimePerHour(endTime);
  const startEventTimePerHour = getTimePerHour(startEventTime);
  const endEventTimePerHour = startEventTimePerHour + iventDuration / 60;

  if (startTimePerHour <= startEventTimePerHour && endTimePerHour >= endEventTimePerHour) {
    return true;
  }
  return false;
};

console.log(eventsPossibility('08:00', '17:30', '14:00', 90));
console.log(eventsPossibility('8:0', '10:0', '8:0', 120));
console.log(eventsPossibility('08:00', '14:30', '14:00', 90));
console.log(eventsPossibility('14:00', '17:30', '08:0', 90));
console.log(eventsPossibility('8:00', '17:30', '08:00', 900));
