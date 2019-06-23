
function fibannaci(n){


   c = 1; 
   var array = [1];

   while(c < n){
     
     if(c === 1){
        array.push(1)
     }else{
        var l = array.length; 

        var res = array[l-1] + array[l-2];
        //If you want to generate something less than 10:
        if(res <= 10){
        array.push(res);
        }
        
     }

      c+= 1;
   }

   console.log(array);

}

fibannaci(10);