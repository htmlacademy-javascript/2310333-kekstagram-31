import { getRandomInt, getUniqueId } from './util.js';


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
  while (commentsArr.length < commentsCount) {
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

export { getPhotosArr };
