


function isPrime(num){

  var n = 1;
  var count = 0; 

  while(n <= num){
      
      if(num % n == 0){
        count += 1;
      }
    
    n += 1;
  }

  if(count == 2){
    console.log("It is a Prime Number");
  }else{
    console.log("It is not a prime Number");
  }
  
}

isPrime(27); 
isPrime(5);