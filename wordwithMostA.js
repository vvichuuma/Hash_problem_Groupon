
//Word with most A's: 

function mostArray(array){

  var l = 0;
  var final_word = "";

  array.forEach(function(word){

     var count = 0;
    
      word.split("").forEach((w) => {

           if(w === "a"){
             count ++;
           }

      })


      if(l < count){
        l = count;
        final_word = word;   
      }   

  })


  console.log(final_word);

}

mostArray(["aaabb", "abccaedaa", "aaa"])