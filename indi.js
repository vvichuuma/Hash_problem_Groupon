//Find the number of indi.word in a word:
function hash(String){
  
   var h = {}; 

   for(let i =0; i < String.length; i++){
     if(h[String[i]]){
       h[String[i]]++;
     }else{
       h[String[i]] = 1;
     }
   }
  
  
  console.log(h);
  
}

hash("aaabbbCCCddEEffGGi")