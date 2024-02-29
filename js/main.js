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

let photoDescriptions = ['Коллекция морских ракушек', 'КотОстрофа', 'Альтернативные способы заварки кофе', 'Выходные с пользой', 'Рыбалка в Мурманске', '1 мая - день шашлыков', 'Прогулка по зимнему лесу', 'Петербуржский минимализм', 'Букет на 8 марта', 'Банные процедуры', 'Нам 1 годик', 'Зимнее эндуро', 'Коралловый риф и его обитатели', 'Генератор случайных фраз', 'Коллекция советских учебников по политической экономии', 'Новый аквариум', 'Массивные объекты в архитектуре Уругвая', 'Звёздное небо', 'Кино-вечер', 'Мороз и солнце...', 'Презентация нового трека', 'Распродажа зимней резины', 'Пополнение коллекции', 'Сегодня ходили на волков', '25-й пост'];

let commentMessages = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

let commentNames = ['Васисуасилий Камушкин', 'Познер АК47', 'Линкольн Викторович', 'Агент трикота', 'Рик Санчез', 'Гари Янгмэн', 'Мистер Бин', 'NEO', 'Убийца цветочной луны', 'Гэри Гудспид', 'Кат Матроцкин', 'Капитан Очевидность', 'Джесан Стэтан', 'Леопольд', 'Кривда Васичкин', 'Пшек Пшекович', 'Бобр Добр'];

let photoInfo = {
  id: 0,
  url: '',
  description: '',
  likes: 0,
  comments: [],
};

let commentInfo = {
  id: 0,
  avatar: '',
  message: '',
  name: '',
};

let photosInfo = [];

/*Создаём функцию, отвечающую за создание случайных чисел*/

function getRandomInt (minInt, maxInt) {
  let randomInt = Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
  return randomInt;
}

/*Генерируем объекты для "comments". Определяем количество комментариев (1 или 2). В случае 2 комментариев осуществляем проверку, чтобы комментарии не повторялись.*/

function getCommentInfo() {
  commentInfo.id = getRandomInt(1, Number.MAX_SAFE_INTEGER);
  commentInfo.avatar = `img/avatar-${getRandomInt(1, 6)}.svg`;

  let commentCount = getRandomInt(0, 2);
  if (commentCount === 1) {
    commentInfo.message = commentMessages[getRandomInt(0, commentMessages.length - 1)];
  } else {
    let doubleComment = commentMessages[getRandomInt(0, commentMessages.length - 1)];
    commentInfo.message = commentMessages[getRandomInt(0, commentMessages.length - 1)];
    while (commentInfo.message === doubleComment) {
      doubleComment = commentMessages[getRandomInt(0, commentMessages.length - 1)];
    }
    commentInfo.message += ' ' + doubleComment;
  }

  commentInfo.name = commentNames[getRandomInt(0, commentMessages.length - 1)];

  return commentInfo;
}

/*
Создаём массив с комментариями:
  1. Добавляем в массив comments случайное число объектов 0-30.
  2. Присваиваем переменной "currentComment" вызов функции "getCommentInfo", генерируя новый объект.
  3. Перебираем массив с объектами, создавая новый массив, состоящий исключительно из id объектов. Далее перебираем полученный массив на предмет совпадения имеющихся id с id у объекта "currentComment".
*/

function addCommentInfoToPhotoInfo() {
  let commentsArr = photoInfo.comments;
  let commentsCount = getRandomInt(0, 30);

  while (commentsArr.length <= commentsCount) {
    let currentComment = getCommentInfo();

    let commentsArrId = [];
    commentsArr.forEach((element) => {
      commentsArrId.push(element.id);
    });

    //Проверка ниже работает не так как надо. Вместо разных id всем присваиваются одинаковые.
    while (commentsArrId.includes(currentComment.id)) {
      currentComment = getCommentInfo();
    }
    commentsArr.push(currentComment);
  };

  return photoInfo.comments;
}

/*Генерируем объект с информацией о фотографии "photoInfo"*/

function getPhotoInfo () {
  photoInfo.id = getRandomInt(1, 25);
  photoInfo.url = `photos/${getRandomInt(1, 25)}.jpg`;
  photoInfo.description = photoDescriptions[getRandomInt(0, photoDescriptions.length - 1)];
  photoInfo.likes = getRandomInt(15, 250);
  photoInfo.comments = addCommentInfoToPhotoInfo();

  return photoInfo;
}

/*Генериурем массив с фотографиями, описанными в виде объектов*/

function addPhotoInfoToArray (photoCounts) {
  let photoArr = [];

  while (photoArr.lenth <= photoCounts) {
    let currentPhoto = getPhotoInfo();

    let photoArrId = [];
    let photoArrUrl = [];
    photoArr.forEach((element) => {
      photoArrId.push(element.id);
    });
    photoArr.forEach((element) => {
      photoArrUrl.push(element.url);
    });

    while (photoArrId.includes(currentPhoto.id) && photoArrUrl.includes(currentPhoto.url)) {
      currentPhoto = getPhotoInfo();
    }
    photoArr.push(currentPhoto);
  }

//Возвращает пустой массив. почему?
  return photoArr;
}

console.log(getCommentInfo());
console.log(addCommentInfoToPhotoInfo());
console.log(getPhotoInfo ());
console.log(addPhotoInfoToArray(25));

