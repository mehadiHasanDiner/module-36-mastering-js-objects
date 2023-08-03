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

const result = kodomAli.exam();

const badamAli = {
  name: "badam",
  money: 9000,
};

const result2 = kodomAli.exam.call(badamAli);
console.log(result2);

const badamMoney = kodomAli.treatDey.call(badamAli, 400, 40);
console.log(badamMoney);
