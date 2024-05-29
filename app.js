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

// String;

// let x = "Session With Siva";
// console.log(x);
// console.log(typeof x);

// x = 1;

// // Number
// let y = 1;

// console.log(y);
// console.log(typeof y);

// let z = 1.5;

// console.log(z);
// console.log(typeof z);

// // boolean

// let p = true;
// console.log(p);
// console.log(typeof p);

// //undefined

// let w;
// console.log(w);
// console.log(typeof w);
// w = 9;
// console.log(typeof w);

// Null;

// let r = null;

// console.log(r);

// console.log(typeof r);

// //Reference Types: Objects , Arrays , Functions

// let coursew = {
//   title: "Front End Development",
//   description: "Projects real time",
//   amout: 30000,
//   duration: {
//     html: "1 month",
//     css: "15 Days",
//     js: "1 month",
//     angular: "1 months",
//   },
// };

// let xcourses = course;

// console.log(course);
// console.log(typeof course);

// console.log(course.title);
// console.log(course.description);
// console.log(course.amout);
// console.log(course.duration.css);
// console.log(course["duration"]["css"]);

// // Call By value

// let a = "Something";

// let b = a;

// console.log(a);
// console.log(b);

// a = "Nothing";

// console.log(a);
// console.log(b);

// // Call By Reference

// let course = {
//   title: "Front End Development",
//   description: "Projects real time",
//   amout: 30000,
//   duration: {
//     html: "1 month",
//     css: "15 Days",
//     js: "1 month",
//     angular: "1 months",
//   },
// };

// let xcourse = course;
// console.log(course);
// console.log(xcourse);

// course.title = "BackEnd Developemnt"; // Mutate

// console.log(course);
// console.log(xcourse);

// function toChangeAmout(obj) {
//   // let ycourse = obj;

//   obj.amout = 40000;
//   console.log(obj.amout);
//   console.log(course);
//   console.log(xcourse);
// }

// toChangeAmout(course);
// console.log(course);
// console.log(xcourse);

// course = {
//   title: "Xyz End Development",
//   description: "Projects real time",
//   amout: 30000,
//   duration: {
//     html: "1 month",
//     css: "15 Days",
//     js: "1 month",
//     angular: "1 months",
//   },
// };

// console.log(course);
// console.log(xcourse);

//How to create objectby using using Object Literal Syntax:

// var objectName={};

// How to create object by using new object keyword:

// var person = new Object();

// console.log(person);

// person.firstname='shaik';
// person.lastname='shabbeer';

// console.log(person);

// var firstNameProperty = 'firstname';

// var lastNameProperty='lastname';


// console.log(person[firstNameProperty]);
// console.log(person[lastNameProperty]);

// console.log(person.firstname);
// console.log(person.lastname);

// person.address =new Object();
// person.address.street='b c colony';
// person.address.city='chennekothapalli';
// person.address.state='andrapradesh';

// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person["address"]['state']);

// //By Using Object Literals

// var Tony = {
//   firstname: "shaik",
//   lastname: "shabbeer",
//   address: {
//     street: "b c colony",
//     city: "chennekothapalli ",
//     state: "Andrapradesh",
//   },
// };

// function greet(a) {
//   console.log(a);
//   console.log("Hi " + a.firstname);
// }

// greet(Tony);

// greet({
//   firstname: "Bandaru",
//   lastname: "vijay",
// });

// Tony.address2 = {
//   street: "sivalayam veedi",
// };

// console.log(Tony);

// greet({
//   firstname: "Sivakumar",
//   lastname: "Kalisetty",
// });

// // Functions are Objects

// function greet() {
//   console.log("hi");
// }

// greet.language = "english";
// console.log(greet.language);

// // Function Statements and Expressions

// greet();

// function greet() {
//   console.log("hi");
// }

// console.log(anonymousGreet);

// //anonymousGreet();

// var anonymousGreet = function () {
//   console.log("hi anonymous");
// };

// console.log(anonymousGreet);

