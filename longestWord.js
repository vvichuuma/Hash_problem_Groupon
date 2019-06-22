
function LongestWord(string){


var array = string.split(" ");

 var len = 0;

  var word = "";

 array.forEach( (a) => {

   if(len < a.length){
      len = a.length; 
      word = a;
   }

 })

 console.log(word);

}


LongestWord("This is the longestword in the sentence ");