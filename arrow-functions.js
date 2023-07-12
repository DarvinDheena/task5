const readline = require("readline");
const inp = readline.createInterface({
  input: process.stdin
});
const userInput =[];
inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {
// problem : 1   
//  print all the odd numbers in a given array
                var  array = userInput[0].split(" ");
                var oddnum = array.filter(n=>n%2);
                console.log(oddnum);

// problem : 2 
//  Convert all the strings to title caps in a string array using arrow function
                var array = userInput[0].toLowerCase().split(" ");
                titlecase = () => {
                for (var i = 0; i < array.length; i++) {
                        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
                }
                console.log(array.join(" "));
                }
                titlecase();
//  problem : 3 
// Sum of all numbers in an array using arrow function 
                var array = userInput[0].split(" ");
                        sumofarray =  () =>{
                                var sum = 0;
                                for(var i=0; i<array.length; i++){
                                    sum = sum + parseInt(array[i]);
                                }
                            console.log(sum);
                            }
                        sumofarray();
//  problem : 3 
// Return all the palindroms in an array using arroow function 

                var array = userInput[0].split(" ");
                const shortpalindromes=(array)=>array.filter((word)=>word.split("").reverse().join("")===word);
                console.log(shortpalindromes(array));