// anonymousGreet();

// function log(a) {
//   a();
// }

// log(function b() {
//   console.log("Hello guys");
// });

// // log(function b() {
// //   console.log("Calling function nbhsdhjsdjh");
// // });

// // Call By Value and Call Reference

// // by value (primitives)
// var a = 3;
// var b;
// console.log(a);
// console.log(b);
// b = a;
// a = 2;

// console.log(a);
// console.log(b);

// // by reference (all objects (including functions))
// var c = { greeting: "hi" };
// var d;

// d = c;
// c.greeting = "hello"; // mutate

// console.log(c);
// console.log(d);

// // by reference (even as parameters)
// function changeGreeting(obj) {
//   obj.greeting = "Hola"; // mutate
// }

// changeGreeting(d);
// console.log(c);
// console.log(d);

// // equals operator sets up new memory space (new address)
// c = { greeting: "howdy" };
// console.log(c);
// console.log(d);

// UnderStanding of this keyword

// function hello() {
//   console.log(this);
//   this.newvariable = "hello";
// }

// var hola = function () {
//   console.log(this);
// };

// hello();

// console.log(this.newvariable); // not good!

// hola();

// var c = {
//   name: "The c object",
//   log: function () {
//     console.log(this);
//   },
// };

// c.log();

// this keyword deep explanation


// function hello() {
//   console.log(this);
//   this.newvariable = "hello";
// }

// var hola = function () {
//   console.log(this);
// };

// hello();

// console.log(this.newvariable); // not good!

// hola();

// var c = {
//   name: "The c object",
//   log: function () {
//     var self = this;
//     console.log(self);
//     self.name = "Updated C Object";
//     console.log(self);

//     var setname = function (newname) {
//       console.log(newname);
//       console.log(self);
//       self.name = newname;
//       console.log(self);
//     };
//     setname("Updated again! The c object");
//     // console.log(this);
//   },
// };

// c.log();

//Arrays


// var arr = [
//   1,
//   false,
//   {
//     name: "Tony",
//     address: "111 Main St.",
//   },
//   function (name) {
//     console.log(name);
//     var greeting = "Hello ";
//     console.log(greeting + name);
//   },
//   "hello",
// ];

// console.log(arr[3]);
// console.log(arr);
// arr[3](arr[2].name);
// //arr[3](arr[2].name);

// // arrays

// var students = ["shabeer", "kiran", "prakash", "badri", 2, true, {}];

// console.log(students);

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);

// let name1=['vijay','siva','kiran'];
// let age1=[30,25,28];
// let boolean1=[true,false];

// console.log(name1[1]);

// let kiran={
// gender:'male',
// age:'25'

// };

// console.log(kiran.gender);


// let vijay=new Object();

// console.log(vijay);

// vijay.age='30';
// vijay.gender='male';
// vijay.address='anantapur';

// console.log(vijay);

// let shabbeer=age;

// function statement
// function greet(name) {
//   console.log("Hello " + name);
// }
// greet("John");

// // using a function expression
// var greetFunc = function xyz(name) {
//   console.log("Hello " + name);
// };
// greetFunc("John");

// // using an Immediately Invoked Function Expression (IIFE)
// var greeting = (function (name) {
//   return "Hello " + name;
// })("John");

// console.log(greeting);

// // IIFE
// var firstname = "John";

// (function (name) {
//   var greeting = "Inside IIFE: Hello";
//   console.log(greeting + " " + name);
// })(firstname); // IIFE


// // IIFE

// var greeting = "Hola";

// (function (global, name) {
//   var greeting = "Hello";
//   // global.greeting = "Hello";
//   console.log(greeting + " " + name);

//   function greet() {
//     console.log("Hello JavaScript");
//   }

//   greet();
// })(window, "John"); // IIFE

// console.log(greeting);

// closuers
// function greet(whattosay) {
//   return function (name) {
//     console.log(whattosay + " " + name);
//   };
// }

