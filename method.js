const student = {
  name: "kodom ali",
  money: 5000,
  study: "Math",
  subjects: ["calculus", "algebra", "geometry"],
  exam: function () {
    return this.name, "is participating in the exam";
  },
  improveExam: function (subject) {
    this.exam();
    return `${this.name} is taking part in the exam on ${subject}`;
  },
  treatDey: function (amount, tips) {
    this.money = this.money - amount - tips;
    return this.money;
  },
};

const output = student.exam();
console.log(output);

const reExam = student.improveExam("Algebra");
console.log(reExam);

const remaining = student.treatDey(900, 100);
console.log(remaining);
const dolaRemaining = student.treatDey(500, 50);
console.log(dolaRemaining);
