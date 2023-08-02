//1. create object using object literals [এই দুইটা আমাদের কাজে লাগবে] object declaration
const player = {};
player.name = "Nirob";
player.specialty = "batsman";
player.bat = function () {
  console.log("swing the bat");
};
console.log(player);
player.bat();

// create objects using constructor functions [we not use this]
const student = {
  name: "Student",
  job: "study",
  ball: function () {
    console.log("throw the ball");
  },
  salary: 102000,
};

// 2. object  constructor [we rarely use  this]
const person = new Object();
// console.log(person);

// 3. object create method
// const item = Object.create(null);
const atel = Object.create(student);
console.log(atel.name);

// 4. class [এই দুইটা আমাদের কাজে লাগবে] object declaration
class Person {
  name = "John";
  address = "sodor ghute";
  constructor(age) {
    this.age = age;
  }
}

const person1 = new Person(56);
console.log(person1);

// 5. function
function Car(model, price) {
  this.model = model;
  this.price = price;
}

const tesla = new Car("elon", 32);
