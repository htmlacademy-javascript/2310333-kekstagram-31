/*
1. Сгенерировать объект типа photoInfo:
  1.1 Случайный id (число) в диапазоне 1-25 без повторений;
  1.2 Адрес картинки 'photos/' + id + '.jpg' (строка), где id (1-25) без повторений;
  1.3 Описание (строка). Массив с описаниями???;
  1.4 Лайки (число) 15-250.
  1.5 Комментарий (массив объектов), количество объектов в массиве 0-30:
    1.5.1 id (число) - случайное число;
    1.5.2 Аватар (строка) - 'img/avatar-' + id +'.svg', где id (1-6);
    1.5.3 Сам комментарий (строка). Массив с комментариями;
    1.5.4 Имя автора (строка). Массив с именами.
2. Добавить сгенерированный объект в массив типа photosInfo.
3. Повторить ещё 24 раза.

ВАЖНО! Не должны повторяться ID объектов (фото, комментарии) и URL фотографий.
*/

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

function getRandomInt (minInt, maxInt) {
  const randomInt = Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
  return randomInt;
}

/*Создание и проверка id комментария.*/

const commentIds = {};

function getUniqueCommentId() {
  let id = getRandomInt(1, Number.MAX_SAFE_INTEGER);
  if (commentIds[id] === true) {
    id = getRandomInt(1, Number.MAX_SAFE_INTEGER);
  }
  commentIds[id] = true;

  return id;
}

/*Генерация комментария*/

function getComment() {
  const id = getUniqueCommentId();
  const avatar = `img/avatar-${getRandomInt(1, 6)}.svg`;
  const message = commentMessages[getRandomInt(0, commentMessages.length - 1)];
  const name = commentNames[getRandomInt(0, commentNames.length - 1)];

  return {
    id,
    avatar,
    message,
    name,
  };
}

/*Добавление комментариев в массив*/

function getCommentsArr() {
  const commentsArr = [];
  const commentsCount = getRandomInt(0, 30);
  while (commentsArr.length <= commentsCount) {
    commentsArr.push(getComment());
  }

  return commentsArr;
}

/*Создание и проверка id фотографии*/

const photoIds = {};

function getUniquePhotoId() {
  let id = getRandomInt(1, 25);
  if (photoIds[id] === true) {
    id = getRandomInt(1, 25);
  }
  photoIds[id] = true;

  return id;
}

/*Создание и проверка url фотографии*/

const photoUrls = {};

function getUniquePhotoUrl() {
  let id = getRandomInt(1, 25);
  if (photoUrls[id] === true) {
    id = getRandomInt(1, 25);
  }
  photoUrls[id] = true;

  return id;
}

/*Генерация фото*/

function getPhoto() {
  const id = getUniquePhotoId();
  const url = `photos/${getUniquePhotoUrl()}.jpg`;
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
}

/*Добавление фотографий в массив*/

function getPhotosArr() {
  const photosArr = [];
  while (photosArr.length < 25) {
    photosArr.push(getPhoto());
  }

  return photosArr;
}

console.log(getPhotosArr());
