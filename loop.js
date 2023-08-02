const numbers = [12, 34, 35, 36, 37, 38, 39];
for (const number of numbers) {
  //   console.log(number);
}

const bottle = { color: "black", price: 50, isCleaned: true, capacity: 1 };
const keys = Object.keys(bottle);
// console.log(keys);
for (key of keys) {
  //   console.log(key);
}

// // 3 ways to read object properties
// bottle.color;
// bottle["color"];
// bottle[key];

// এটা আমরা ইউজ করব না
for (const key of keys) {
  const propertyValue = bottle[key];
  //   console.log(key, propertyValue);
}

// এটা আমরা ইউজ করব
for (const key in bottle) {
  const propertyValue = bottle[key];
  //   console.log(key, propertyValue);
}

// advanced
const pair = Object.entries(bottle);
// console.log(pair);
for (const [key, value] of pair) {
  console.log(key, value);
}
