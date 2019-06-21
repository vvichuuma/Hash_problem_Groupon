

point = {
  a: 1, 
  b: 2,
  c: 13,
  d: 4
}


function code(p , str){

  var sum = 0;

   for(let i = 0; i < str.length; i++){
       
       if(point[str[i]]){
         sum += point[str[i]];
       }

   }

  console.log(sum);

}

code(point , "aabc")