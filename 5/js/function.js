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
//============================================

const photoDescriptions = [
  'Коллекция морских ракушек',
  'КотОстрофа',
  'Альтернативные способы заварки кофе',
  'Выходные с пользой',
  'Рыбалка в Мурманске',
  '1 мая - день шашлыков',
  'Прогулка по зимнему лесу',
  'Петербуржский минимализм',
  'Букет на 8 марта',
  'Банные процедуры',
  'Нам 1 годик',
  'Зимнее эндуро',
  'Коралловый риф и его обитатели',
  'Генератор случайных фраз',
  'Коллекция советских учебников по политической экономии',
  'Новый аквариум',
  'Массивные объекты в архитектуре Уругвая',
  'Звёздное небо',
  'Кино-вечер',
  'Мороз и солнце...',
  'Презентация нового трека',
  'Распродажа зимней резины',
  'Пополнение коллекции',
  'Сегодня ходили на волков',
  '25-й пост'
];

const commentMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const commentNames = [
  'Васисуасилий Камушкин',
  'Познер АК47',
  'Линкольн Викторович',
  'Агент трикота',
  'Рик Санчез',
  'Гари Янгмэн',
  'Мистер Бин',
  'NEO',
  'Убийца цветочной луны',
  'Гэри Гудспид',
  'Кат Матроцкин',
  'Капитан Очевидность',
  'Джесан Стэтан',
  'Леопольд',
  'Кривда Васичкин',
  'Пшек Пшекович',
  'Бобр Добр'
];

/*Функция генерации случайных чисел*/

const getRandomInt = (minInt, maxInt) => {
  const randomInt = Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
  return randomInt;
};

/*Функция генерации уникальных чисел в заданном диапазоне + проверка на уникальность*/

const getUniqueId = (minInt, maxInt) => {
  const uniqueIds = {};

  return () => {
    let uniqueId = getRandomInt(minInt, maxInt);
    if (uniqueIds[uniqueId] === true) {
      uniqueId = getRandomInt(minInt, maxInt);
    }
    uniqueIds[uniqueId] = true;

    return uniqueId;
  };
};

/*Генерация комментария*/

const commentIdMinValue = 1;
const commentIdMaxValue = 30;

const commentUniqueId = getUniqueId(commentIdMinValue, commentIdMaxValue);

const getComment = () => {
  const id = commentUniqueId();
  const avatar = `img/avatar-${getRandomInt(1, 6)}.svg`;
  const message = commentMessages[getRandomInt(0, commentMessages.length - 1)];
  const name = commentNames[getRandomInt(0, commentNames.length - 1)];

  return {
    id,
    avatar,
    message,
    name,
  };
};

/*Добавление комментариев в массив*/

const getCommentsArr = () => {
  const commentsArr = [];
  const commentsCount = getRandomInt(0, 30);
  while (commentsArr.length <= commentsCount) {
    commentsArr.push(getComment());
  }

  return commentsArr;
};

/*Генерация фото*/

const photoIdMinValue = 1;
const photoIdMaxValue = 25;
const photoUniqueId = getUniqueId(photoIdMinValue, photoIdMaxValue);

const urlIdMinValue = 1;
const urlIdMaxValue = 25;
const urlUniqueId = getUniqueId(urlIdMinValue, urlIdMaxValue);

const getPhoto = () => {

  const id = photoUniqueId();


  const url = `photos/${urlUniqueId()}.jpg`;

  const description = photoDescriptions[getRandomInt(0, photoDescriptions.length - 1)];
  const likes = getRandomInt(15, 250);
  const comments = getCommentsArr();

  return {
    id,
    url,
    description,
    likes,
    comments
  };
};

/*Добавление фотографий в массив*/

const getPhotosArr = () => {
  const photosArr = [];
  while (photosArr.length < 25) {
    photosArr.push(getPhoto());
  }

  return photosArr;
};

console.log(getPhotosArr());





