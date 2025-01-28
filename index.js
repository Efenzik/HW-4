"use strict";
// 1=============

const firstField = prompt("Перший текст :");
const secondField = prompt("Другий текст :");

if (firstField && secondField) {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

// 2=============

const firstNumber = Number(prompt("Перше число :"));
const secondNumber = Number(prompt("Друге число :"));

let sum = firstNumber + secondNumber;

if (sum > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}
// 3=============

const promptText = prompt("Введіть текст :");

if (promptText.includes("JavaScript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}
// 4=============

const promptNumber = Number(prompt("Введіть ваше число :"));

if (promptNumber >= 10 && promptNumber <= 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}
// 5=============

const userName = prompt("Введіть ваше ім'я :");
const userEmail = prompt("Введіть ваш gmail :");
const userPassword = prompt("Введіть ваш пароль :");

if (
  userName.length >= 3 &&
  userEmail.includes("@") &&
  userEmail.includes(".") &&
  userPassword.length >= 6
) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка: неправильне заповнення");
}
