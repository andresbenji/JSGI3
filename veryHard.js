//constructor with three properties
const Person = (name, job, age) => {
  this.name = name;
  this.job = job;
  this.age = age;
};

Person.prototype.exercise = () =>
  console.log("Olympic Weightlifting is elite!!");

Person.prototype.fetchJob = () => console.log(`${this.name} is a ${this.job}`);

const Programmer = (name, job, age, languages) => {
  Person.call(this, name, job, age);
  this.languages = languages;
  this.busy = true;
};

Programming.prototype = Object.create(Person.prototype);
Programming.prototype.constructor = Programmer;

Programmer.prototype.completeTask = () => (this.busy = false);

Programmer.prototype.acceptNewTask = () => (this.busy = true);

Programmer.prototype.offerNewTask = () => {
  if (this.busy) {
    console.log(`${this.name} can't accpet any new tasks right now.`);
  } else {
    console.log(`${this.name} would love to take on a new responsibility`);
  }
};

Programmer.prototype.learnLanguage = function (language) {
  this.languages.push(language);
};

Programmer.prototype.listLanguages = function () {
  console.log(`${this.name} knows ${this.languages.join(", ")}`);
};

// create a new Programmer
var john = new Programmer("John", "Web Developer", 25, [
  "HTML",
  "CSS",
  "JavaScript",
]);
