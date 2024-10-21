//------Вывод в консоль CTRL + /--------
// console.log("Hello from JS") 


//--------Переменные--------
// let userName = 'Марк';
// console.log(userName);


// -----------Типы переменных---------

// Новый стандарт ES6:
// let - перменная
// const - постоянная

// Старый стандарт ES5:
// var - перменная


// -----------let - может менять значение во время работы программы-------
// let userName = 'Марк';
// console.log(userName);

// userName = "Егор";
// console.log(userName);

// ---------const -не может менять значение --------
// const yearOfBirth = 1990;
// //yearOfBirth = 2000; - Ошибка!!!
// console.log(yearOfBirth);
// /* -------------*/
// -------Можно--------
// // let name,age;

// // name = 'Yuri';

// --------Ошибка--------
// const profession;
//  profession = "JS developer";


// --------var -тоже самое что и let ,только в старом формате---------
// var city = 'Moscow';
// city = 'Minsk';
// city = 'Kiev';
// console.log(city);

/*-----Функциональный образ видимости-------*/
// function sum(){
//     var name = 'Yuri'
//     console.log(userName);
// }

// sum();
// console.log(userName);


// {
//     let userName = 'Bob';
//     console.log(userName);

//     var usomName = '10';
//     console.log(usomName);
// }

//  console.log(userName);
// console.log(usomName);


//==========Типы данных========
// let userName = 'Марк';//Строка (Текст)(Одно слово, фраза,предложение,абзац, хоть целая книга)
// let age = 30 ;//Число
// let isMarried = true; // Логическое значение true/false


// //Динамическая типизация

// let someVariable = 'Some value'; //сейчас someVariable типа String
// someVariable = 50;//сейчас someVariable типа number
// someVariable = true;//сейчас someVariable типа Boolean


// //Плохой пример неминга
// let u = 'Bob';
// console.log(u);

// //Хороший пример нейминга
// let userName = 'Jame';
// console.log(userName);

//==Значение null
//<<ничего>>,<<пусто>> или <<значение неизвестного>>.
// let age = 32;
// age = null;


// ==Значение undefined
// //Означает что значение не было присвоено 
// let userName;
// console.log(userName);

// let someName = 'James';
// someName = undefined; //так не делают!!
// someName = null;//делают так 


//Оператор typeof

// const someName = 'Bob';
// console.log(typeof someName); -определение типа значения


//BigInt
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(54787272983745894758947258743647389493434n) - помогает работать с большими числами , не может быть смешан с другими числами


//Symbol
//Симбол - это уникальное примитивное значение