/*Write a program to take two numbers from the user and perform Six basic operations (addition, subtraction, multiplication, division, integer division and modulus) on those two numbers.

Note: Print the output in the order as mentioned in the question.

Test Case1:
Input:
12
5
Output:
17
7
60
2.4
2
2
*/

const input=require("readline-sync")
let a=input.questionInt("enter the value of a");
let b=input.questionInt("enter the value of b");
let c=a+b;
let d=a-b;
let e=a*b;
let f=a/b;
let g = Math.floor(a/b);
let h=a%b;
console.log(c,d,e,f,g,h);



