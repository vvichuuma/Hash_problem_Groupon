
//Palindrome is a word which is gonna spell the same way even when it is reversed. : 


function palindrome(String){


 //1). Splitting the string in an array: 
 var array = String.split("");
 //2). creating an empty array and popping out the original array elements into it: 

 var Rearray = []; 
var len = array.length;

  for(let i =0; i < len; i++){

     Rearray.push(array.pop()); 
  }

var res = (Rearray.join(""));
  

  if(res === String){
    console.log("They are equal, It is a Palindrome");
  }else{
    console.log("They are not equal");
  }



}

palindrome("codeKid");
palindrome("racecar")