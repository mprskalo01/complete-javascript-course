'use strict';

// Constructor Functions and the new Operator
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this - Never create a method using a constructor function
  // this.calcAge = function () {
  //   return 2024 - this.birthYear;
  // };
};

const mario = new Person('Mario', 2001);
// console.log(mario);

// 1. New {} - empty object is created
// 2. function is called, this = {} - this is set to the new empty object
// 3. {} object is linked to prototype
// 4. function automatically returns the object {...}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
// console.log(matilda, jack);

// console.log(mario instanceof Person); // true

// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

mario.calcAge();

console.log(mario.__proto__);
console.log(mario.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(mario)); // true

Person.prototype.species = 'Homo Sapiens';

console.log(mario.species, matilda.species);

console.log(mario.hasOwnProperty('firstName')); // true
console.log(mario.hasOwnProperty('species')); // false because it is in prototype

// Prototypal Inheritance and The Prototype Chain

// Prototypal Inheritance on Built-In Objects

console.log(mario.__proto__);
console.log(mario.__proto__.__proto__);
console.log(mario.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 5, 5, 7, 98, 4, 4, 3, 3, 2]; // new Array([3, 5, 7, 98, 4, 3, 2])
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
}; // not good

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

console.dir(x => x + 1);
*/

///////////////////////////////////////
// #CHALLENGE #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'FORD' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const ford = new Car('FORD', 120);
const mercedes = new Car('Mercedes', 95);

ford.accelerate();
ford.brake();

mercedes.accelerate();
mercedes.brake();
*/

// ES6 Classes

// class expression
// const PersonCl = class{}

// class declaration
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // everything outside of constructor will be added to .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  // GETTER
  get age() {
    return 2024 - this.birthYear;
  }

  // SETTER FOR DATA VALIDATION - setting a property that already exists with the _ and getter
  set fullName(name) {
    console.log(name);

    if (name.includes(' ')) this._fullName = name; // convection for underscore
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);

jessica.calcAge();

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are NOT hoisted -- cannot use them before they are declared
// 2. Classes are first-class citizens -- we can pass them into functions and return them from functions
// 3. Classes are executed in strict mode -- body of class is always executed in the strict mode

const walter = new PersonCl('Walter White', 1965);

// Setters and Getters

const account = {
  owner: 'Mario',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // dont need to call the getter

// setting the setter
account.latest = 50;
console.log(account.movements);
console.log(jessica.age); // 28
*/

// Static methods
// example of static methods Array.from(), Number.parseFloat() - they are static because they only work on the constructors
// that means that .from is available on Array constructor, but not an example of array like [1, 4, 5].from()
/*
// Constructor function
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this - Never create a method using a constructor function
  // this.calcAge = function () {
  //   return 2024 - this.birthYear;
  // };
};

// This is a static method for a constructor 'class', the static method is not inherited
Person.hey = function () {
  console.log(`Hey there 🙋‍♂️`);
  // console.log(this);
};

Person.hey();

// Class
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // everything outside of constructor will be added to .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  // GETTER
  get age() {
    return 2024 - this.birthYear;
  }

  // SETTER FOR DATA VALIDATION - setting a property that already exists with the _ and getter
  set fullName(name) {
    console.log(name);

    if (name.includes(' ')) this._fullName = name; // convection for underscore
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }
  // the static method is classes is added using the static keyword
  static hey() {
    console.log(`Hey there 🙋‍♂️`);
    // console.log(this);
  }
}

PersonCl.hey();
*/
// Object.create method --
/*
const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); // object steven prototype is equal to the PersonProto

console.log(steven);

steven.name = 'Steven';
steven.birthYear = '2002';
steven.calcAge(); // works
console.log(steven);

console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2000);
console.log(sarah);
*/
///////////////////////////////////////
// Coding Challenge #2

/* 
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(mph) {
    this.speed = mph * 1.6;
  }
}

const ford = new CarCl('Ford', 110);

ford.accelerate();
ford.accelerate();
ford.brake();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = 100;
console.log(ford);
*/
