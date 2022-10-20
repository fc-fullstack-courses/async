const btn = document.querySelector('#btn');

setTimeout(function callback() {
  console.log('timeout 1');
}, 100); // 3
setTimeout(function callback() {
  console.log('timeout 2');
}, 500); // 4
setTimeout(function callback() {
  console.log('timeout 3');
}, 20); // 2
setTimeout(function callback() {
  console.log('timeout 4');
}, 0); // 1

// console.time('loop timer');
// for (let i = 0; i < 5000000000; i++) {
//   let j = 0;
//   j++;
// }
// console.timeEnd('loop timer');
