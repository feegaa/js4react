
////////////////////////
//// Arrow function ////
////////////////////////
const square = function(number) {
    return number * number;
}

const square2 = number => number * number;

let s1 = square(3);

console.log(s1);
console.log(square2(4));


///////////////////////
//// Usage example ////
///////////////////////
const jobs = [
    {id: 1, is_active: true},
    {id: 2, is_active: false},
    {id: 3, is_active: true},
]

// const jobs_id = jobs.filter(function(job) { return job.id });
const jobs_id = jobs.filter(job => job.is_active);
console.log(jobs_id); 


//////////////////////////////////
//// Arrow functions and this ////
//////////////////////////////////
const person = {

    talk() {
        let self = this;
        // Arro functions dont rebind this keyword
        // setTimeout(function() {
        setTimeout(() => {
            console.log("this",this);
            // console.log("this",this);
            // console.log("self",self);
        }, 1000);
    }
};

person.talk();


///////////////////
//// Array map ////
///////////////////
const colors = ["red", "green", "blue"];
const modified_colors = colors.map(function(color) {
    return "<li>" + color + "</li>";
});
// Arrow function and also Template literal
const other_modified_colors = colors.map(color => `<small>${color}</small>`);

console.log(modified_colors);
console.log(other_modified_colors);
console.log(colors);


//////////////////////////////
//// Object destructuring ////
//////////////////////////////
const address = {
    country: '',
    city: '',
    street: '',
}

const {country, city, street} = address;
const {street:st} = address;
 

/////////////////////////
//// Spread operator ////
/////////////////////////
const first = ["one", "two", "three"];
const second = ["four", "five", "six"];

const three = first.concat(second);
// spread operator
// get every item in that array and put in a new array
const combind = [...first, ...second];
const new_combind = [...first, "mid", ...second, "last"];
// easily clone an array
const male = {name: "John"};
const female = {fname: "Marry"};
const cloned = {...male, ...female, family: "human"};
console.log(cloned);




/////////////////
//// Classes ////
/////////////////
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


/////////////////////
//// Inheritance ////
/////////////////////
class Person {
    constructor(name) {
        this.name = name;
    }
    walk = () => this.name + " is walking!";
}

class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach = () => "Teaching!";
}

//////////////////////////////////
//// Named and default export ////
//////////////////////////////////

// Default -> import ... from "";
// Named -> immport {...} from "";