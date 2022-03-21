'use strict';

/*function calcAge(birthyear) {
  const age = 2037 - birthyear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName} Your age ${age} and you was born in ${birthyear}`;
    console.log(output);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      //Creating NEW variable with same name as outher scope's variable
      const firstName = 'Steven';

      //Reassigning outher scope's variable
      output = 'NEW OUTPUT';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }

    console.log(millenial);
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);

//Variables

console.log(me);
//console.log(job);
//console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//functions
console.log(addDec(3, 2));
//console.log(addExpr(3, 2));
//console.log(addArrow(3, 2));
function addDec(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

//example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

//console.log(this);

/*const calcAge = function (birthyear) {
  console.log(2037 - birthyear);
  //console.log(this);
};
calcAge(1991);
const calcAgeArrow = birthyear => {
  console.log(2037 - birthyear);
 // console.log(this);
};
calcAge(1980);
const jonas = {
  year: 1980,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;*/

const jonas = {
  firstName: 'Jonas',
  year: 1995,
  calcAge: function () {
    //console.log(this);
    // console.log(2037 - this.year);

    //Solution 1
    /*const self = this;
    const isMillenial = function () {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };*/

    //Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    //console.log(this);
    // console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();
// Argument keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(3, 5);

//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('After marriage:', marriedJessica);
console.log('Before marriage:', jessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Aice', 'Bob'],
};

const copyObject = Object.assign({}, jessica2);
copyObject.lastName = 'Davis';
copyObject.family.push('Mary');
copyObject.family.push('John');
console.log('Before marriage:', jessica2);
console.log('After marriage:', copyObject);