// var sayHi = greet("Hi");
// console.log(sayHi);


//IIFE (Example 1)

// (function(){
//   let locVar='This is local Variable';
//   console.log(locVar);

// })();

// //IIFE(Example 2)

// let result=(function(){
//   let x=10;
//   let y=90;
//   return x+y;
// })();

// console.log(result);

// //IIFE (Example 3)

// var counter=(function(){
//   var count=0;
//   return{
//     increment:function(){
//       count++;
//     },
//       decrement:function(){
//         count--;

//       },
//      getcount:function(){
//       return count;
//      },
     
//   };
// })();

// counter.increment();
// counter.increment();
// counter.decrement();

// console.log(counter.getcount());


// console.log(counter.count);

// console.log(counter);

// //closure 

// function outerFunction(X){
//   var innerVar=10;
//   function innerFunction(){
//     return X+innerVar;

//   }
//   return innerFunction;
// }

// var clouser=outerFunction(5);

// console.log(clouser());

//Array's


// var arr = [
//   1,
//   false,
//   {
//     name: "Tony",
//     address: "111 Main St.",
//   },
//   function (name) {
//     console.log(name);
//     var greeting = "Hello ";
//     console.log(greeting + name);
//   },
//   "hello",
// ];

// arr[3](arr[2].name);

// arr[3]('shabbeer');

//console.log(arr[3](arr[2].name));

// //closuers
// function greet(whattosay) {
//   return function (name) {
//     console.log(whattosay + " " + name);
//   };
// }

// var sayHi = greet("Hi");
// console.log(sayHi("shabbeer"));

//closuers using for loop

// function buildFunctions(){
//   var arr=[];
//   for(var i=0;i<4;i++){
//     arr.push(function (){
//       console.log(i);
//     })
//   }
//   return arr;
// }
// let fs=buildFunctions();

// fs[0]();
// fs[1]();
// fs[2]();

// //closuers for loop
// function buildFunctions1() {
 
//   var arr = [];
  
//   for (var i = 0; i <=5; i++) {
//     varj=i;
      
//       arr.push(
//           (function(j) {
//             return function(){
//               console.log(j); 
//           }  
//           }
//       )(i))
      
//   }
  
//   return arr;
// }

// var fs1 = buildFunctions1();

// console.log(fs1)

// fs1[0]();
// fs1[1]();
// fs1[2]();
// fs1[3]();
// fs1[4]();
// console.log(fs1[5]);


//Global Variables 

// function myFunction(){
//   let a=5;
//   return a*a;
// }

// var mul=myFunction();
// console.log(mul);


// let a=5;
// function myFunction(){
//   return a*(a+3);

// }
// let closuer= myFunction();
// console.log(closuer);

//callback

// function as(callBack){
//   console.log('function as called');

//   console.log('as function execution completed');
//   fiveProperties={
//     empId:1234567,
//     name:'shabbeer',
//     age:31,
//   }
//   callBack(fiveProperties);
  
// }

// as(function callBack(){
//   console.log('callback function called');
//   console.log(fiveProperties);
  

// })


// function r(v){
//   console.log('function r called');
//   cars={
//     name:'skoda',
//     color:'Red',
//     number:12345,
//   }
//   v(cars);

// }
// r(function v(){
//   console.log('function v called ');
//   console.log(cars);

// })

// function greet(name,callback){
//   console.log('hi'+' '+name);
//   callback();
// }
// function callMe(){
//   console.log('iam callback function');

// }
// greet('shabbeer',callMe);


//Program that shows the delay in execution

// function greet(){
//   console.log('hello world');
// }
// function sayName(name){
//   console.log('hello'+'  '+name);

// }
// //calling the function
// setTimeout(greet,2000);
// sayName('shabbeer');

//callback function example

function greet(name,myFunction){
  console.log('helo world');
  myFunction(name);
}
function callMe(name){
  console.log('hello'+'  '+name);

}
setTimeout(greet, 2000,'shabbeer',callMe);





























