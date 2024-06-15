//============================================================================================================
//Day 1

// What is function(JS)?
//function definition(telling js)
//function funcNAme(){
    //do something
//}
//function calling(using the function)
//funcName();


function hello(){
    console.log("hello");
}
hello();
hello();
hello();
hello();



function printName(){
    console.log("Kishan");
}
printName();



function table(){
    for(let i=2;i<=20;i=i+2){
        console.log(i);
    }
}

table();


function voting(){
    let age=20;
    if(age>=18){
        console.log("you are eligiable for vote");
    }
    else{
        console.log("you are not eligiable for vote");
    }
}
voting();


//============================================================================================================
//Day 2
//Practice question
// Create a function thet prints a kuch line💫

function kuchline(){
    console.log("Bohut kuch galat hoga");
    console.log("Bohut kuch sahi hone se pahle");
    console.log("Bas tu haarna mat");
}
console.log(kuchline());


//============================================================================================================
//Day 3
//Practice question-2
//Create a function to roll a dice & always display the value of the dice(1 t0 6)

function dice(){
    let random=Math.floor(Math.random()*6)+1;
    console.log(random);
}
dice();


//============================================================================================================
//Day 4
//Function with Arguments
//Values we pass to the function

//function funcName(arg1,arg2...){
    //do something
//}

function printname(name){
    console.log(name);
}
printname("kishan");


function printinfo(name,age){
    console.log(`${name}'s age is ${age}.`);
}
printinfo("kishan",20);


function sum(a,b){
    console.log(a+b);
}
sum(1,2);
sum(44,98);
sum(9,31);


//============================================================================================================
//Day 5
//Practice question 
//Q-Create a function that gives us the average of 3 number

function average(a,b,c){
    console.log(a,b,c);
}
average((3+3+3)/3);


function average1(a,b,c){
    let avg=(a+b+c)/3;
    console.log(avg);
}
average1(2,4,6);


//============================================================================================================
//Day 6
//Practice question
//Q-Create a function that prints the multiplcation table of the number

function Table(n){
    
    for(let i=n;i<=n*10;i=i+n){
        console.log(i);
    }
}

table(2);

//============================================================================================================
//Day 7
// Return-return keyword is used to return some value from the function
//     input ----> function(does some work) ---->output
// funtion funcName(arg1,arg2...){
    //do something
    //return val;
//}

function sum(a,b){
    return(a+b);
}
let s=sum(1,2);
console.log(s);
console.log(sum(4,9));


function sum(a,b){
    return(a+b);
}
console.log(sum(sum(1,2),3));



function add(a,b){
    console.log("hello");
    console.log("hello");
    return(a+b);
    console.log("hello1");  //##anything written after return statement those things are not be executed.
    console.log("hello1");
}
let s1=add(1,2);
console.log(s1);  

//============================================================================================================
//Day 8
//Practice question 
// Create a function that returns the sun of numbers from 1 to n

function ADDITION(n){
    let ans=0;
    for(let i=0;i<=n;i++){
        ans=ans+i;
       
    }
    return ans;
}
console.log(ADDITION(7));

//============================================================================================================
//Day 9
//Practice question

// Create a function that returns the concatenation of all strings in an array



let str=['hi','hello','bye','!'];

function concat(str){
    let result="";

    for(let i=0;i<str.length; i++){
        result=result+str[i];
    }

    return result;
}

console.log(concat(str));
//============================================================================================================
//Day 10

// scope-scope dertermine the accessility of variables ,object, and function from different parts of the code
//  *function
//  block
// lexical


//function scope- variable define inside a function are not accessiable(visible from outside the function)

function calsum(a,b){
    let sum=a+b;
    console.log(sum);   //if we initialize a varible inside the function, we are not able to use outside the function

}
calsum(1,2);
//console.log(sum);



let summ=54;    //global scope

function calsumm(a,b){
    let summ=a+b;  //function scope          && function scope are more specific than global scope
    console.log(summ);
}
calsumm(3,4);

console.log(summ);


//============================================================================================================
//Day 11

//block scope -Variable declared inside a {} block cannot be accessed from outside the block


{
    var  a=25;
}
console.log(a);  //error but if we use var in the place of let then we got 25 as a answer!

for(let i=1;i<=5; i++){
    console.log(i);
}

//console.log(i);



//============================================================================================================
//Day 12

//  Lexical Scope
//a variable defined outside a function can bbe accessible inside another funnction defined after the variable declaration
//The oppostion is Not True.

function outerFunc(){
    let x=1;
    let y=6;
    function innerFunc(){
        console.log(x);
        console.log(y);
    }
    innerFunc();
}

