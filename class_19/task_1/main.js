// 1
let a = prompt('Введите номер квартиры','');

if ( a < 1 || a > 100 || a % 1 !=0) {
    console.log("Такой квартиры не существует");
} else if (a > 0 & a < 21) {
    console.log("Подъезд № 1");}
     else if (a > 20 & a < 41) {
         console.log("Подъезд № 2");}
          else if (a > 40 & a < 61) {
              console.log("Подъезд № 3");}
               else if (a > 60 & a < 81) {
                   console.log("Подъезд № 4");}
                    else if (a > 80 & a < 101) {console.log("Подъезд № 5");};
// 2
let b = prompt('Введите марку автомобия','');

switch (b) {
case "BMW": console.log(b, '- страна происхождения Германия');
break;
case "Bmw": console.log(b, '- страна происхождения Германия');
break;
case "bmw": console.log(b, '- страна происхождения Германия');
break;
case "иьц": console.log(b, '- страна происхождения Германия');
break;
case "ИЬЦ": console.log(b, '- страна происхождения Германия');
break;
case "Иьц": console.log(b, '- страна происхождения Германия');
break;
case "бмв": console.log(b, '- страна происхождения Германия');
break;
case "БМВ": console.log(b, '- страна происхождения Германия');
break;
case "Бмв": console.log(b, '- страна происхождения Германия');
break;

case "Shevrolet": console.log(b, '- страна происхождения США');
break;
case "SHEVROLET": console.log(b, '- страна происхождения США');
break;
case "shevrolet": console.log(b, '- страна происхождения США');
break;
case "ЫРУМКЩДУЕ": console.log(b, '- страна происхождения США');
break;
case "ырумкщдуе": console.log(b, '- страна происхождения США');
break;
case "Ырумкщдуе": console.log(b, '- страна происхождения США');
break;
case "ШЕВРОЛЕ": console.log(b, '- страна происхождения США');
break;
case "шевроле": console.log(b, '- страна происхождения США');
break;
case "Шевроле": console.log(b, '- страна происхождения США');
break;

case "Citroen": console.log(b, '- страна происхождения - Франция');
break;
case "Сшекщут": console.log(b, '- страна происхождения - Франция');
break;
case "СШЕКЩУТ": console.log(b, '- страна происхождения - Франция');
break;
case "сшекщут": console.log(b, '- страна происхождения - Франция');
break;
case "citroen": console.log(b, '- страна происхождения - Франция');
break;
case "CITROEN": console.log(b, '- страна происхождения - Франция');
break;
case "СИТРОЕН": console.log(b, '- страна происхождения - Франция');
break;
case "ситроен": console.log(b, '- страна происхождения - Франция');
break;
case "Ситроен": console.log(b, '- страна происхождения - Франция');
break;

case "Toyota": console.log(b, '- страна происхождения - Япония');
break;
case "TOYOTA": console.log(b, '- страна происхождения - Япония');
break;
case "toyota": console.log(b, '- страна происхождения - Япония');
break;
case "ещнщеф": console.log(b, '- страна происхождения - Япония');
break;
case "Ещнщеф": console.log(b, '- страна происхождения - Япония');
break;
case "ЕЩНЩЕФ": console.log(b, '- страна происхождения - Япония');
break;
case "тойота": console.log(b, '- страна происхождения - Япония');
break;
case "ТОЙОТА": console.log(b, '- страна происхождения - Япония');
break;
case "Тойота": console.log(b, '- страна происхождения - Япония');
break;

case "Lada": console.log(b, '- страна происхождения - Россия');
break;
case "lada": console.log(b, '- страна происхождения - Россия');
break;
case "LADA": console.log(b, '- страна происхождения - Россия');
break;
case "дфвф": console.log(b, '- страна происхождения - Россия');
break;
case "Дфвф": console.log(b, '- страна происхождения - Россия');
break;
case "ДФВФ": console.log(b, '- страна происхождения - Россия');
break;
case "ЛАДА": console.log(b, '- страна происхождения - Россия');
break;
case "Лада": console.log(b, '- страна происхождения - Россия');
break;
case "лада": console.log(b, '- страна происхождения - Россия');
break;

case "Geely": console.log(b, '- страна происхождения - Беларусь');
break;
case "GEELY": console.log(b, '- страна происхождения - Беларусь');
break;
case "geely": console.log(b, '- страна происхождения - Беларусь');
break;
case "ПУУДН": console.log(b, '- страна происхождения - Беларусь');
break;
case "пуудн": console.log(b, '- страна происхождения - Беларусь');
break;
case "Пуудн": console.log(b, '- страна происхождения - Беларусь');
break;
case "Джили": console.log(b, '- страна происхождения - Беларусь');
break;
case "джили": console.log(b, '- страна происхождения - Беларусь');
break;
case "ДЖИЛИ": console.log(b, '- страна происхождения - Беларусь');
break;
default: console.log(b
    , '- страна происхождения неизвестна');
};
// 3
let c = prompt('Введите год','');
(c % 4 != 0 || c < 0) ? console.log(c, 'не является високосным годом') : console.log(c,'является високосным годом');
// 4
let d = prompt('Введите число от 1 до 20', '');
e = 0;
if (d >= 0 && d <= 20) do {console.log(d, 'Х', e, '=', (d * e));
e++;}
while (e < 11) else {console.log("Неверное число");}
// 5
let sum = 0;
let i = 0;
while (i < 50) {
    i ++;
    if (i % 2 === 0) {continue;}
    sum += i
}; 
console.log(sum);
// 6
let r = 0;
s = 1;
for (n = 0; n < 15; n ++)
{t = s;
s  = r + s;
r = t;
console.log(s)};
// 7
for (let v = 0;v < 4;v ++)
{console.log(" # # # #\n# # # # ")};
