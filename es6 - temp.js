// #1 - Using REST parameters:
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6

// #2 - Use spread operator:
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 = [...arr1];
console.log(arr2);

// #3 Destructuring
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const { today, tomorrow } = HIGH_TEMPERATURES;
console.log(yesterday); // should be not defined
console.log(today); // should be 77
console.log(tomorrow); // should be 80

// #4
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
console.log(yesterday) // should be not defined
console.log(highToday); // should be 77
console.log(highTomorrow); // should be 80

// #5
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
const { today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;
console.log(lowToday); // should be 64
console.log(highToday); // should be 77

// #6
let a = 8, b = 6;
[a,b] = [b,a];
console.log(a); // should be 6
console.log(b); // should be 8

// #7
