// 2. Получите от пользователя строку с названием марки автомобиля. Напишите конструкцию switch/case, которая будет обрабатывать 6-7 самых известных марок (BMW, Ford, Peugeot etc.) и выдавать в консоль введённую строку + страну происхождения автомобиля (например, "Ford – страна происхождения США"). Для остальных строк выдавайте сообщение "some_input – страна происхождения неизвестна".

let b = prompt('Введите марку автомобия', '');

switch (b) {
    case "BMW":
        console.log(b, '- страна происхождения Германия');
        break;
    case "Bmw":
        console.log(b, '- страна происхождения Германия');
        break;
    case "bmw":
        console.log(b, '- страна происхождения Германия');
        break;
    case "иьц":
        console.log(b, '- страна происхождения Германия');
        break;
    case "ИЬЦ":
        console.log(b, '- страна происхождения Германия');
        break;
    case "Иьц":
        console.log(b, '- страна происхождения Германия');
        break;
    case "бмв":
        console.log(b, '- страна происхождения Германия');
        break;
    case "БМВ":
        console.log(b, '- страна происхождения Германия');
        break;
    case "Бмв":
        console.log(b, '- страна происхождения Германия');
        break;

    case "Shevrolet":
        console.log(b, '- страна происхождения США');
        break;
    case "SHEVROLET":
        console.log(b, '- страна происхождения США');
        break;
    case "shevrolet":
        console.log(b, '- страна происхождения США');
        break;
    case "ЫРУМКЩДУЕ":
        console.log(b, '- страна происхождения США');
        break;
    case "ырумкщдуе":
        console.log(b, '- страна происхождения США');
        break;
    case "Ырумкщдуе":
        console.log(b, '- страна происхождения США');
        break;
    case "ШЕВРОЛЕ":
        console.log(b, '- страна происхождения США');
        break;
    case "шевроле":
        console.log(b, '- страна происхождения США');
        break;
    case "Шевроле":
        console.log(b, '- страна происхождения США');
        break;

    case "Citroen":
        console.log(b, '- страна происхождения - Франция');
        break;
    case "Сшекщут":
        console.log(b, '- страна происхождения - Франция');
        break;
    case "СШЕКЩУТ":
        console.log(b, '- страна происхождения - Франция');
        break;
    case "сшекщут":
        console.log(b, '- страна происхождения - Франция');
        break;
    case "citroen":
        console.log(b, '- страна происхождения - Франция');
        break;
    case "CITROEN":
        console.log(b, '- страна происхождения - Франция');
        break;
    case "СИТРОЕН":
        console.log(b, '- страна происхождения - Франция');
        break;
    case "ситроен":
        console.log(b, '- страна происхождения - Франция');
        break;
    case "Ситроен":
        console.log(b, '- страна происхождения - Франция');
        break;

    case "Toyota":
        console.log(b, '- страна происхождения - Япония');
        break;
    case "TOYOTA":
        console.log(b, '- страна происхождения - Япония');
        break;
    case "toyota":
        console.log(b, '- страна происхождения - Япония');
        break;
    case "ещнщеф":
        console.log(b, '- страна происхождения - Япония');
        break;
    case "Ещнщеф":
        console.log(b, '- страна происхождения - Япония');
        break;
    case "ЕЩНЩЕФ":
        console.log(b, '- страна происхождения - Япония');
        break;
    case "тойота":
        console.log(b, '- страна происхождения - Япония');
        break;
    case "ТОЙОТА":
        console.log(b, '- страна происхождения - Япония');
        break;
    case "Тойота":
        console.log(b, '- страна происхождения - Япония');
        break;

    case "Lada":
        console.log(b, '- страна происхождения - Россия');
        break;
    case "lada":
        console.log(b, '- страна происхождения - Россия');
        break;
    case "LADA":
        console.log(b, '- страна происхождения - Россия');
        break;
    case "дфвф":
        console.log(b, '- страна происхождения - Россия');
        break;
    case "Дфвф":
        console.log(b, '- страна происхождения - Россия');
        break;
    case "ДФВФ":
        console.log(b, '- страна происхождения - Россия');
        break;
    case "ЛАДА":
        console.log(b, '- страна происхождения - Россия');
        break;
    case "Лада":
        console.log(b, '- страна происхождения - Россия');
        break;
    case "лада":
        console.log(b, '- страна происхождения - Россия');
        break;

    case "Geely":
        console.log(b, '- страна происхождения - Беларусь');
        break;
    case "GEELY":
        console.log(b, '- страна происхождения - Беларусь');
        break;
    case "geely":
        console.log(b, '- страна происхождения - Беларусь');
        break;
    case "ПУУДН":
        console.log(b, '- страна происхождения - Беларусь');
        break;
    case "пуудн":
        console.log(b, '- страна происхождения - Беларусь');
        break;
    case "Пуудн":
        console.log(b, '- страна происхождения - Беларусь');
        break;
    case "Джили":
        console.log(b, '- страна происхождения - Беларусь');
        break;
    case "джили":
        console.log(b, '- страна происхождения - Беларусь');
        break;
    case "ДЖИЛИ":
        console.log(b, '- страна происхождения - Беларусь');
        break;
    default:
        console.log(b, '- страна происхождения неизвестна');
};