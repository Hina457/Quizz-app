#!/usr/bin/env node
import inquirer from  "inquirer";

console.log("Welcome to Hina Alvi Quizz app");
console.log("Each Question is of 10 marks\n");

let marks:number = 0;

let userinput = await inquirer.prompt([{
    type:"list",
    name:"question1",
    message:"1.Who set before the Indian Muslims a national goal which later came to be known as Pakistan?",
    choices:["Haji Shariatullah"," Rehmat Ali","Allama Iqbal"," Quaid-e-Azam"]

},
{
    type:"list",
    name:"question2",
    message:"2.The national sport of Pakistan is?",
    choices:["Cricket" ,"Hockey"," Squash","Football"],

},
{

    type:"list",
    name:"question3",
    message:"3.Which animal is the national animal of Pakistan?",
    choices:["Tiger","lion","Markhor","panda"],

},
{

    type:"list",
    name:"question4",
    message:"4.Which flower is the national flower of Pakistan?",
    choices:["Rose","sunflower","Lily","jasmine"],

},
{
 
    type:"list",
    name:"question5",
    message:"5.At the time of creation of the Pakistan, Central Secretariat was established at?",
    choices:["Karachi","peshawar","Lahore","Rawalpindi"],

}
]);

const {question1,question2,question3,question4,question5} =userinput
//this is called destructuring

let correctoption = ["Allama Iqbal","Hockey","Markhor","jasmine","Karachi"];

if(question1 === "Allama Iqbal") marks +=10;
if(question2 === "Hockey") marks += 10;
if(question3 === "Markhor") marks += 10;
if(question4 === "jasmine") marks += 10;
if(question5 === "Karachi") marks += 10;
console.log(marks);

function myanswers(){
    console.log(`\n Correct Options:`, correctoption);
 
    if(marks == 50){
        console.log(`\nCongratualtions! You got full ${marks} marks`);
    }else if(marks > 0){
       console.log(`\nYou got ${marks} marks out of 50!`)
    }else{
        console.log(`\nUnfortunately! you got ${marks} marks out of 50`);
    }
}
myanswers();
