'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',

  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20.00', adress }) {
    console.log(`Order delivered! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to 
    ${adress} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, secondIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(secondIngredient);
    console.log(otherIngredients);
  },
};

const airplane = 'TAP Air Portugal';

console.log(airplane.toLocaleLowerCase());
console.log(airplane.toUpperCase());

//Fix capitalization in name
const passenger = 'jOnAS'; //Jonas
const lowerpassanger = passenger.toLowerCase(); //jonas
const correctpassanger =
  lowerpassanger[0].toUpperCase() + lowerpassanger.slice(1);
console.log(correctpassanger);

//Comparing emails

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceTR = '288,47₺';
const priceUS = priceTR.replace('₺', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passangers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard ');
  }
};
checkBaggage('I have laptop ,some Food and pocket Knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and gun for protection');

console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstname, lastname] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstname, lastname.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('berkay unlu');

//Padding

const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(35, '+'));
console.log('Berkay'.padStart(20, '+').padEnd(35, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(123124123242354345));
console.log(maskCreditCard('83457894358344365476'));
console.log(maskCreditCard(445651558));

//Repeat
const message2 = 'Bad weather... All Departues Delayed...';
console.log(message2.repeat(5));

const planesInLines = function (n) {
  console.log(`There are ${n} planes in line ${'Plane '.repeat(n)}
  `);
};

planesInLines(5);

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const Words = text.split('\n');

  for (const [i, word] of Words.entries()) {
    const [first, second] = word.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    console.log(`${output.padEnd(20)}${'🆗'.repeat(i + 1)}`);
  }
});

////////////////////////////////////////////////////
/*const airplane = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[1]);

console.log(airplane.indexOf('P'));
console.log(airplane.lastIndexOf('A'));
console.log(airplane.indexOf('Portugal'));
console.log(airplane.slice(4));

console.log(airplane.slice(4, 7));
console.log(airplane.slice(0, airplane.indexOf(' ')));
console.log(airplane.slice(airplane.lastIndexOf(' ') + 1));

console.log(airplane.slice(-2));
console.log(airplane.slice(1, -1));

const CheckMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  s == 'B' || s == 'E'
    ? console.log('You got the middle seat')
    : console.log('You got other seat');
};

CheckMiddleSeat('11B');
CheckMiddleSeat('23C');
CheckMiddleSeat('3E');*/

/////////////////////////////////////////////////////////////////////////////////////////
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
console.log(ordersSet);
console.log(new Set('Jonas'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Pizza');
//ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);

//MAPS

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze,Italy');
console.log(rest.set(2, 'Lisbon,Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('Open', 11)
  .set('Close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;

console.log(rest.get(time > rest.get('Open') && time < rest.get('Close')));

console.log(rest.has('categories'));
rest.delete(2);
//rest.clear();
const Arr = [1, 2];
rest.set(document.querySelector('h1'), 'heading');
rest.set(Arr, 'Test');
console.log(rest);
console.log(rest.size);
console.log(rest.get(Arr));

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!!!'],
  [false, 'Try again!!!'],
]);
console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));
const MapHours = new Map(Object.entries(openingHours));
console.log(MapHours);

//Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key == 'number') console.log(`Answer ${key} :${value}`);
}
const answer = 3;
//const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//Convert map to Array
console.log([...question]);
//console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

/*if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.close);

//WITH optional chaining
console.log(restaurant.openingHours.mon?.close);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

//console.log(users[0]?.email ?? 'User array empty');
if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');

//Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are opened ${properties.length} days:`;

for (const days of properties) {
  openStr += `${days},`;
}
console.log(openStr);

//Property VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(openingHours);
console.log(entries);
//[key,value]
for (const [key, { open, close }] of entries)
  console.log(`On ${key} we open at ${open} and close at ${close}`);

console.log('----OR----');
//Use ANY data type,return ANY data type ,short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuest = 23;
const guest1 = restaurant.numGuest
  ? restaurant.numGuest
  : (restaurant.numGuest = 10);
console.log(guest1);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);

console.log('----AND----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

//Practical Example

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//Nullish :null and undefined (NOT 0 or '')
restaurant.numGuest = 0;

const guest3 = restaurant.numGuest ?? 10;
console.log(guest3);

const rest1 = {
  name: 'Capri',
  numGuest: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};
//OR assignment operator
//rest1.numGuest = rest1.numGuest || 10;
//rest2.numGuest = rest2.numGuest || 10;

//rest1.numGuest ||= 10;
//rest2.numGuest ||= 10;

rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

//rest1.owner = rest1.owner && '<ANONYMOUS>';
//rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

/*
/*onst newArr = [1, 2, 3, 4, ...arr];
console.log(newArr);
console.log(...newArr);
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
console.log(...newMenu);*/

//Copy array
/*const MainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const AllMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(AllMenu);

//Iterables: arrays,strings,maps,sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);*/
//console.log(`${...str} Schmedtmann`); //not gonna work...

//Real-world example
/*const ingredients = [
  prompt("Let's make pasta! Ingredients 1?"),
  prompt('ingredients 2?'),
  prompt('ingredients 3?'),
];*/
//console.log(ingredients);
//restaurant.orderPasta(...ingredients);

//Objects
/*const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const CopyRestaurant = { ...restaurant };
CopyRestaurant.name = 'Ristorante Roma';
console.log(CopyRestaurant.name);
console.log(restaurant.name);*/

//SPREAD ,because on RIGHT side of=
//const arr = [1, 2, ...[5, 6]];

//REST, because on LEFT side of =
/*const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);*/

/*const [c, , d, ...otherfoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(c, d, otherfoods);*/

//Objects
/*const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);*/

//Functions
/*const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);*/
//};

/*add(2, 3);
add(3, 5, 8);
add(11, 2, 5, 6, 4, 7, 9, 1);

const x = [23, 5, 7];
add(...x);
restaurant.orderPizza('mushrooms ', 'onion', 'olives', 'spinach');*/

/*
/////////////////////////////////////////
// DESTRUCTURING OBJECTS 
restaurant.orderDelivery({
  time: '22:30',
  adress: 'Via del Sole,21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  adress: 'Via del Sole,21',
  starterIndex: 1,
});

const { name, openingHours, mainMenu } = restaurant;
console.log(name, openingHours, mainMenu);

const {
  name: restaurantName,
  openingHours: hours,
  mainMenu: restaurantMenu,
} = restaurant;
console.log(restaurantName, hours, restaurantMenu);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 23;
const obj = { a: 7, b: 123, c: 4 };
({ a, b } = obj);
console.log(a, b);

//nested objects

const {
  openingHours: { fri: f },
} = restaurant;
console.log(f);*/

/*const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring arrays
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//recieve 2 return values from a function
const [starter, maincourse] = restaurant.order(2, 0);
console.log(starter, maincourse);

//Nested destructuring
const nested = [3, 4, [5, 6]];
/*const [i, , j] = nested;
console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);*/
/*const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.

const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(playersFinal);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals('Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels');
printGoals('Lewandowski', 'Gnarby');
printGoals(...game.scored);

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
//console.log(menu);

for (const items of menu) console.log(items);
for (const items of menu.entries()) console.log(items);

for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

//Coding Challenge 2

//1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1} by ${player}`);
}

let average = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  average += odd;
}

console.log(average);
average /= odds.length;
console.log(average);

//3.

for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team == 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamString} ${odd}`);
}*/
