const generator = require('fs');

const genders = ['male', 'female'];
const maleNames = ['John', 'Michael', 'Steve', 'Peter'];
const femaleNames = ['Emily', 'Mary', 'Margaret', 'Jane'];
const lastNames = ['Smith', 'Carter', 'Stalone', 'Bond'];
const people = [];

const randChoice = arr =>
  arr[Math.floor(Math.random() * arr.length)];
;

const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

for (let i = 0; i<20; i++) {
  let gender = randChoice(genders);
  let firstName;

  if (gender =='male') {
    firstName = randChoice(maleNames);
  } else if (gender == 'female') {
    firstName = randChoice(femaleNames);
  }

  let lastName = randChoice(lastNames);
  let age = randomNumber(18,78);
  let mail = firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@gmail.com';

  const identity = {
    gender: gender,
    firstName: firstName,
    lastName: lastName,
    age: age,
    mail: mail,
  };
  people.push(identity);
}

console.log(people);

const randomPeople = JSON.stringify(people);

generator.writeFile('people.json', randomPeople, (err) => {
    if (err) throw err;
    console.log('File has been successfully generated! Check people.json');
  });