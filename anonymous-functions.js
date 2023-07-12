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
            var array = userInput[0].split(" ");
        function oddnum () {
            odd = [];
            for(var i=0; i<array.length; i++){
                if (array[i] % 2  !=0){
                    odd.push(array[i]);
                }
            }
            console.log(odd);
        }
        oddnum () ;
// problem : 2 
//  Convert all the strings to title caps in a string array
            var array = userInput[0].toLowerCase().split(" ");
            function titlecase (){
            for (var i = 0; i < array.length; i++) {
                    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
            }
            console.log(array.join(" "));
            }
            titlecase();
//  problem : 3 
// Sum of all numbers in an array
                        var array = userInput[0].split(" ");
            function sumofarray (){
                var sum = 0;
                for(var i=0; i<array.length; i++){
                    sum = sum + parseInt(array[i]);
                }
                console.log(sum);
            }
            sumofarray();
// problem : 4   
// Return all the prime numbers in an array
              var data =userInput[0].split(" ");
              console.log(data);
              var array = [];
              function prime(){
                  for (var i=0; i<data.length; i++){
                      if((data[i])==2){
                          array.push(data[i]);
                      }
                      if((data[i])>2){
                          for(var j=2; j<parseInt(data[i]); j++){
                          if((data[i]) % j  != 0  ){
                              array.push(data[i]);
                          }
                      }
                  }
                  }
                  console.log(array);
              }
              prime();
// problem : 5 
// return all the palindromes in an array
              var data=userInput[0].split(" ");
              var org = [];
              function checkpalindrome () {
                  for (var i=0; i<data.length; i++){
                    var s = data[i].split("").reverse().join("");
                      console.log(s);
                      if (data[i] == s){
                          org.push(s);
                      }
                      
              } console.log(org);

              }
              checkpalindrome();
// problem : 6 
// Return median of two sorted arrays of the same size.
                var arr1 = userInput[0].split(" ");
                var arr2 = userInput[1].split(" ");
                var array = arr1.concat(arr2);
                array=array.sort();
                function median(){
                    if (arr1.length==arr2.length){
                        var num1 =  (array.length)/2 ; 
                        var num2 = (array.length/2)+1 ;
                        var mediannum = (num1 + num2)/2 ;
                        console.log(mediannum);
                    }
                    else{
                        console.log("the given array is not same size");
                    }
                }
                median();
// problem : 7 
//  Remove duplicates from an array
                  var array = userInput[0].split(" ");
                  function removedublicate(){
                      var output=[];
                      for (var i=0; i<array.length-1; i++){
                          if (array[i] != array[i+1]){
                              output.push(array[i]);
                          }
                      }console.log(output);
                  }
                  removedublicate();
//  problem : 8 
//  Rotate an array by k times
                    var array = userInput[0].split(" ");
                    var k = parseInt(userInput[1]);
                    function rotation(){
                        for (var i=0; i<k; i++){
                            array.unshift(array[array.length-1]);
                            array.pop();
                    }  
                            console.log(array);
                    }
                    rotation ();

});

