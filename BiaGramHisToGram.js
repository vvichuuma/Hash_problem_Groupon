//A bigram is any two adjacent words in the text disregarding case and punctuation. A histogram
//is the count of how many times that particular bigram occurred in the text.
//A well-formed submission will be runnable from command line and have accompanying unit
//tests for the bigram parsing and counting code. You may do this in any language you wish and
//use any framework or data structures you wish to handle reading the files, building up the
//output, and running the unit tests. However the bigram parsing and counting code must be
//implemented by yourself.



function biogram(word){
  
  //stripping off the punctuations: 
  var words = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  //putting it in an array:
  var arr = words.split(" ");
  
  var array = [];
  for(let i = 0; i < (arr.length - 1) ; i++){
    
    array.push(`${arr[i].toLowerCase()} ${arr[i+1].toLowerCase()}`);
    
  }
 
  //initializing the hash and tracking down the biagrams(histogram)
  var h = {}; 

  for(let j = 0; j < (arr.length - 1); j ++){
    
      if(h[array[j]]){
        h[array[j]]++;
      }else{
        h[array[j]] = 1;
      }
    
  }
  
  console.log("----");

  console.log(h);
  
}

biogram("The quick, brown fox and the quick blue hare.");
biogram("The quick brown fox and the quick blue hare.");