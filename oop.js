////////////////
//// Basics ////
////////////////

console.log("Hello, World");

// The let statement declares a block-scoped local variable, optionally initializing it to a value.
let num1 = 1;

if (num1 === 1) {
    let num1 = 2
    console.log(num1);
}    

console.log(num1);


// JS Primitive value types
// Number, String, Boolean, undefined, null
let expdate = undefined;

// JS Reference value types
// Objcets, Array, Function

// Objects
let person = {
    name: "John",
    age: 23
}
console.log(person);

// if property name is not valid property it returns UNDEFINED 
let property = "name";
console.log(person[property])

// Array
let car_list = ["Porche", "Pride"]
car_list.pop()
console.log(car_list);

// Function
function sayHello(name="John") {
    console.log("Hello, "+name);
}

sayHello();


/////////////
//// OOP ////
/////////////

// First start with objects
let person = {
    first_name: "John",
    age: 23,
    sayFirstName: function() {
        return this.first_name;
    }
}

console.log(person.sayFirstName())

// Create Objects
// Factory function
function Person(first_name, age) {
    return {
        first_name: first_name,
        age: age,
        getFirstName: function() {
            return this.first_name;
        },
        getAge: function() {
            return this.age;
        }
    }
}

let p1 = Person("John", 23);
console.log(p1.getFirstName());

// Constructor function
function Post(title="new post", body="nothing") {
    this.title = title;
    this.body = body;
    this.getTitle = function() {
        return this.title;
    }
    this.getBody = function() {
        return this.body;
    }
}

const post_1 = new Post();
console.log(post_1.getTitle());

// Converted to TS
class Shape {
    constructor(area) {
        this.area = area;
        this.getArea = function () {
            return this.area;
        };
    }
}

// get objects as reference
// Primitives are copied by value
// but References/Objects are copied by reference
let obj1 = {value: 1};
let obj2 = obj1;

obj1.value = 2;

// Enumerating properties
function Circle(radius=1) {
    this.radius = radius;
    this.getRadius = function() {
        return this.getRadius;
    }
}

const c1 = new Circle();
for (let key in c1 ) {
    if (typeof c1[key] !== 'function')
        console.log(key, c1[key]);
}

// get objects prperties alternative
const keys = Object.keys(c1); 


// Abstraction
// Hide the details & show essentials for do so
// Private properties and methods
// so we also need to getter/setter for work with private variables
function Animal(type_name="Mamal") {
    this.type_name = type_name;

    // this property have to be private so
    // we make it local variable by 'let' keyword
    let property = {legs: 4, eyes: 2};
    // getProperty
    this.getProperty = function() {
        return this.property;
    }
    
    Object.defineProperty(this, 'property', {
        get: function() {
            return property;
        },
        set: function(value) {
            // parameter validation
            property = value;
        }
    });

    // method defined as a closure
    let doSomething = function() {
        return this.type_name;
    }
    this.getTypeName = function() {
        return doSomething();
    }
}

const anim = new Animal();
anim.property = {legs: 3, eyes: 3};
console.log(anim.property);
