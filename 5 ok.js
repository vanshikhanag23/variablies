/*Write a program to take two numbers A and B from the user and calculate the quotient and remainder when number A is divided by number B.

Note: Print the output in the order as mentioned in the question.

Test Case1:
Input:
12
5
Output:
2
2

Test Case2:
Input:
15
6
Output:
2
3
*/

const input=require("readline-sync")
let a=input.questionInt("enter the value of a");
let b=input.questionInt("enter the value of b");
let V=a/b;
let D=a%b;
console.log(V,D);