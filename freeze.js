// freeze, seal, entries, keys, values সম্পর্কে ধারনা

const bottle = { color: "black", price: 50, isCleaned: true, capacity: 1 };
// for only keys
// keys প্রোপাটির নাম গুলো আমাদেরকে দেয়

const keys = Object.keys(bottle);
console.log(keys);
// for only values
// values প্রোপাটি এর মানগুলো আমাদেরকে দেয়
const values = Object.values(bottle);
console.log(values);

// for both keys and values
const pair = Object.entries(bottle);
console.log(pair);
const twoDimensionalArray = [
  ["color", "black"],
  ["price", 50],
  ["isCleaned", true],
  ["capacity", 1],
];

// console.log(bottle);
// Object.seal(bottle);
// console.log(bottle);
Object.freeze(bottle);
console.log(bottle);
delete bottle.isCleaned;
bottle.price = 200;
bottle.height = 12;
console.log(bottle);