outerFunc();  //output 5,6 

function outerFunc1(){
    function innerFunc1(){
        console.log(x);
        console.log(y);
    }
    let x=1;
    let y=6;
    
    innerFunc1();
}

outerFunc1(); //output 5,6 this is possible with the help of hositing

//but opposit is not true means if we declare a varible in inner function and print varible outside the inner function is not possible

function outerFunc2(){
    let x=1;
    let y=6;
    function innerFunc2(){
        let a=10;
        console.log(x);
        console.log(y);
    }
    innerFunc2();
    console.log(a);
}
outerFunc2();   //error

//============================================================================================================
//Day 13

// practice question

 let  greet ="hello";
 function changeGreet(){
    let greet= "namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
 }

 console.log(greet);
 changeGreet();

 //============================================================================================================
//Day 14

// function expression
//const variable= function(arg1,arg2){
//do or return something
//}

const sum1=function(a,b){
    return a+b;
}
console.log(sum1(2,3));


let hello1= function(){
    console.log("hello");
}

hello1=function(){
    console.log("namaste");
}
hello1();

//============================================================================================================
//Day 15

// Higher order function

//A function that does one or both:
//-takes one or multiple function as arguments
function multipleGreet(func,count){  //higher order function
    for(let i=1;i<=count;i++){
        func();
    }
}
let greet1=function(){
    console.log("hello");
}
console.log(multipleGreet(greet1,100));


function multipleGreet2(func,count){  //higher order function
    for(let i=1;i<=count;i++){
        func();
    }
}
let greet2=function(){
    console.log("hello");
}
console.log(multipleGreet2(function(){console.log("namaste")},100));
//-return a function
function oddOrEvenFactory(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2==0));
        }
        //return odd;
    }
    else if(request == "even"){
        return function(n){
            console.log(n%2==0);
        }
        //return even;
    }else{
        console.log("wrong request");
    }
    
}

let request ="odd";


//============================================================================================================
//Day 16
//methods-Action that can be performed on an object.

const calculator={
    num:55,
    add: function(a,b){    //calculator.add(6,5); ==11
        return a+b;
    },
    sub: function(a,b){   //calculator.sub(6,5);==1
        return a-b;
    },
    mul: function(a,b){   // calculator.mul(6,5); ==30;
        return a*b;
    }
};









const calculatorr={
    num:55,
    add2(a,b){    //calculator.add(6,5); ==11
        return a+b;
    },
    sub2(a,b){   //calculator.sub(6,5);==1
        return a-b;
    },
    mul2(a,b){   // calculator.mul(6,5); ==30;
        return a*b;
    }
};


//============================================================================================================
//Day 16
//HOME WORK QUESTIONS-

//ques1- Write a javascript function that return array element larger than a number.

let arr=[8,9,10,1,2,3,4,5,6,7];
let num=5;

function getElements(arr,num) {
    for(let i=0;i<arr.length;i++){
        if(a[i]>num){
            console.log(arr[i]);
        }
    }
}

getElements(arr, num);

//question2- write a javascript function to extract uniques character from a string
//: str="abcdabcdefgggh"
// ans="abcdefgh"

let str1="abcdabcdefgggh";

function getUnique(str1){
    let ans="";
    for(let i=0;i<str1.length;i++){
        let currChar= str1[i];
        if(ans.indexOf(currChar)==-1){
            ans+=currChar;
        }
    }
    console.log(ans);
}

getUnique(str1);


//question-3= Write a javascript function that accept a list of country names as input and return the longest counrty name as output.
// Example: country=["Australia", "Germany","United States of America"]
//output:"United states of America"

let country=["Australia", "Germany","United States of America"];

function longestName(country){
    let ansIdx=0;
    for(let i=0;i<country.length;i++){
        let ansLen=country[ansIdx].length;
        let currLen=country[i].length;
        if(currLen>ansLen){
            ansIdx=i;
        }
    }
    return country[ansIdx];
}
console.log(longestName(country));


//question-4= write a javascript function to count the number of vowels in a String argument

let string="apnacollege";

function vowelcount(string){
    let count=0;
    for(let i=0;i<string.length;i++){
        if(string.charAt(i)=="a"||string.charAt(i)=="e"||string.charAt(i)=="i"||string.charAt(i)=="o"||string.charAt(i)=="u"){
            count++;
        }
    }
    return count;
}
 console.log(vowelcount(string));


 //question-5=write a javascript function to generate a random number within a range(start,end)

 let start =100;
 let end=200;

 function generateRandom(start,end){
    let diff = end-start;
    return Math.floor(Math.random()*diff)+start;
 }