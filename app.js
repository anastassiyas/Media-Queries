console.log("Hello World");
//window objects//
//alertsbmessage on the page
alert ("You have to be 18 to enter this Site");
//Ask a yes/no
confirm("Are you over 18");
//give an input. promts an answer.
prompt("How old are you");

console.log("Hello"+"world");
console.log("Hello + 5*10");
console.log("Hello" + 5*10);

var firstName="Anastassiya";
var lastName="Savostina";
var middleInitial="N";
//console.log, alert, document.write, target html element
console.log(firstName[5]);

alert("My name is "+""+firstName+ '\n' + 
"My last name is"+""+ lastName + '\n'+
"My last name is"+"" + lastName); 
document.write("My name is "+""+firstName+ '\n' + 
"My last name is"+""+ lastName + '\n'+
"My last name is"+"" + lastName);

document.getElementById("demo").innerHTML="My name is "+""+firstName+ '\n' + 
"My last name is"+""+ lastName + '\n'+
"My last name is"+"" + lastName; 

// The Fortune Teller
var children=2;
var partner="Alexey";
var geographicLocation="Denver";
var jobTitle="Web developer";

console.log( "You will be a " + jobTitle + " in " +
geographicLocation + " and married to " + partner + 
" with " + children + " kids ")

alert("You will be a "+ jobTitle + " in " +
geographicLocation + " and married to " + partner +
" with " + children + " kids ");

document.write(" You will be a "+ jobTitle + " in " +
geographicLocation+ " and married to " + partner + " with " + children + " kids ");

document.getElementById("demo").innerHTML=" You will be a " + jobTitle + " in " +
geographicLocation+ " and married to " + partner + " with " + children + " kids ";
