// Function and Var Declaration//

// function fullName(){  // funtion declaration 
// console.log("SHaik Shabbeer");

// }

// var a= 55; // Declaration of a

// var b= 45;  // decaration of b

// console.log(a+b); //Console is used for printing 

// fullName();  / funtion calling

//object declaration

// var address={
//     street:'Main',
//     number:7,
//     apartment:{
//         floor:4,
//         number:42,
//     },

// };

// console.log(address);

//Execution context: creation and Hoisting

// var a= 'hello world!';

// function b(){
//     console.log('called b!');
// }

// b();

// console.log(a);

// b();

// console.log(a);

// var a='hello world';

// function b(){
//     console.log('called b');
// }

// function b(){
//     console.log('called b');

// }

// b();
// console.log(a);

// var a='hello world';


// function b(){
//     console.log('called b');

// }

// var a;

// b();
// console.log(a);

// a='hello world';

//Outer Environment 

// function b(){
//     console.log('called b');
//     function s(){
//         console.log('called s');
//     }
//     s();

// }

// b();
// s();

// var a;

// b();
// console.log(a);

// a='hello world';

//undefined

// var a;
// console.log(a);

// if(a===undefined){
//     console.log('a is undefined');
// }
// else{
//     console.log('b is defined');
// }

// var a='hello world';
// console.log(a);

// if(a===undefined){
//     console.log('a is undefined');
// }
// else{
//     console.log('b is defined');
// }


// console.log(a);

// if(a===undefined){
//     console.log('a is undefined');
// }
// else{
//     console.log('b is defined');
// }

// var a='hello world';
// console.log(a);

// a=undefined;

// if(a===undefined){
//     console.log('a is undefined');
// }
// else{
//     console.log('b is defined');
// }

//code execution

// function b(){
//     console.log('called b');
// }

// b();

// console.log(a);

// var a='hello world';

// console.log(a);

//Function Invocastion and execution stack

// function b(){

// console.log('called b');
// }
// function a(){
//     console.log('called a');

//     b();
// }

// a();

// console.log('call stack completed');

// function b(){
//     var myVar;
//     console.log(myVar);
// }

// function a(){
//     var myVar=2;
//     console.log(myVar);
//     b();
// }

// var myVar=1;

// console.log(myVar);

// a();

// function b(){
//     var myVar;
//     console.log(myVar);
// }

// function a(){
//     var myVar=2;
//     console.log(myVar);
//     b();
// }

// var myVar=1;

// console.log(myVar);

// a();

// console.log(myVar);


//Data Types : Primitive Data Types, Reference Types

//Primitive / Value Types  : String , Number , Boolean , undefined, Null, Symbol

//Reference Types: Objects , Arrays , Functions

//JavaScript is  Dynamic Language

String;

let x = "Session With Siva";
console.log(x);
console.log(typeof x);

x = 1;

// Number
let y = 1;

console.log(y);
console.log(typeof y);

let z = 1.5;

console.log(z);
console.log(typeof z);

// boolean

let p = true;
console.log(p);
console.log(typeof p);

//undefined

let w;
console.log(w);
console.log(typeof w);
w = 9;
console.log(typeof w);

Null;

let r = null;

console.log(r);

console.log(typeof r);

//Reference Types: Objects , Arrays , Functions

let coursew = {
  title: "Front End Development",
  description: "Projects real time",
  amout: 30000,
  duration: {
    html: "1 month",
    css: "15 Days",
    js: "1 month",
    angular: "1 months",
  },
};

let xcourses = course;

console.log(course);
console.log(typeof course);

console.log(course.title);
console.log(course.description);
console.log(course.amout);
console.log(course.duration.css);
console.log(course["duration"]["css"]);

// Call By value

let a = "Something";

let b = a;

console.log(a);
console.log(b);

a = "Nothing";

console.log(a);
console.log(b);

// Call By Reference

let course = {
  title: "Front End Development",
  description: "Projects real time",
  amout: 30000,
  duration: {
    html: "1 month",
    css: "15 Days",
    js: "1 month",
    angular: "1 months",
  },
};

let xcourse = course;
console.log(course);
console.log(xcourse);

course.title = "BackEnd Developemnt"; // Mutate

console.log(course);
console.log(xcourse);

function toChangeAmout(obj) {
  // let ycourse = obj;

  obj.amout = 40000;
  console.log(obj.amout);
  console.log(course);
  console.log(xcourse);
}

toChangeAmout(course);
console.log(course);
console.log(xcourse);

course = {
  title: "Xyz End Development",
  description: "Projects real time",
  amout: 30000,
  duration: {
    html: "1 month",
    css: "15 Days",
    js: "1 month",
    angular: "1 months",
  },
};

console.log(course);
console.log(xcourse);



