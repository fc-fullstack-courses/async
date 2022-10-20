const btn = document.querySelector('#btn');

// setTimeout(function callback() {
//   console.log('timeout 1');
// }, 100); // 3
// setTimeout(function callback() {
//   console.log('timeout 2');
// }, 500); // 4
// setTimeout(function callback() {
//   console.log('timeout 3');
// }, 20); // 2
// setTimeout(function callback() {
//   console.log('timeout 4');
// }, 0); // 1

// const id = setTimeout(
//   (value) => {
//     console.log(value);
//   },
//   100,
//   'test'
// );

// setTimeout(() => {
//   clearTimeout(id); // очищает таймаут
// }, 0);
const time = document.getElementById('time');
const intervalId = setInterval(() => {
  time.textContent = new Date();
}, 1000);

// setTimeout(() => {
//   console.log('long');
// }, 20000);

// console.time('loop timer');
// for (let i = 0; i < 5000000000; i++) {
//   let j = 0;
//   j++;
// }
// console.timeEnd('loop timer');

/*
  Написать код на setTimeout или на setInterval
  который раз в 100 милисекунд будет выводить в консоль числа
  от 1 до 20
  setInterval -> if + clearInterval
  setTimeout -> recursion + if
*/

// function countInterval() {
//   let counter = 1;

//   const id = setInterval(() => {
//     console.log(counter);
//     counter++;
//     if (counter > 20) {
//       clearInterval(id);
//      console.timeEnd('interval');
//     }
//   }, 100);
// }

// console.time('interval');
// countInterval();

// function countTimeout(counter = 1) {
//   if (counter <= 20) {
//     setTimeout(() => {
//       console.log(counter++);
//       countTimeout(counter);
//     }, 100);
//   } else {
//     console.timeEnd('timeout');
//   }
// }

// console.time('timeout');
// countTimeout();

// setTimeout(() => {
//   console.log('1');

//   setTimeout(() => {
//     console.log('2');

//     setTimeout(() => {
//       console.log('3');

//       setTimeout(() => {
//         console.log('4');

//       }, 6000);
//     }, 3000);
//   }, 3000);
// }, 5000);

const promise = new Promise((resolve, reject) => {
  // setTimeout(() => {
    resolve(42); // исполняет промис, аргумент становится его результатом
  // }, 10000);

  reject('error') // отклоняет промис, аргумент становится его результатом
});

const promise1 = promise.then((value) => {
  // выполняется при исполнении промиса
  console.log(value);
},(err) => {
  // выполняется при отклонении промиса
  console.log(err);
});
