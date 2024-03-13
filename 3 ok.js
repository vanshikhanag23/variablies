/*Write a program to take two values from the user and swap them. 


Test Case1:
Input:
12
4
Output:
4
12

Test Case2:
Input:
99
45
Output:
45
99
*/

const input=require("readline-sync")
let a=input.questionInt("enter the value of a");
let b=input.questionInt("enter the value of b");
 a=a+b;
 b=a-b;
 a=a-b;
console.log(a,b);