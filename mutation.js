
function mutation(a , b){
  
   var b_length = b.length; 
   var word_length = 0;

   b.split("").forEach( (word) => {

     if(a.includes(word)){
       word_length += 1;
     }

   }) 

  if(word_length == b_length){
    console.log("true");
  }else{
    console.log("false");
  }

}

mutation("burly", "ruby")
mutation("burly", "rubyz")