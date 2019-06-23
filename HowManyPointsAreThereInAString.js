//How many points are there in a given String: 
var points = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
}

var h = {};

function codeWord(string){
   
  var sum = 0;
  var codeArray = string.split("");

  for(let i = 0; i < codeArray.length; i ++){
     if(points[codeArray[i]]){
       sum += points[codeArray[i]];
     }
  }
 
 console.log(sum);

}

codeWord("abacd")