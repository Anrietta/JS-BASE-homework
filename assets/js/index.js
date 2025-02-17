// Завдання на змінні:



// 1) Створіть дві змінні a  та b, присвойте їм довільні числові значення. Виведіть у консоль результат їх множення.

const a = 5;
const b = 3;
// console.log(a*b);
const sum = a * b;
console.log(sum);

// 2) Створіть дві змінні c  та d, присвойте їм довільні числові значення. Виведіть у консоль результат ділення першого на друге.

const c = 15;
const d = 3;
// console.log(15 / 3);
const sum2 = c / d;
console.log(sum2);

// 3) Створіть дві змінні e  та f, присвойте їм довільні значення. Виведіть у консоль результат їхньої суми

const e = 25;
const f = 25;
const sum3 = e + f;
console.log(sum3);

// 4) Визначте змінні зі значеннями 11, true, "java script", "100"  і виведіть їх в консоль

const a1 = 11;
const a2 = true;
const a3 = 'java script';
const a4 = '100';
console.log(a1, a2, a3, a4);

// 5) Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --

// let num = 1;
// num = num + 11;
// num = num – 11;
// num = num * 11;
// num = num / 11;
// num = num + 1;
// num = num – 1;

let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num++;
num--;
console.log(num);




// Завдання на введення/виведення (вводити з допомогою prompt, виводити з допомогою alert):



// 1) Запитати число у користувача, піднести його до квадрату і вивести результат.

const q1 = +prompt('Enter a number:');
const q2 = Math.pow(q1, 2);
console.log(q2);

// 2) Вивести середнє арифметичне двох чисел. Числа запитувати у користувача.

const q3 = +prompt('Enter the first number:');
const q4 = +prompt('Enter the second number');
const res = (q3 + q4) / 2;
console.log(res);

// 3) Перевести кількість хвилин на секунди та вивести результат. Число хвилин запитувати у користувача. 

const min = +prompt('Enter minutes quantity:');
const sec = min * 60;
console.log(sec);

// 4) Створіть змінну greeting зі значенням 'Hello,' і оголосіть змінну userName. Запитайте ім'я користувача та внесіть це значення у змінну userName. Виведіть повідомлення з привітанням, наприклад, 'Hello, Alex!' (згадайте про конкатенацію)

const greeting = 'Hello, dear ';
const userName = prompt('Enter your name:');
const greatingRes = greeting + userName + '!';
console.log(greatingRes);