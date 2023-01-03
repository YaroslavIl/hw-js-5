
// 1) Створити функцію конструктор яка створює обєкт юзер(з даними імя, прізвище, вік, також в юзера повинен бути унікальний іd номер від 1 до 10) в функції конструкторі повиний бути метод виводу інформації про юзера.
// Метод повинен бути винесений в прототип.



let id = 0;


function User(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    id++;
    if (id == 10) {
        alert('Група повна')
    };
};
User.prototype.info = function () {
    return (` ID ${id}. Інформація про людину ${this.name} ${this.surname} ${this.age} `);
};

let a = new User('Wivaldy', 'Vatson', 29);
console.log(a.info());
let q = new User('Stiv', 'Jops', 50);
console.log(q.info());
let e = new User('Silin', 'Gomez', 10);
console.log(e.info());


// 2)Створити методи на прототайп для оновлення ключів обєкту юзер наприклад змінити імя, вік користувача.ІD не міняється

User.prototype.changeName = function (name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
};

q.changeName('Gosha', 'Rudenko', 100)
console.log(q);




// 3) Створити функцію конструктор створення(прямокутника, квадрата) в прототип винести методи обчислення Площі, переметра, та визначення діагоналі

function Figure(height, width) {
    this.height = height;
    this.width = width;
}
Figure.prototype.square = function () {
    return `Площа : ${this.height * this.width}`
};
Figure.prototype.perimeter = function () {
    return ` Периметр : ${2 * this.height + 2 * this.width}`
};
Figure.prototype.diagonals = function () {
    return ` Діагональ : ${Math.sqrt(Math.pow(this.height, 2) + Math.pow(this.width, 2))}`
};

let newFigure = new Figure(2, 4);
console.log(newFigure. square());
console.log(newFigure.perimeter());
console.log(newFigure.diagonals());


// 4) Отримати від користувача значення name  вивести в консоль, першу і останню літеру з name в ерхньому регістрі.


let userWords = prompt('Вкажить слово');

function cuttingWords(variable) {
    let upCase = variable.toUpperCase()
    console.log(`${upCase.slice(0, 1)}....${upCase.slice(-1,)}`);
}
cuttingWords(userWords);



// 5) Створити функцію яка отримує стрінг, обрізає пробіли спочатку і кінця стрінгу, якщо стрінг маж довжину більше 10 то відрізає все після 10 і додає 3 крапки

let textTest = '   Доброго дня друзі   '

function stringValidation(str) {
    let text = str.trim();
    if (text.length > 10) {
        console.log(`${text.slice(0, 10)} ...`);
    }
}
stringValidation(textTest);

