// an object in js is a collection of key value pairs

// an object literal

let person = {
    name: "Adam", 
    sayHello: () => {
        console.log("Hello, everyone");
    }
}

console.log(person);
person.sayHello();
// you can just add to an object
person.profession = "Trainer";
console.log(person.profession);

// you can also use a constructor

function Player(name, jersey, team) {
    this.name = name;
    this.jersey = jersey;
    this.team = team;
}

let dwayne = new Player("Dwayne Wade", 3, "The Heat");
let bosh = new Player("Chris Bosh", 1, "The Heat");

console.log(dwayne.jersey);

dwayne.dribble = () => console.log("Dribbling");
dwayne.dribble();

// json - js object notation
// a json is just a string format for storing information

// console.log(dwayne);
let dwjson = JSON.stringify(dwayne);
console.log(dwjson);

let team = [dwayne, bosh];

console.log(JSON.stringify(team));

let dwayne2 = JSON.parse(dwjson);
console.log(dwayne2.name);

// fun with arrays
let numbers = [10, 20, 30, 40, 50];

numbers.pop();
numbers.shift();
numbers.unshift(5);
console.log(numbers);

let numbers2 = numbers.map(num => num*10);
console.log(numbers2);

// the array prototype is where the methods are stored for arrays
// js does not have classes
let ray = [];
