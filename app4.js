//===================================================================================================================
//DAY-01
let arr=[1,2,3,4,5];
let print= function(el){
    console.log(el);
};
arr.forEach(print);

let arr1=[5,4,3,2,1];
arr1.forEach(function(el) {
    console.log(el);
});

let arr2=[10,9,8,7,6,5,4,3,2,1];
arr2.forEach((el)=>{
    console.log(el);
});


let arr3=[{
    name:"kishan",
    marks:80,
},
{
    name:"xyz",
    marks:90,
}, 
{
    name:"ABC",
    marks:99,
},
];
arr3.forEach((student)=>{
    console.log(student.marks);
});


//===================================================================================================================
//DAY-02
//MAP
//let newArr=arr.map( some function definition or name)

let num=[1,2,3,4,5];
let double=num.map((el)=>{
    return el*2
});
console.log(double);

//filter
let num1=[1,2,3,4,2,1,5,6,8,12,4];
let ans=num1.filter((el) =>{
    return el%2==0;
});
console.log(ans);

//===================================================================================================================
//DAY-03
//Every
//- every true if every element of an array gives true for some function. Else return false
//[1,2,3,4].every(some function definition or name)

// [1,2,3,4,].every((el)=>{
//     console.log(el%2==0);
// })

[2,4,6,8,10].every((el)=>{
    console.log(el%2==0);


})


//===================================================================================================================
//DAY-04
//reduce method
//arr.reduce(reducer function with 2 variable for(accumlator,element) )

let nums=[1,2,3,4];
let finalval=nums.reduce((res,el)=> {
   console.log(res);
    return res+el;

});
console.log(finalval);

//===================================================================================================================
//DAY-05
//MAximum in Array
let arr4=[1,4,2,5,6,7,2,9,2];
let max=-1;
for(let i=0;i<arr4.length;i++){
    if(max<arr4[i]){
        max=arr4[i];
    }
}
console.log(max);

let arr5=[1,4,2,5,6,7,2,9,2,11,2,11,122,44];
let ans0=arr5.reduce((max,el)=>{
    if(max<el){
        return el;
    }
    else{
        return max;
    }
});
console.log(ans0)


//===================================================================================================================
//DAY-06
//PRACTICE_QUESTION_1

//1-check if all the numbers in our array are multiples of 10 or not
let nums1=[10,20,40,50,30];
let ans1=nums1.every((el)=>{
    return el%10==0;
});
console.log(ans1);

//2- create a function to create the minimum number in an array;
let nums2=[10,20,40,50,30];
let min=nums2.reduce((min,el)=>{
    if(min<el){
        return min;
    }
    else{
        return min;
    }
});
console.log(min);


//===================================================================================================================
//DAY-07
//Default parameter
//-give a default value to a argument

//function func(a,b=6){
//do something
//}

function func(a,b=9){
    return a+b;
}
console.log(func(3));

function func1(a=7,b=9){
    return a+b;
}
console.log(func(3)); //asiggn the value of a=3 in place of 7

//===================================================================================================================
//DAY-08
// Spread
//-Expands an iterable  into multiple values
// generslly use for array
arr=[1,2,3,4,4,6,7,8,9,10,0];
//console.log(Math.min(arr[0],arr[1],arr[2],arr[3])); to save time use below method 
console.log(...arr);
console.log(Math.min(...arr));

//===================================================================================================================
//DAY-09
// spread literal
let Arr=[1,2,3,4,5];
let newArr=[...Arr];
console.log(newArr);

let char=[..."kishan"];
console.log(char);

let odd=[1,3,5,7];
let even=[2,4,6,8];
console.log(...odd,...even);

//===================================================================================================================
//DAY-10
// spread object  literal

const data={
    email:"kishan1123@gmail.com",
    password:"1234",
}
const datacopy={...data,id:123,country:"India   "};
console.log(datacopy )

let ARR=[1,2,3,4];//val
let obj1={...ARR}; //obj->key:value
console.log(obj1);

//===================================================================================================================
//DAY-11
// Rest
//  Allows a function to take an indefinite number of arguments and bundle them in an array
 function sum(...args){ //arguments
   for(let i=0;i<args.length;i++){
    console.log("you gave us: ",args[i]);
   }
    
 }
 sum(1);
 sum(2,3);
 sum(12,3,4,33,2);

 function minn(a,b,c,d){
    console.log(arguments);
 }
console.log(minn(1,2,3,4)) ;

function miin(msg,...args){
    console.log(msg);
    return args.reduce ((min,el)=>{
        if(el<min){
            return el;
        }
        else{
            return min
        }
    });
}
console.log(miin(10,1,2,3,4));

//===================================================================================================================
//DAY-12
// Destructuring

//-Stroing value of array into multiple variable
let names=['tony',"bruce",'steve','peter',"kishan","titu"];
let [winner,runnerup,...others]=names;
console.log(winner,runnerup);
console.log(...others);

//===================================================================================================================
//DAY-13
// Destructuring (object)

const student={
    name:"Titu",
    age:21,
    username:"Titu123",
    passward:123456,
    city:"Pune"

};
//let {username,passward,name} =student;
let {username:user,passward:secret,name,city="Mumbai"} =student;
//console.log(username,passward);
console.log(user,secret,city);

//===================================================================================================================
//DAY-14
//homework question

// Que1.Square and sum the array elements using the arrow function and then find the average of the array.
let NUMS=[1,2,3,4,5];
const squares=NUMS.map((num)=> NUMS*NUMS);
console.log(squares);

let SUM=squares.reduce((acc,cur)=> acc+cur,0);
//console.log(SUM);

let avg=SUM/NUMS.length;
console.log(avg);


//Qs2.Create a new array using the map function whose each element is equal to the original element plus 5
let number=[1,2,3,4,-5,-6,7];
console.log(number.map((number)=> number+5));

// Qs3.Create a new array whose  elements are in uppercase of words present in the original array.
let string=["adam","bob","catlyn","donald","eve"];
console.log(string.map((string)=>string.toUpperCase()));

//  Qs4.Write a function called double And Return Args which accepts an array and avariable number of 
//arguments.The function should return a new array with the original array values and all of the additional
//arguments doubled

const doubleandreturnarugs=(arr,...args)=>[
    ...arr,
    ...args.map((v)=> v*2),
];
console.log(doubleandreturnarugs([1,2,3],4,4));
//doubleandreturnarugs([2],10,3);

//Qs5.Write a function called merge Objects that accepts two objects and returns a new object which contains
//all the keys and values of the first object and second object.

const mergeobject=(obj1,obj2)=>({...obj1,...obj2});
let k=mergeobject({a:1,b:2},{c:3,d:4});
console.log(k);

