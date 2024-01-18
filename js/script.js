// 1-misol
// let num = 1589;
// let conuter = 0;
// let birlik = num % 10;
// let unlik = ((num % 100) - (num % 10)) / 10;
// let yuz = ((num % 1000) - (num % 100)) / 100;
// let ming = (num - (num % 1000)) / 1000;

// if (birlik % 2 == 0) {
//   conuter++;
// }

// if (unlik % 2 == 0) {
//   conuter++;
// }
// if (yuz % 2 == 0) {
//   conuter++;
// }
// if (ming % 2 == 0) {
//   conuter++;
// }

// console.log(conuter);

// 2-misol

// let num = 424;
// let conuter = 0;
// let birlik = num % 10;
// let unlik = ((num % 100) - (num % 10)) / 10;
// let yuz = ((num % 1000) - (num % 100)) / 100;
// let ming = (num - (num % 1000)) / 1000;
// let res = birlik + unlik + yuz;
// if (res % 2 == 0 && res % 5 == 0) {
//   console.log(res);
// }

// 3-misol

// let num1 = 226;
// let num2 = 200;
// let num3 = 250;
// let res = 0;
// if (num1 > num2 && num1 < num3) {
//   res = num1;
// }

// if (num2 > num1 && num2 < num3) {
//   res = num2;
// }

// if (num3 > num1 && num2 > num3) {
//   res = num3;
// }

// console.log(res);

// 4-misol
// let num = +prompt("birinchi raqamni kiriting");
// let result = "sizning raqamingiz palindrom emas";
// let b = num % 10;
// let o = ((num % 100) - (num % 10)) / 10;
// let y = ((num % 1000) - (num % 100)) / 100;
// let m = (num - (num % 1000)) / 1000;

// if (b == b) {
//   result = "sizning raqamingiz palindrom";
// }

// if (o == b && num < 100) {
//   result = "sizning raqamingiz palindrom";
//   console.log(result);
// }

// if (b == y && num < 1000) {
//   result = "sizning raqamingiz palindrom";
//   console.log(result);
// }

// if (b == m && y == o && num <= 9999) {
//   result = "sizning raqamingiz palindrom";

//   console.log(result);
// }

// document.write(result);

// 5-misol
// let money = +prompt("Iltimos, pulingizni kiriting");

// let ticket = 11000.34 * 500;
// let hotel = 11000.34 * 250;
// let museum = 12354.03 * 120;

// let result = ticket + hotel + museum;

// if (money >= result) {
//   console.log("Oq yo'l");
// }

// if (money < result) {
//   console.log("Alisher aka sabr qiling");
// }

// 6-misol

// let t = +prompt("ketish uchun vaqtingizni kiriting:(Orasida:0<t<23)");
// let T = +prompt(
//   "iltimos, kechiktirish uchun vaqtingizni kiriting:(Orasida:1<=T<=1000)"
// );
// let result = T + t + ":00 vaqtga tugri keladi";
// if (t >= 0 && t <= 23) {
//   console.log("poyezdning ketish vaqti:" + result);
// }
