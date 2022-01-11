
// Write your code here
/*
multiply

num1 and num2

random

mod 

set to an equation that will calculate the remainder of dividing variable num3 by num4; the remainder should be 4.


Create a variable called max that finds the highest number in a set; the value returned should be 20.
*/
// generates positive integer number that canu be represented by standart integer representation as 2^53 - 1 

let num1 = Math.floor(Math.random()*50 +1);
let num2 = 62/num1;
let multiply = Math.round(num1*num2);


let num4 =  Math.floor(Math.random()*50 +1);
let num3 = Math.round(4*num4/(num4 - 1));
let mod = num3%num4;

let random = Math.floor(Math.pow(2, Math.ceil(Math.random()*54)));


let max = Math.max(7,9,15,20);