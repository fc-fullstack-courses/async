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

const loginRequest = new Promise((resolve, reject) => {
  // отправляем пользователя на сервер
  const userData = { login: 'login1234', password: 'test1234' };

  setTimeout(() => resolve(userData), 2000); // данные пошли на сервер // исполняет промис, аргумент становится его результатом
  // reject('error'); // отклоняет промис, аргумент становится его результатом
});

// const promise1 = promise.then(
//   (resultOfPromise) => {
//     // выполняется при исполнении промиса
//     arr.push(resultOfPromise);
//   },
//   (err) => {
//     // выполняется при отклонении промиса
//     console.log(err);
//   }
// );

const usersOnServer = new Map([
  [
    'login1234',
    {
      login: 'login1234',
      password: 'test1234',
      picSrc: 'https://asdsfdsgdsf.jpeg',
    },
  ],
]);

// на сервере мы проверяем данные про пользователя
// const response = loginRequest.then((loginData) => {
//   if (usersOnServer.has(loginData.login)) {
//     const foundUser = usersOnServer.get(loginData.login);

//     if (loginData.password === foundUser.password) {
//       // все хорошо надо вернуть пользователя
//       return foundUser;
//     }
//     throw new Error('Incorrect password');
//   }
//   throw new Error('User doesnt exist');
// });

// response.then((user) => {
//   alert('You have logged in');

// },(err) => {
//   alert(err);
// });
loginRequest
  .then((loginData) => {
    if (usersOnServer.has(loginData.login)) {
      const foundUser = usersOnServer.get(loginData.login);

      if (loginData.password === foundUser.password) {
        // все хорошо надо вернуть пользователя
        return foundUser;
      }
      throw new Error('Incorrect password');
    }
    throw new Error('User doesnt exist');
  })
  .then((user) => {
    // alert('You have logged in');

    return user;
  })
  .then((user) => {
    const res = Math.random() > 0.5;

    if (res) {
      return user;
    } else {
      throw new Error('bad luck');
    }
  })
  .catch((err) => {
    // универсальный обработчик ошибок в цепочке промисов
    console.log(err);
  })
  .finally(() => {
    // исполняется в конце цепочки вне зависимости
    // от конечного состояния промиса
    // alert('yo');
  });

const fullfilledPromise = Promise.resolve(1100); // создает исполненній промис
const rejectedPromise = Promise.reject('test'); // создает отклоненный промис

const user = {
  id: 1564651,
  name: 'Test test',
  age: 42,
  isMale: true,
  test: {
    test: 1,
  },
};

const json = JSON.stringify(user); // осуществляет сериализацию
const newUser = JSON.parse(json); // десериализация

const deepCopy = JSON.parse(JSON.stringify(user)) // глубокая копия обьекта