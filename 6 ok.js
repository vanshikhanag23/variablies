/*1
Write a program to take a positive number from the user and then display the last digit of that number.

Test Case1:
Input:
843
Output:
3

Test Case2:
Input:
321
Output:
1

*/ 
const input=require("readline-sync")
let a=input.questionInt("enter the value of a");
 let c=a%10;
console.log(c);