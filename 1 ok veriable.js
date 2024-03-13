/*Write a program to take three variables to store your birth date, birth month, and birth year, respectively, and then print them one by one in a specified order.

Test Case1:
Explanation:
If the birth date is 22, the birth is May and the birth year is 2001 then
Output:
22
May
2001

*/

const input = require ("readline-sync");
let dd=input.question("enter the value of date")
let mm=input.question("enter the value of month")
let yyyy=input.question(" enter the value of year") 
console.log ("date of;",dd)
console.log ("month of;",mm)
console.log (" year of;",yyyy)

