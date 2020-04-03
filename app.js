const generator = require('fs');
const { maleNames, femaleNames, lastNames } = require('./names');

const genders = ['male', 'female'];
const people = [];

const randChoice = arr =>
  arr[Math.floor(Math.random() * arr.length)];

const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let i = 0;
while ( i < 5 ) {
  i++;
  let gender = randChoice(genders);
  let firstName;

  gender =='male' ? 
    firstName = randChoice(maleNames) : 
    firstName = randChoice(femaleNames);

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

const randomPeople = JSON.stringify(people, null, ' ');

generator.writeFile('people.json', randomPeople, (err) => {
    if (err) throw err;
    console.log('File has been successfully generated! Check people.json');
  });