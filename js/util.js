/*Функция генерации случайных чисел*/

const getRandomInt = function (minInt, maxInt) {
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

export { getRandomInt, getUniqueId };
