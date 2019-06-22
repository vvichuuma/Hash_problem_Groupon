

function primeArray(a, b){


  var array = [];
  var count = 0; 


   while(a <= b){

         var c = 1;  
         var sum = 0;     
    //------

     while(c <= a ){
         
         if(a%c == 0){
            sum += 1;
         }
         c+= 1;

     }

     if(sum == 2){
       array.push(a)
     }

     //-------
             
       a += 1;

   }


   console.log(array);

}

primeArray(1,100);